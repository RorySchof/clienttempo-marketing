import type { Metadata } from "next";
import { appOriginConfigured } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to ClientTempo.",
};

export default function SignInPage() {
  return (
    <main className="text-page" id="content">
      <div className="shell narrow">
        <h1>Sign in</h1>
        <p>
          Sign-in happens in the ClientTempo application. This marketing site
          does not collect a password.
        </p>
        {appOriginConfigured ? (
          <p>Use the Sign In link in the header to open the application.</p>
        ) : (
          <p>
            The application address is not configured yet. Set{" "}
            <code>NEXT_PUBLIC_APP_ORIGIN</code> in this project and the Sign In
            link will open the product.
          </p>
        )}
      </div>
    </main>
  );
}
