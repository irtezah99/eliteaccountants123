"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CATEGORIES } from "@/lib/categories";

export default function SearchBar({
  className = "",
  initialQuery = "",
  initialCategory = "",
}: {
  className?: string;
  initialQuery?: string;
  initialCategory?: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (category) params.set("category", category);
    router.push(`/listings${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col gap-3 rounded-2xl bg-white p-3 shadow-cardHover sm:flex-row sm:items-center ${className}`}
    >
      <div className="flex flex-1 items-center gap-2 px-3">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0 text-pak-charcoal/40">
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M17 17l-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search businesses, e.g. 'restaurant' or 'accountant'"
          className="w-full border-none bg-transparent py-2.5 text-sm outline-none placeholder:text-pak-charcoal/40"
        />
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-pak-charcoal sm:w-56"
      >
        <option value="">All Categories</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button type="submit" className="btn-primary sm:w-auto">
        Search
      </button>
    </form>
  );
}
