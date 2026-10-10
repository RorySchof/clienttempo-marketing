import type { Metadata } from "next";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const title = "ClientTempo — AI Tools for Everyday Real Estate Work";
const description =
  "Practical AI tools for realtor emails, showing notes, open houses, listings, and real-estate questions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — ClientTempo",
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "ClientTempo",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
