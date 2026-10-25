export default function Integration() {
  return (
    <section id="integration" className="wrap section">
      <h2 className="section-title">Copy a config and ship in minutes</h2>
      <p className="lead">Drop NULIX into your Yocto build with a couple of lines. No custom server code required.</p>
      <div className="grid-2">
        <div className="panel">
          <div className="panel-head"><strong style={{ color: "var(--text)" }}>conf/local.conf</strong><span className="mono">Yocto</span></div>
          <pre className="terminal">{`# Enable NULIX OTA
INHERIT += "nulix"
NULIX_SERVER = "https://ota.nulix.example"
NULIX_SIGNING_KEY = "\${TOPDIR}/keys/nulix-ed25519.pem"
NULIX_FLEET = "gateway-prod"`}</pre>
        </div>
        <div className="panel">
          <div className="panel-head"><strong style={{ color: "var(--text)" }}>conf/bblayers.conf</strong><span className="mono">Yocto layer</span></div>
          <pre className="terminal">{`BBLAYERS ?= " \\
  /path/to/poky/meta \\
  /path/to/poky/meta-poky \\
  /path/to/meta-openembedded/meta-oe \\
  /path/to/meta-nulix \\
  "`}</pre>
        </div>
      </div>
      <div className="panel" style={{ marginTop: 20 }}>
        <div className="panel-head"><strong style={{ color: "var(--text)" }}>One-line install (on device)</strong><span className="mono">CLI / package</span></div>
        <pre className="terminal">{`curl -sSL https://get.nulix.example | sh`}</pre>
      </div>
    </section>
  );
}
