import Link from "next/link";
import Logo from "./Logo";
import { footer, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white/70">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Logo light />
          <p className="text-sm">{site.description}</p>
        </div>
        {footer.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 font-semibold text-white">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => <li key={l.label}><Link href={l.href} className="hover:text-sun">{l.label}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-white/10 py-5 text-center text-sm">© {site.name}. All rights reserved.</p>
    </footer>
  );
}
