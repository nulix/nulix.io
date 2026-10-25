import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Status – NULIX",
  description: "NULIX system status.",
};

export default function StatusPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ paddingTop: 64, paddingBottom: 96, maxWidth: 800 }}>
        <h1 className="section-title" style={{ marginBottom: 16 }}>System Status</h1>
        <p className="muted" style={{ marginBottom: 40 }}>Status information coming soon.</p>
        <div className="panel" style={{ padding: 28 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h2 style={{ marginBottom: 6 }}>Platform</h2>
              <p className="muted" style={{ fontSize: 14 }}>platform.nulix.io</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--muted)" }} />
              <span>Unknown</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
