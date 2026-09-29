import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#stack", label: "Tech stack" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { toggle } = useTheme();

  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">Moiz Ahmad Awan</a>
        <nav aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <button id="theme" type="button" aria-label="Toggle light or dark theme" onClick={toggle}>
            Theme
          </button>
        </nav>
      </div>
    </header>
  );
}
