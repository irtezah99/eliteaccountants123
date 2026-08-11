import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-pak-green-dark text-pak-cream">
      <div className="section grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-serif text-xl font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pak-gold text-sm font-bold text-white">
              PB
            </span>
            PakBussHub
          </div>
          <p className="mt-4 max-w-sm text-sm text-pak-cream/70">
            The home for Pakistani-owned businesses in Mississauga, Ontario — an initiative by Mr. ABC,
            founder of SkyHigh Builders and Grace Accountants, built to help the community find and
            support one another.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">Explore</h4>
          <ul className="space-y-2.5 text-sm text-pak-cream/70">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/listings" className="hover:text-white">Business Listings</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">Contact</h4>
          <ul className="space-y-2.5 text-sm text-pak-cream/70">
            <li>123 Placeholder Street, Mississauga, ON L5B 0A0</li>
            <li>(555) 123-4567</li>
            <li>hello@pakbusshub.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="section flex flex-col items-center justify-between gap-2 text-xs text-pak-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} PakBussHub. All rights reserved.</p>
          <p>Placeholder content for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
}
