import { faq } from "../../data/home";

export default function FAQ() {
  return (
    <section id="faq" className="wrap section">
      <h2 className="section-title">FAQ</h2>
      <p className="lead">Answers for embedded teams.</p>
      <div className="faq-list">
        {faq.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
