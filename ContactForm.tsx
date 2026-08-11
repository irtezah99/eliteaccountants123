"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Something went wrong. Please try again.");
      return;
    }
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  if (success) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card">
        <h3 className="font-serif text-xl font-semibold text-pak-green-dark">Message Sent!</h3>
        <p className="mt-2 text-pak-charcoal/65">
          Thanks for reaching out — we typically respond within 1–2 business days.
        </p>
        <button onClick={() => setSuccess(false)} className="btn-secondary mt-5">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <div>
        <label className="label">Name</label>
        <input required className="input" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="label">Email</label>
        <input
          required
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="label">Message</label>
        <textarea
          required
          rows={5}
          className="input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
