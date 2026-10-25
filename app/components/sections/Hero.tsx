import { compat } from "../../data/home";

export default function Hero() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <div className="eyebrow accent">OTA PLATFORM FOR EMBEDDED LINUX</div>
          <h1>Update every device in the field. Without bricking one.</h1>
          <p className="sub">Atomic A/B updates, delta images and staged rollouts for Yocto, Buildroot and Debian fleets. Signed end to end, rolled back automatically.</p>
          <p className="sub" style={{ marginTop: -18 }}>Helps support EU Cyber Resilience Act (CRA) compliance efforts with signed artifacts, audit logs, and controlled rollouts.</p>
          <div className="btn-row">
            <a href="https://platform.nulix.io" className="btn btn-primary">Start free</a>
            <a href="/#demo" className="btn btn-ghost">Book a demo</a>
          </div>
          <div className="note">Start free · No credit card</div>
        </div>
        <div className="panel">
          <div className="panel-head mono">release pipeline</div>
          <pre className="terminal">{`$ nulix release create core-image-2.4.1.wic.bz2
`}<span className="accent">✓</span>{` signed with ed25519 key
`}<span className="accent">✓</span>{` delta built against 2.4.0
$ nulix rollout start --group canary --percent 5
`}<span className="accent">✓</span>{` pushing to canary...
`}<span style={{ color: "var(--warn)" }}>!</span>{` health check failed on gw-0417
`}<span className="accent">✓</span>{` auto-rollback to last good slot · paused`}</pre>
        </div>
      </section>

      <div className="wrap"><div className="compat">{compat.map((c) => <span key={c}>{c}</span>)}</div></div>
    </>
  );
}
