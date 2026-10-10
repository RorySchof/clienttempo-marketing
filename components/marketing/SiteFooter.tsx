import Link from "next/link";
import { links } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <Link className="wordmark" href="/">
            ClientTempo
          </Link>
          <p>Your unified AI toolkit for modern real estate.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href={links.support}>Contact Us</a>
          <a href={links.privacy}>Privacy</a>
          <a href={links.terms}>Terms</a>
        </nav>
        <p className="footer-copy">© 2026 ClientTempo</p>
      </div>
    </footer>
  );
}
