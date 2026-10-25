import { steps } from "../../data/home";

export default function HowItWorks() {
  return (
    <section id="how" className="how">
      <div className="wrap">
        <h2 className="section-title" style={{ marginBottom: 44 }}>From commit to fleet in three steps</h2>
        <div className="grid-3" style={{ gap: 40 }}>
          {steps.map(([title, body], i) => (
            <div key={title} className="step"><div className="n">{i + 1}</div><h3>{title}</h3><p>{body}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
