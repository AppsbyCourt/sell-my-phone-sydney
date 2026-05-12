import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  brand?: string;
  model?: string;
  condition?: string;
  issues?: string[];
  notes?: string;
  name?: string;
  phone?: string;
  email?: string;
};

function isValid(p: LeadPayload): p is Required<Pick<LeadPayload, "brand" | "model" | "condition" | "name" | "phone" | "email">> & LeadPayload {
  return Boolean(
    p.brand &&
      p.model &&
      p.condition &&
      p.name?.trim() &&
      p.phone?.trim() &&
      p.email?.trim() &&
      /\S+@\S+\.\S+/.test(p.email),
  );
}

export async function POST(req: Request) {
  let payload: LeadPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValid(payload)) {
    return NextResponse.json(
      { error: "Missing or invalid fields" },
      { status: 400 },
    );
  }

  const lead = {
    source: "sellmyphonesydney.com.au",
    submittedAt: new Date().toISOString(),
    device: {
      brand: payload.brand,
      model: payload.model,
      condition: payload.condition,
      issues: payload.issues ?? [],
      notes: payload.notes ?? "",
    },
    contact: {
      name: payload.name?.trim(),
      phone: payload.phone?.trim(),
      email: payload.email?.trim(),
    },
  };

  console.log("[lead]", JSON.stringify(lead));

  const webhook = process.env.GHL_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("[lead] webhook failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
