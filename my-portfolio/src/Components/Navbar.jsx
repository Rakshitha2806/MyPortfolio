import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">&lt;/&gt;</span> Rakshitha G G
      </a>

      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

