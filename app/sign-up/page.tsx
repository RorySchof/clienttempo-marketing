import type { Metadata } from "next";
import { appOriginConfigured } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start free",
  description: "Create a ClientTempo account.",
};

export default function SignUpPage() {
  return (
    <main className="text-page" id="content">
      <div className="shell narrow">
        <h1>Start free</h1>
        <p>
          Signup happens in the ClientTempo application. This marketing site
          does not create accounts.
        </p>
        {appOriginConfigured ? (
          <p>Use Start Free in the header to open the application.</p>
        ) : (
          <p>
            The application address is not configured yet. Set{" "}
            <code>NEXT_PUBLIC_APP_ORIGIN</code> in this project and Start Free
            will open the product signup page.
          </p>
        )}
      </div>
    </main>
  );
}
