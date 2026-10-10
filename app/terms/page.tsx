import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms information for the ClientTempo marketing site.",
};

export default function TermsPage() {
  return (
    <main className="text-page" id="content">
      <div className="shell narrow">
        <h1>Terms</h1>
        <p>
          This website describes ClientTempo. Using the product, including a
          paid plan, is governed by the application once you create an
          account.
        </p>
        <p>
          Paid plans shown here are $10 per month and $20 per month. Exact
          usage allowances are not finalized on this page.
        </p>
      </div>
    </main>
  );
}
