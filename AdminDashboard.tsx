"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import StatusBadge from "@/components/StatusBadge";

type AdminBusiness = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  logoUrl: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  featured: boolean;
  createdAt: string;
  owner: { email: string };
};

export default function AdminDashboard() {
  const [businesses, setBusinesses] = useState<AdminBusiness[] | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/admin/businesses");
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Failed to load.");
      return;
    }
    setBusinesses(data.businesses);
  }

  useEffect(() => {
    load();
  }, []);

  async function updateStatus(id: string, status: "APPROVED" | "REJECTED" | "PENDING") {
    setBusyId(id);
    await fetch(`/api/admin/businesses/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    await load();
    setBusyId(null);
  }

  async function toggleFeatured(business: AdminBusiness) {
    setBusyId(business.id);
    await fetch(`/api/admin/businesses/${business.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: business.status, featured: !business.featured }),
    });
    await load();
    setBusyId(null);
  }

  if (error) return <p className="text-red-600">{error}</p>;
  if (!businesses) return <p className="text-pak-charcoal/60">Loading...</p>;

  const pending = businesses.filter((b) => b.status === "PENDING");
  const others = businesses.filter((b) => b.status !== "PENDING");

  return (
    <div className="space-y-12">
      <section>
        <h2 className="mb-4 font-serif text-xl font-semibold text-pak-charcoal">
          Pending Review ({pending.length})
        </h2>
        {pending.length === 0 ? (
          <p className="rounded-2xl bg-white p-6 text-sm text-pak-charcoal/60 shadow-card">
            Nothing waiting for review right now.
          </p>
        ) : (
          <div className="space-y-4">
            {pending.map((b) => (
              <div key={b.id} className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-pak-sand">
                  <Image src={b.logoUrl} alt={b.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-lg font-semibold text-pak-charcoal">{b.name}</h3>
                    <StatusBadge status={b.status} />
                  </div>
                  <p className="text-sm text-pak-charcoal/60">
                    {b.category} &middot; submitted by {b.owner.email}
                  </p>
                  <p className="mt-1 text-sm text-pak-charcoal/70">{b.shortDescription}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    disabled={busyId === b.id}
                    onClick={() => updateStatus(b.id, "APPROVED")}
                    className="btn-primary !px-4 !py-2"
                  >
                    Approve
                  </button>
                  <button
                    disabled={busyId === b.id}
                    onClick={() => updateStatus(b.id, "REJECTED")}
                    className="btn-secondary !border-red-500 !px-4 !py-2 !text-red-600 hover:!bg-red-500"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-4 font-serif text-xl font-semibold text-pak-charcoal">All Listings</h2>
        <div className="overflow-x-auto rounded-2xl bg-white shadow-card">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-black/5 text-xs uppercase tracking-wide text-pak-charcoal/50">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Featured</th>
                <th className="px-5 py-3">Owner</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {others.map((b) => (
                <tr key={b.id}>
                  <td className="px-5 py-3 font-medium text-pak-charcoal">
                    <Link href={`/listings/${b.slug}`} className="hover:underline">
                      {b.name}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-pak-charcoal/70">{b.category}</td>
                  <td className="px-5 py-3">
                    <StatusBadge status={b.status} />
                  </td>
                  <td className="px-5 py-3">
                    <button
                      disabled={busyId === b.id}
                      onClick={() => toggleFeatured(b)}
                      className={`text-xs font-semibold ${b.featured ? "text-pak-gold" : "text-pak-charcoal/40 hover:text-pak-charcoal"}`}
                    >
                      {b.featured ? "★ Featured" : "☆ Feature"}
                    </button>
                  </td>
                  <td className="px-5 py-3 text-pak-charcoal/60">{b.owner.email}</td>
                  <td className="px-5 py-3">
                    {b.status === "APPROVED" ? (
                      <button
                        disabled={busyId === b.id}
                        onClick={() => updateStatus(b.id, "REJECTED")}
                        className="text-xs font-semibold text-red-600 hover:underline"
                      >
                        Unpublish
                      </button>
                    ) : (
                      <button
                        disabled={busyId === b.id}
                        onClick={() => updateStatus(b.id, "APPROVED")}
                        className="text-xs font-semibold text-pak-green hover:underline"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {others.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-6 text-center text-pak-charcoal/50">
                    No other listings yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
