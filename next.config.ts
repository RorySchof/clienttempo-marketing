import type { NextConfig } from "next";
import { links, siteUrl } from "./lib/site";

function externalAuthRedirect(path: "/sign-in" | "/sign-up", target: string) {
  let url: URL;
  try {
    url = new URL(target);
  } catch {
    return [];
  }

  // Only leave the marketing site; anything else could redirect back here.
  const isHttp = url.protocol === "https:" || url.protocol === "http:";
  if (!isHttp || url.host === new URL(siteUrl).host) return [];

  const destination = `${url.origin}${url.pathname.replace(/\/$/, "")}`;
  return [
    { source: path, destination, permanent: false },
    { source: `${path}/:path+`, destination: `${destination}/:path+`, permanent: false },
  ];
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...externalAuthRedirect("/sign-in", links.signIn),
      ...externalAuthRedirect("/sign-up", links.signUp),
    ];
  },
};

export default nextConfig;
