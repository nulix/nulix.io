export default function Security() {
  return (
    <section id="security" className="wrap security">
      <div>
        <h2 className="section-title" style={{ marginBottom: 20 }}>Security you can show an auditor</h2>
        <p className="lead">A repeatable, documented path for shipping security patches across the product lifetime.</p>
        <div className="checks">
          {["Signed artifacts verified on-device before install", "TLS with mutual authentication per device", "Role-based access and a full audit log", "Update records to support your CRA and IEC 62443 work"].map((t) => (
            <div key={t}><span className="accent">✓</span><span>{t}</span></div>
          ))}
        </div>
      </div>
      <div className="panel lifecycle">
        <div style={{ color: "var(--text)", marginBottom: 10 }}>update lifecycle</div>
        <div>download <span className="accent">→</span> verify signature</div>
        <div>write inactive slot <span className="accent">→</span> reboot</div>
        <div>health check <span className="accent">→</span> commit</div>
        <div>failure <span style={{ color: "var(--warn)" }}>→</span> rollback + report</div>
      </div>
    </section>
  );
}
