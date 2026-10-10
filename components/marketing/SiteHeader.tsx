import Link from "next/link";
import { links } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/">
          ClientTempo
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <Link className="nav-text" href="/#features">
            Features
          </Link>
          <Link className="nav-text" href="/#pricing">
            Pricing
          </Link>
          <a className="nav-text" href={links.signIn}>
            Sign In
          </a>
          <a className="btn btn-primary btn-sm" href={links.signUp}>
            Start Free
          </a>
        </nav>

        <div className="header-mobile">
          <a className="btn btn-primary btn-sm" href={links.signUp}>
            Start Free
          </a>
          <details className="nav-mobile">
            <summary>
              <span className="when-closed">Menu</span>
              <span className="when-open">Close</span>
            </summary>
            <nav className="nav-mobile-panel" aria-label="Mobile">
              <Link href="/#features">Features</Link>
              <Link href="/#pricing">Pricing</Link>
              <a href={links.signIn}>Sign In</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
