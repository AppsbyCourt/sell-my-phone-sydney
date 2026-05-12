import { NextResponse } from "next/server";
import { submissionSchema } from "@/lib/schema";
import { sendToGhl } from "@/lib/ghl";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data", details: parsed.error.flatten() },
      { status: 422 },
    );
  }

  try {
    const result = await sendToGhl(parsed.data);
    return NextResponse.json({ ok: true, mode: result.mode }, { status: 200 });
  } catch (err) {
    console.error("[submit] failed", err);
    return NextResponse.json(
      { error: "Could not send your quote request. Please try again or email us." },
      { status: 502 },
    );
  }
}
