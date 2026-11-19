import { categories, routes, search } from "@/lib/site";

const caption = "mb-2 block text-sm font-medium text-ink/80";

export default function SearchBar() {
  return (
    <form action={routes.jobs} className="grid gap-4 rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-12 md:grid-cols-4 md:items-end">
      <fieldset className="md:col-span-2">
        <legend className={caption}>{search.what}</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="q" placeholder={search.keyword} aria-label={search.keyword} className="field" />
          <select name="category" defaultValue="" aria-label={search.category} className="field text-muted">
            <option value="">{search.category}</option>
            {categories.map((c) => <option key={c.label}>{c.label}</option>)}
          </select>
        </div>
      </fieldset>
      <label>
        <span className={caption}>{search.where}</span>
        <input name="location" placeholder={search.location} className="field" />
      </label>
      <button className="btn rounded-lg py-3">{search.action}</button>
    </form>
  );
}
