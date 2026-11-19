import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { routes, site } from "@/lib/site";

export default function Logo({ light = false }: { light?: boolean }) {
  const [head, tail] = site.logo;
  return (
    <Link href={routes.home} className="flex items-center gap-2 text-xl font-bold">
      <GraduationCap className="size-8 text-brand" />
      <span className={light ? "text-white" : "text-ink"}>
        {head}<span className="text-accent">{tail}</span>
      </span>
    </Link>
  );
}
