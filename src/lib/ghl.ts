import { type Submission, conditionLabels } from "./schema";

const GHL_API = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

type GhlEnv = {
  token: string;
  locationId: string;
  pipelineId?: string;
  pipelineStageId?: string;
};

function readEnv(): GhlEnv | null {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) return null;
  return {
    token,
    locationId,
    pipelineId: process.env.GHL_PIPELINE_ID,
    pipelineStageId: process.env.GHL_PIPELINE_STAGE_ID,
  };
}

function formatDeviceSummary(submission: Submission): string {
  return submission.devices
    .map((d, i) => {
      const cond = conditionLabels[d.condition];
      const issues = d.condition === "has-issues" && d.issues ? ` — issues: ${d.issues}` : "";
      return `${i + 1}. ${d.model} (${cond})${issues}`;
    })
    .join("\n");
}

function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

async function ghlFetch(env: GhlEnv, path: string, init: RequestInit) {
  const res = await fetch(`${GHL_API}${path}`, {
    ...init,
    headers: {
      "Authorization": `Bearer ${env.token}`,
      "Version": GHL_VERSION,
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : {};
  if (!res.ok) {
    const message = (data as { message?: string }).message ?? `GHL ${path} failed: ${res.status}`;
    throw new Error(message);
  }
  return data;
}

export async function sendToGhl(submission: Submission): Promise<{ ok: true; mode: "ghl" | "noop"; contactId?: string }> {
  const env = readEnv();

  if (!env) {
    console.warn("[ghl] env not configured — logging lead instead", {
      name: submission.name,
      email: submission.email,
      phone: submission.phone,
      devices: submission.devices,
    });
    return { ok: true, mode: "noop" };
  }

  const { first, last } = splitName(submission.name);
  const summary = formatDeviceSummary(submission);

  const contactPayload = {
    locationId: env.locationId,
    firstName: first,
    lastName: last,
    name: submission.name,
    email: submission.email,
    phone: submission.phone,
    source: "sellmyphonesydney.com.au",
    tags: ["sell-my-phone-sydney", "website-quote-request"],
    customFields: [
      { key: "devices_summary", field_value: summary },
      { key: "device_count", field_value: String(submission.devices.length) },
    ],
  };

  const upsert = (await ghlFetch(env, "/contacts/upsert", {
    method: "POST",
    body: JSON.stringify(contactPayload),
  })) as { contact?: { id?: string }; id?: string };

  const contactId = upsert?.contact?.id ?? upsert?.id;

  if (env.pipelineId && env.pipelineStageId && contactId) {
    const oppName = `${submission.name} — ${submission.devices.length} device${
      submission.devices.length === 1 ? "" : "s"
    }`;
    try {
      await ghlFetch(env, "/opportunities/", {
        method: "POST",
        body: JSON.stringify({
          locationId: env.locationId,
          pipelineId: env.pipelineId,
          pipelineStageId: env.pipelineStageId,
          contactId,
          name: oppName,
          status: "open",
          source: "sellmyphonesydney.com.au",
        }),
      });
    } catch (err) {
      console.error("[ghl] opportunity create failed (contact still saved)", err);
    }
  }

  return { ok: true, mode: "ghl", contactId };
}
