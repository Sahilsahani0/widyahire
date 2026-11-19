import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import LoginForm from "@/components/LoginForm";
import { auth, hero, routes, site, stats } from "@/lib/site";

export const metadata: Metadata = { title: `Login — ${site.name}` };

export default function LoginPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <aside className="hidden overflow-hidden bg-cream p-12 lg:flex lg:flex-col lg:justify-between lg:gap-8">
        <Logo />
        <div className="max-w-md">
          <h2 className="text-4xl font-extrabold leading-tight">{hero.title}</h2>
          <p className="mt-4 text-ink/80">{auth.panel}</p>
          <dl className="mt-8 flex gap-8">
            {stats.map((s) => <div key={s.label}><dt className="text-2xl font-bold text-brand">{s.value}</dt><dd className="text-sm text-muted">{s.label}</dd></div>)}
          </dl>
        </div>
        <Image {...hero.image} alt={hero.image.alt} priority className="-mb-12 w-full max-w-lg self-center" />
      </aside>

      <section className="flex flex-col justify-center px-4 py-10 sm:px-10">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 flex items-center justify-between">
            <span className="lg:hidden"><Logo /></span>
            <Link href={routes.home} className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-brand">
              <ArrowLeft className="size-4" /> Back to Home
            </Link>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h1 className="text-3xl font-extrabold">{auth.title}</h1>
            <p className="mb-8 mt-2 text-muted">{auth.subtitle}</p>
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
