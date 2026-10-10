/**
 * Where the marketing site points at the ClientTempo application.
 *
 * Sign In and Start Free open the application at `appOrigin`, which
 * defaults to the production app. Set NEXT_PUBLIC_APP_ORIGIN (no trailing
 * slash) to point a preview or staging build at a different app origin.
 *
 * Optional full-URL overrides, if a path should not live on the app origin:
 * NEXT_PUBLIC_SIGN_IN_URL, NEXT_PUBLIC_SIGN_UP_URL,
 * NEXT_PUBLIC_SUPPORT_URL, NEXT_PUBLIC_PRIVACY_URL, NEXT_PUBLIC_TERMS_URL.
 */

export const siteUrl = "https://clienttempo.com";

const defaultAppOrigin = "https://app.clienttempo.com";

function clean(value: string | undefined) {
  return value?.trim() ?? "";
}

export const appOrigin = (
  clean(process.env.NEXT_PUBLIC_APP_ORIGIN) || defaultAppOrigin
).replace(/\/$/, "");

function pick(override: string | undefined, fallback: string) {
  return clean(override) || fallback;
}

export const links = {
  signIn: pick(process.env.NEXT_PUBLIC_SIGN_IN_URL, `${appOrigin}/sign-in`),
  signUp: pick(process.env.NEXT_PUBLIC_SIGN_UP_URL, `${appOrigin}/sign-up`),
  support: pick(process.env.NEXT_PUBLIC_SUPPORT_URL, "/support"),
  privacy: pick(process.env.NEXT_PUBLIC_PRIVACY_URL, "/privacy"),
  terms: pick(process.env.NEXT_PUBLIC_TERMS_URL, "/terms"),
};

export const supportEmail = "sorinsoftware@outlook.com";

export const appOriginConfigured = Boolean(appOrigin);
