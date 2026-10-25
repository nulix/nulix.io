import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NULIX collects, uses, and protects your data.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="wrap" style={{ paddingTop: 64, paddingBottom: 96, maxWidth: 800 }}>
        <h1 className="section-title" style={{ marginBottom: 16 }}>Privacy Policy</h1>
        <p className="muted" style={{ marginBottom: 40 }}>Last updated: {new Date().getFullYear()}</p>

        <section style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div>
            <h2 style={{ marginBottom: 10 }}>Who we are</h2>
            <p className="muted">NULIX ("we", "us", "our") provides an OTA platform for embedded Linux devices.</p>
          </div>

          <div>
            <h2 style={{ marginBottom: 10 }}>Data we collect</h2>
            <p className="muted">When you submit our demo/contact form, we collect the information you provide (email, company, fleet size, and use case). We do not run third-party analytics or advertising trackers on this site.</p>
          </div>

          <div>
            <h2 style={{ marginBottom: 10 }}>How we use it</h2>
            <p className="muted">We use this information solely to respond to your inquiry, evaluate fit, and follow up about a demo or trial. We do not sell your data.</p>
          </div>

          <div>
            <h2 style={{ marginBottom: 10 }}>Third-party services</h2>
            <p className="muted">Form submissions are processed by <a href="https://web3forms.com/" target="_blank" rel="noopener">Web3Forms</a> and delivered to <a href="mailto:hello@nulix.hr">hello@nulix.hr</a>. Their use of your data is governed by their own privacy policy.</p>
          </div>

          <div>
            <h2 style={{ marginBottom: 10 }}>Self-hosting</h2>
            <p className="muted">If you deploy NULIX in a self-hosted or air-gapped environment, we do not collect device telemetry, update history, or fleet data from your installation.</p>
          </div>

          <div>
            <h2 style={{ marginBottom: 10 }}>Contact</h2>
            <p className="muted">If you have questions about this policy, email <a href="mailto:hello@nulix.hr">hello@nulix.hr</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
