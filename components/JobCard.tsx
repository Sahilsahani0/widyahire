import { BadgeIndianRupee, MapPin } from "lucide-react";
import type { Job } from "@/lib/site";

export default function JobCard({ job }: { job: Job }) {
  const meta = [
    { icon: BadgeIndianRupee, text: job.salary },
    { icon: MapPin, text: job.city },
  ];
  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-tight text-white">{job.type}</span>
      <h3 className="mt-4 text-xl font-semibold">{job.title}</h3>
      <p className="mt-1 text-sm text-muted">{job.school} · {job.board}</p>
      <ul className="mt-4 grid grid-cols-2 gap-4">
        {meta.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-2"><Icon className="mt-0.5 size-5 shrink-0" />{text}</li>
        ))}
      </ul>
    </article>
  );
}
