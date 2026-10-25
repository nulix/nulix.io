export default function Header() {
  return (
    <header className="wrap nav">
      <a href="/" className="logo" style={{ textDecoration: "none" }}>NULIX</a>
      <nav className="nav-links" aria-label="Main">
        <a href="/#features">Features</a>
        <a href="/#how">How it works</a>
        <a href="/services">Services</a>
        <a href="/#integration">Integration</a>
        <a href="/#pricing">Pricing</a>
        <a href="/#comparison">Comparison</a>
        <a href="/#faq">FAQ</a>
        <a href="/#demo">Contact</a>
        <a href="https://docs.nulix.io" target="_blank" rel="noopener">Docs</a>
      </nav>
      <div className="nav-actions">
        <a href="https://platform.nulix.io" className="btn btn-primary btn-sm">Platform</a>
      </div>
    </header>
  );
}
