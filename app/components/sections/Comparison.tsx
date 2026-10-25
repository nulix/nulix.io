import { comparison } from "../../data/home";

export default function Comparison() {
  return (
    <section id="comparison" className="wrap section">
      <h2 className="section-title">NULIX vs the alternatives</h2>
      <p className="lead">Embedded teams usually weigh Mender, RAUC with hawkBit, SWUpdate, or building their own.</p>
      <div className="panel" style={{ overflowX: "auto" }}>
        <table className="compare-table">
          <thead>
            <tr>
              {comparison[0].map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.slice(1).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={j === 0 ? "row-label" : ""}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted" style={{ marginTop: 14, fontSize: 14 }}>Comparison is based on common capabilities; check vendor docs for specifics.</p>
    </section>
  );
}
