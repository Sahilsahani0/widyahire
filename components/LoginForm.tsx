"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { EMAIL_RE, mockLogin } from "@/lib/auth";
import { routes } from "@/lib/site";

type Errors = Partial<Record<"email" | "password", string>>;

function validate(email: string, password: string): Errors {
  const e: Errors = {};
  if (!email) e.email = "Email address is required";
  else if (!EMAIL_RE.test(email)) e.email = "Enter a valid email address";
  if (!password) e.password = "Password is required";
  return e;
}

export default function LoginForm() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const f = new FormData(ev.currentTarget);
    const [email, password] = [String(f.get("email")).trim(), String(f.get("password"))];
    const errs = validate(email, password);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    await mockLogin({ email, password, remember: f.has("remember") });
    router.push(routes.home);
  }

  const fields = [
    { name: "email" as const, label: "Email Address", type: "email", icon: Mail, auto: "email" },
    { name: "password" as const, label: "Password", type: show ? "text" : "password", icon: Lock, auto: "current-password" },
  ];

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {fields.map(({ name, label, type, icon: Icon, auto }) => (
        <div key={name}>
          <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}</label>
          <div className="relative">
            <Icon className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted" />
            <input id={name} name={name} type={type} autoComplete={auto} aria-invalid={!!errors[name]}
              className={`field pl-10 pr-10 ${errors[name] ? "border-red-500" : ""}`} />
            {name === "password" && (
              <button type="button" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-brand">
                {show ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            )}
          </div>
          {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
        </div>
      ))}

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2"><input type="checkbox" name="remember" className="size-4 accent-brand" />Remember me</label>
        <Link href={routes.forgot} className="font-medium text-brand hover:underline">Forgot password?</Link>
      </div>

      <button type="submit" disabled={busy} className="btn w-full py-3">{busy ? "Signing in…" : "Login"}</button>

      <div className="flex items-center gap-3 text-xs text-muted"><span className="h-px flex-1 bg-line" />OR<span className="h-px flex-1 bg-line" /></div>

      <button type="button" className="btn-outline w-full border-line py-3 text-ink hover:bg-surface hover:text-ink">
        <svg viewBox="0 0 48 48" className="size-5" aria-hidden>
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z" />
          <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
          <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
        </svg>
        Login with Google
      </button>

      <p className="text-center text-sm text-muted">
        Don&apos;t have an account? <Link href={routes.register} className="font-semibold text-brand hover:underline">Register</Link>
      </p>
    </form>
  );
}
