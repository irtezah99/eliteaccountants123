"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CATEGORIES } from "@/lib/categories";

export type BusinessFormValues = {
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  facebook: string;
  instagram: string;
  hours: string;
  logoUrl: string;
  photoUrls: string;
};

const EMPTY: BusinessFormValues = {
  name: "",
  category: CATEGORIES[0],
  shortDescription: "",
  description: "",
  address: "123 Placeholder Street, Mississauga, ON L5B 0A0",
  phone: "(555) 123-4567",
  email: "",
  website: "",
  facebook: "",
  instagram: "",
  hours: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM\nSun: Closed",
  logoUrl: "",
  photoUrls: "",
};

function randomSeed() {
  return Math.random().toString(36).slice(2, 10);
}

export default function BusinessForm({
  mode,
  businessId,
  initialValues,
}: {
  mode: "create" | "edit";
  businessId?: string;
  initialValues?: Partial<BusinessFormValues>;
}) {
  const router = useRouter();
  const [values, setValues] = useState<BusinessFormValues>({
    ...EMPTY,
    logoUrl: `https://picsum.photos/seed/pbh-${randomSeed()}/800/600`,
    ...initialValues,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof BusinessFormValues>(key: K, value: BusinessFormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function regenerateLogo() {
    update("logoUrl", `https://picsum.photos/seed/pbh-${randomSeed()}/800/600`);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const endpoint = mode === "create" ? "/api/businesses" : `/api/businesses/${businessId}`;
    const method = mode === "create" ? "POST" : "PUT";

    const res = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Something went wrong. Please check the form and try again.");
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      router.push("/dashboard");
      router.refresh();
    }, 1200);
  }

  if (success) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-card">
        <h2 className="font-serif text-2xl font-semibold text-pak-green-dark">
          {mode === "create" ? "Listing Submitted!" : "Listing Updated!"}
        </h2>
        <p className="mt-3 text-pak-charcoal/70">
          Your listing has been {mode === "create" ? "submitted for" : "resubmitted for"} review. It will
          appear in the directory once approved by the PakBussHub team. Redirecting to your dashboard...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <section className="space-y-4">
        <h2 className="font-serif text-lg font-semibold text-pak-charcoal">Basic Information</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Business Name</label>
            <input
              required
              className="input"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="e.g. Lahori Karahi House"
            />
          </div>
          <div>
            <label className="label">Category</label>
            <select
              className="input"
              value={values.category}
              onChange={(e) => update("category", e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="label">Short Description (shown on business cards, max 160 characters)</label>
          <textarea
            required
            maxLength={160}
            rows={2}
            className="input"
            value={values.shortDescription}
            onChange={(e) => update("shortDescription", e.target.value)}
            placeholder="A one-sentence summary of your business"
          />
        </div>
        <div>
          <label className="label">Full Description</label>
          <textarea
            required
            rows={5}
            className="input"
            value={values.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Tell the community about your business, your services, and what makes you unique."
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-lg font-semibold text-pak-charcoal">Contact &amp; Hours</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Address</label>
            <input
              required
              className="input"
              value={values.address}
              onChange={(e) => update("address", e.target.value)}
            />
          </div>
          <div>
            <label className="label">Phone</label>
            <input
              required
              className="input"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
          <div>
            <label className="label">Business Email</label>
            <input
              required
              type="email"
              className="input"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
          <div>
            <label className="label">Website (optional)</label>
            <input
              className="input"
              value={values.website}
              onChange={(e) => update("website", e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="label">Facebook (optional)</label>
            <input
              className="input"
              value={values.facebook}
              onChange={(e) => update("facebook", e.target.value)}
              placeholder="https://facebook.com/..."
            />
          </div>
          <div>
            <label className="label">Instagram (optional)</label>
            <input
              className="input"
              value={values.instagram}
              onChange={(e) => update("instagram", e.target.value)}
              placeholder="https://instagram.com/..."
            />
          </div>
        </div>
        <div>
          <label className="label">Hours</label>
          <textarea
            required
            rows={3}
            className="input"
            value={values.hours}
            onChange={(e) => update("hours", e.target.value)}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-lg font-semibold text-pak-charcoal">Photos</h2>
        <p className="text-sm text-pak-charcoal/60">
          No logo yet? No problem — we&apos;ve generated a placeholder image below. You can paste your own
          image URL any time (including after your business is live).
        </p>
        <div>
          <label className="label">Logo / Main Photo URL</label>
          <div className="flex gap-2">
            <input
              required
              className="input"
              value={values.logoUrl}
              onChange={(e) => update("logoUrl", e.target.value)}
            />
            <button type="button" onClick={regenerateLogo} className="btn-secondary shrink-0 !px-4">
              New Placeholder
            </button>
          </div>
          {values.logoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={values.logoUrl} alt="Logo preview" className="mt-3 h-32 w-32 rounded-xl object-cover" />
          )}
        </div>
        <div>
          <label className="label">Additional Photo URLs (optional, comma-separated)</label>
          <textarea
            rows={2}
            className="input"
            value={values.photoUrls}
            onChange={(e) => update("photoUrls", e.target.value)}
            placeholder="https://example.com/photo1.jpg, https://example.com/photo2.jpg"
          />
        </div>
      </section>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
        {loading ? "Submitting..." : mode === "create" ? "Submit for Review" : "Save Changes"}
      </button>
    </form>
  );
}
