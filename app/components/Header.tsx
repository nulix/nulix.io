"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
      <div className="nav-right">
        <a href="https://platform.nulix.io" className="btn btn-primary btn-sm nav-platform">Platform</a>
        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>
      <div className={`nav-menu ${open ? "open" : ""}`}>
        <nav className="nav-links-mobile">
          <a href="/#features" onClick={() => setOpen(false)}>Features</a>
          <a href="/#how" onClick={() => setOpen(false)}>How it works</a>
          <a href="/services" onClick={() => setOpen(false)}>Services</a>
          <a href="/#integration" onClick={() => setOpen(false)}>Integration</a>
          <a href="/#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="/#comparison" onClick={() => setOpen(false)}>Comparison</a>
          <a href="/#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="/#demo" onClick={() => setOpen(false)}>Contact</a>
          <a href="https://docs.nulix.io" target="_blank" rel="noopener">Docs</a>
        </nav>
      </div>
    </header>
  );
}
