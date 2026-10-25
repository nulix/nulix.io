import { pricing } from "../../data/home";

export default function Pricing() {
  return (
    <section id="pricing" className="wrap section">
      <h2 className="section-title">Simple, predictable pricing</h2>
      <p className="lead">Start free. Scale as you ship.</p>
      <div className="grid-3">
        {pricing.map((p) => (
          <div key={p.name} className={`card pricing-card ${p.highlight ? "highlight" : ""}`}>
            <div className="pricing-head">
              <h3>{p.name}</h3>
              {p.highlight && <span className="pill">Most popular</span>}
            </div>
            <div className="price-row">
              <span className="price">{p.price}</span>
              <span className="period">{p.period}</span>
            </div>
            <p className="pricing-desc">{p.desc}</p>
            <ul className="pricing-list">
              {p.features.map((f) => (
                <li key={f}><span className="accent">✓</span><span>{f}</span></li>
              ))}
            </ul>
            <a href={p.href} className={`btn ${p.highlight ? "btn-primary" : "btn-ghost"} pricing-cta`}>{p.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
