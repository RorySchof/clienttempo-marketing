import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the ClientTempo marketing site.",
};

export default function PrivacyPage() {
  return (
    <main className="text-page" id="content">
      <div className="shell narrow">
        <h1>Privacy</h1>
        <p>
          This marketing site describes ClientTempo. It does not ask you to
          create an account, and it does not send what you read here to the
          product. It does not include analytics or tracking.
        </p>
        <p>
          Accounts, saved notes, and billing live in the ClientTempo
          application, under that application&apos;s own privacy terms.
        </p>
      </div>
    </main>
  );
}
