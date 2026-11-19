export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SESSION_KEY = "vh_session";

export type Credentials = { email: string; password: string; remember: boolean };

/** Mock login — replace with the backend /api/auth/login call in a later phase. */
export async function mockLogin({ email, remember }: Credentials) {
  await new Promise((r) => setTimeout(r, 600));
  (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, JSON.stringify({ email, at: Date.now() }));
  return { ok: true };
}
