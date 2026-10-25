import { features } from "../../data/home";

export default function Features() {
  return (
    <section id="features" className="wrap section">
      <h2 className="section-title">Everything between your build server and the device</h2>
      <p className="lead">One platform for artifacts, signing, rollout and monitoring. Need help with hardware, firmware, or embedded Linux?{" "}<a href="/services" style={{ color: "var(--text)", textDecoration: "underline" }}>See our services</a>.</p>
      <div className="grid-4">
        {features.map(([tag, title, body, snippet]) => (
          <div key={tag} className="card feature-card">
            <div className="tag">{tag}</div>
            <h3>{title}</h3>
            <p>{body}</p>
            <pre className="feature-snippet mono">{snippet}</pre>
          </div>
        ))}
      </div>
    </section>
  );
}
