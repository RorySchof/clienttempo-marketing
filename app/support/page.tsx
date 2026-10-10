import type { Metadata } from "next";
import { links, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Support for ClientTempo.",
};

export default function SupportPage() {
  return (
    <main className="text-page" id="content">
      <div className="shell narrow">
        <h1>Support</h1>
        <p>Questions about ClientTempo can come here.</p>
        <section className="contact-block" aria-labelledby="contact-support">
          <h2 id="contact-support">Contact Support</h2>
          <p>
            Email{" "}
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          </p>
        </section>
        <p>
          If you already have an account, <a href={links.signIn}>sign in</a> to
          the product. This marketing site does not store notes or manage
          billing.
        </p>
      </div>
    </main>
  );
}
