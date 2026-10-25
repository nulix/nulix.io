export const features = [
  ["01 / atomic", "A/B updates with auto rollback", "Fail safely: write to inactive slot, verify health, auto-rollback on boot failure.", "slot A ↔ slot B · health check → commit/rollback"],
  ["02 / delta", "Delta + resumable downloads", "Send only diffs. Resume after drops for slow LTE or flaky links.", "$ curl -I ... · range requests · partial reassembly"],
  ["03 / rollout", "Staged rollouts with control", "Canary, % or tags. Pause/abort on error thresholds in one click.", "canary → 10% → 100% · pause on failure"],
  ["04 / build", "Integrate into your toolchain", "Yocto layer, Buildroot package, Debian package, CLI + REST API for CI.", "INHERIT += nulix · signed in CI · artifacts versioned"],
];

export const steps = [
  ["Add the agent", "Include the NULIX client in your image through your layer or package. Devices enroll on first boot."],
  ["Push a release from CI", "Upload the build artifact. It is signed, versioned and diffed against previous releases."],
  ["Roll out and monitor", "Start with a canary group, watch health signals, then widen to the whole fleet."],
];

export const rollouts = [["Canary group", "100%", 100], ["EU production", "64%", 64], ["North America", "Queued", 0]] as const;
export const devices = [
  ["gw-0412", "2.4.1", "Updated", "accent"],
  ["gw-0413", "2.4.0", "Downloading", "info"],
  ["gw-0417", "2.4.0", "Rolled back", "warn"],
  ["gw-0421", "2.3.9", "Offline", "muted"],
] as const;
export const stats = [["Devices online", "4,812"], ["On latest release", "71%"], ["Active rollouts", "2"], ["Rollbacks (7d)", "3"]];
export const compat = ["Yocto", "Buildroot", "Debian", "Raspberry Pi", "NXP i.MX", "STM32MP", "RAUC", "SWUpdate"];

export const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    desc: "For evaluation and small fleets",
    features: ["Up to 25 devices", "A/B updates & rollback", "Signed artifacts", "Community support"],
    cta: "Start free",
    href: "https://platform.nulix.io",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    desc: "For teams rolling to production",
    features: ["Up to 1,000 devices", "Delta updates & resumable downloads", "Staged rollouts & groups", "Fleet observability", "Email support"],
    cta: "Talk to sales",
    href: "#demo",
    highlight: true,
  },
  {
    name: "Enterprise / Self-hosted",
    price: "Custom",
    period: "",
    desc: "For scale, compliance, or air-gapped",
    features: ["Unlimited devices", "Self-hosted or private cloud", "Air-gapped deployments", "RBAC & audit logs", "SLA & dedicated support"],
    cta: "Book a demo",
    href: "#demo",
    highlight: false,
  },
];

export const comparison = [
  ["Feature", "NULIX", "Mender", "RAUC + hawkBit", "SWUpdate", "DIY"],
  ["Atomic A/B + auto rollback", "✓", "✓", "✓", "~", "Build yourself"],
  ["Delta & resumable", "✓", "Add-on/varies", "Limited", "Limited", "Complex"],
  ["Staged rollouts / canary", "✓", "✓", "Possible", "Manual", "Complex"],
  ["Yocto/Buildroot/Debian packages/layer", "✓", "✓", "Partial", "✓", "N/A"],
  ["Fleet dashboard", "✓", "✓", "Basic", "None/minimal", "Build yourself"],
  ["Self-hosted / air-gapped", "✓", "Enterprise", "✓", "✓", "✓"],
  ["Time to first rollout", "Minutes", "Hours–days", "Days–weeks", "Days", "Weeks–months"],
];

export const faq = [
  {
    q: "Do you support offline or disconnected devices?",
    a: "Yes. Devices can download when connectivity returns; updates are resumable and staged. For fully air-gapped fleets, NULIX can be self-hosted with no outbound dependency.",
  },
  {
    q: "How are bandwidth limits handled?",
    a: "Delta updates minimize transfer size. Rollouts are rate-limited per group and downloads are resumable, so they play nicely with metered LTE and constrained links.",
  },
  {
    q: "What is the rollback behavior?",
    a: "A/B slots with health checks. If the new slot fails to boot or health checks fail, the device automatically boots back to the last known good slot and reports the rollback to the fleet dashboard.",
  },
  {
    q: "Where is data stored / data location?",
    a: "With the managed service, artifacts and metadata are stored in your selected region. For self-hosted deployments, all data stays in your infrastructure with no device data sent to NULIX.",
  },
  {
    q: "Can I self-host NULIX platform?",
    a: "Yes. The Enterprise/Self-hosted tier supports on-prem and air-gapped installations with the same signing, rollout, and observability features.",
  },
];
