import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <section id="demo" className="wrap section">
      <h2 className="section-title">Request a demo or start free</h2>
      <p className="lead">Tell us a bit about your fleet and we’ll get you set up.</p>
      <div className="grid-2">
        <ContactForm />
        <div className="panel" style={{ padding: 28 }}>
          <h3 style={{ marginBottom: 10 }}>What happens next</h3>
          <p className="muted" style={{ marginBottom: 18 }}>We’ll review your request and share a test environment + onboarding checklist.</p>
          <div className="checks">
            <div><span className="accent">✓</span><span>Connect a test device in minutes</span></div>
            <div><span className="accent">✓</span><span>Run your first signed release</span></div>
            <div><span className="accent">✓</span><span>Try staged rollout + rollback</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
