import Image from "next/image";
import Link from "next/link";
import type { BusinessListItem } from "@/lib/types";

export default function BusinessCard({ business }: { business: BusinessListItem }) {
  return (
    <Link href={`/listings/${business.slug}`} className="card group flex flex-col overflow-hidden">
      <div className="relative h-44 w-full overflow-hidden bg-pak-sand">
        <Image
          src={business.logoUrl}
          alt={business.name}
          fill
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="pill w-fit">{business.category}</span>
        <h3 className="font-serif text-lg font-semibold text-pak-charcoal">{business.name}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-pak-charcoal/70">{business.shortDescription}</p>
        <span className="mt-1 text-sm font-semibold text-pak-green group-hover:underline">
          View Profile &rarr;
        </span>
      </div>
    </Link>
  );
}
