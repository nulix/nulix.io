"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type StatusData = {
  status: "operational" | "degraded" | "down" | "unknown";
  statusCode?: number;
  latency?: number;
  error?: string;
  checkedAt?: string;
};

export default function StatusPage() {
  const [data, setData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);

  const check = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/status", { cache: "no-store" });
      const json = await res.json();
      setData(json);
    } catch {
      setData({ status: "unknown" });
    }
    setLoading(false);
  };

  useEffect(() => {
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  const statusColor = {
    operational: "var(--accent)",
    degraded: "var(--warn)",
    down: "#ff4444",
    unknown: "var(--muted)",
  }[data?.status || "unknown"];

  const statusLabel = {
    operational: "Operational",
    degraded: "Degraded",
    down: "Down",
    unknown: "Unknown",
  }[data?.status || "unknown"];

  return (
    <>
      <Header />
      <main className="wrap" style={{ paddingTop: 64, paddingBottom: 96, maxWidth: 800 }}>
        <h1 className="section-title" style={{ marginBottom: 16 }}>System Status</h1>
        <p className="muted" style={{ marginBottom: 40 }}>Current status of NULIX services</p>

        <div className="panel" style={{ padding: 28 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div>
              <h2 style={{ marginBottom: 6 }}>Platform</h2>
              <p className="muted" style={{ fontSize: 14 }}>platform.nulix.io</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: statusColor }} />
              <span>{loading ? "Checking..." : statusLabel}</span>
            </div>
          </div>
          {data?.latency !== undefined && data.status !== "down" && (
            <p className="muted" style={{ fontSize: 14 }}>Response time: {data.latency}ms</p>
          )}
          {data?.checkedAt && (
            <p className="muted" style={{ fontSize: 13, marginTop: 8 }}>
              Last checked: {new Date(data.checkedAt).toLocaleString()}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
