export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="mono">© {new Date().getFullYear()} NULIX</div>
        <nav aria-label="Footer">
          <a href="/#integration">Integration</a>
          <a href="https://docs.nulix.io">Docs</a>
          <a href="/status">Status</a>
          <a href="/privacy">Privacy</a>
          <a href="/#demo">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
