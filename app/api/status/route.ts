import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://platform.nulix.io";
  const start = Date.now();

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeout);
    const latency = Date.now() - start;

    return NextResponse.json({
      status: res.ok ? "operational" : "degraded",
      statusCode: res.status,
      latency,
      checkedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "down",
        error: "unreachable",
        checkedAt: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
