import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
import { categories, ctas, hero, jobs, routes, sections } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-cream">
        <div className="container-x grid items-end gap-10 pt-14 md:grid-cols-2 md:pt-20">
          <div className="self-center pb-10">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link href={hero.primary.href} className="btn">{hero.primary.label}</Link>
              <Link href={hero.secondary.href} className="inline-flex items-center gap-2 font-medium hover:text-brand">
                {hero.secondary.label} <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <Image {...hero.image} alt={hero.image.alt} priority className="mx-auto w-full max-w-xl" />
        </div>
      </section>

      <div className="bg-[linear-gradient(var(--color-cream)_50%,transparent_50%)]">
        <div className="container-x max-w-5xl"><SearchBar /></div>
      </div>

      <section className="container-x py-20">
        <SectionHeading {...sections.jobs} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((j) => <JobCard key={j.id} job={j} />)}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading {...sections.categories} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map(({ label, count, icon: Icon }) => (
              <Link key={label} href={`${routes.jobs}?category=${encodeURIComponent(label)}`} className="group rounded-3xl border border-line bg-surface p-5 text-center transition hover:border-brand hover:shadow-md">
                <Icon className="mx-auto size-12 rounded-full bg-cream p-2.5 text-brand group-hover:bg-brand group-hover:text-white" />
                <h3 className="mt-3 text-sm font-semibold">{label}</h3>
                <p className="text-xs text-muted">{count} jobs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-6 py-20 md:grid-cols-2">
        {ctas.map((c) => (
          <div key={c.title} className={`rounded-3xl p-10 ${c.tone === "brand" ? "bg-brand text-white" : "bg-cream"}`}>
            <h3 className="text-2xl font-extrabold">{c.title}</h3>
            <p className="mt-3 opacity-80">{c.text}</p>
            <Link href={c.action.href} className={`mt-6 ${c.tone === "brand" ? "btn bg-sun text-ink hover:bg-white" : "btn"}`}>
              {c.action.label} <ArrowRight className="size-4" />
            </Link>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
