import { links } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="shell hero-grid">
        <h1>Save time on the everyday work of being a realtor.</h1>
        <div className="hero-copy">
          <p className="lede">
            Practical AI tools for client communication, showings, open
            houses, listings, and more.
          </p>
          <p className="support-copy">
            ClientTempo helps you handle the repetitive work that comes with
            every client, showing, and listing, providing useful insight along
            the way, helping you stay polished and professional, and leaving
            more time for the work that matters.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={links.signUp}>
              Start Free
            </a>
          </div>
          <p className="price-cue">Plans start at only $10/month.</p>
        </div>
      </div>
    </section>
  );
}
