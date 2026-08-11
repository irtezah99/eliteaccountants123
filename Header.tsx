"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { SessionPayload } from "@/lib/auth";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/listings", label: "Business Listings" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header({ session }: { session: SessionPayload | null }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-pak-cream/90 backdrop-blur">
      <div className="section flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-semibold text-pak-green-dark">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pak-green text-sm font-bold text-white">
            PB
          </span>
          PakBussHub
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-pak-green ${
                pathname === link.href ? "text-pak-green" : "text-pak-charcoal/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {session ? (
            <>
              <Link href="/dashboard" className="text-sm font-medium text-pak-charcoal/80 hover:text-pak-green">
                My Dashboard
              </Link>
              <button onClick={handleLogout} className="btn-secondary !px-4 !py-2">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-pak-charcoal/80 hover:text-pak-green">
                Log In
              </Link>
              <Link href="/listings/register" className="btn-primary !px-4 !py-2">
                Register Your Business
              </Link>
            </>
          )}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-pak-cream md:hidden">
          <div className="section flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-pak-charcoal/90 hover:bg-pak-sand"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-black/5" />
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-pak-charcoal/90 hover:bg-pak-sand"
                >
                  My Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-pak-charcoal/90 hover:bg-pak-sand"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-pak-charcoal/90 hover:bg-pak-sand"
                >
                  Log In
                </Link>
                <Link href="/listings/register" onClick={() => setOpen(false)} className="btn-primary mt-1">
                  Register Your Business
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
