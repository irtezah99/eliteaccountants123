import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function hash(password: string) {
  return bcrypt.hash(password, 10);
}

function img(seed: string, w = 800, h = 600) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@pakbusshub.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "ChangeMe123!";

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash: await hash(adminPassword),
      role: "ADMIN",
    },
  });
  console.log(`Admin account ready: ${admin.email}`);

  const demoOwnerEmail = "owner@pakbusshub.com";
  const demoOwnerPassword = "Password123!";
  const owner = await prisma.user.upsert({
    where: { email: demoOwnerEmail },
    update: {},
    create: {
      email: demoOwnerEmail,
      passwordHash: await hash(demoOwnerPassword),
      role: "BUSINESS",
    },
  });
  console.log(`Demo business owner ready: ${owner.email} / ${demoOwnerPassword}`);

  const secondOwner = await prisma.user.upsert({
    where: { email: "owner2@pakbusshub.com" },
    update: {},
    create: {
      email: "owner2@pakbusshub.com",
      passwordHash: await hash("Password123!"),
      role: "BUSINESS",
    },
  });

  const approvedBusinesses = [
    {
      slug: "lahori-karahi-house",
      name: "Lahori Karahi House",
      category: "Restaurants & Food",
      shortDescription: "Authentic Lahori-style karahi and BBQ in the heart of Mississauga.",
      description:
        "Lahori Karahi House brings the flavours of old Lahore to Mississauga, serving traditional karahi, seekh kebabs, and fresh-baked naan every day. Family-owned since day one, we pride ourselves on generous portions and a warm, welcoming dining room.",
      featured: true,
      ownerId: owner.id,
      logoSeed: "pbh-karahi",
    },
    {
      slug: "sadaf-sweets-bakery",
      name: "Sadaf Sweets & Bakery",
      category: "Restaurants & Food",
      shortDescription: "Traditional South Asian sweets, fresh bakery items, and custom celebration cakes.",
      description:
        "From gulab jamun and barfi to custom wedding cakes, Sadaf Sweets & Bakery has been serving Mississauga's Pakistani community with traditional recipes and fresh daily bakes for over a decade.",
      featured: true,
      ownerId: owner.id,
      logoSeed: "pbh-sweets",
    },
    {
      slug: "desi-bazaar-grocery",
      name: "Desi Bazaar Grocery",
      category: "Retail & Shops",
      shortDescription: "Your neighbourhood grocery store for South Asian spices, produce, and halal meat.",
      description:
        "Desi Bazaar Grocery stocks everything from fresh halal meat and produce to imported spices, snacks, and household staples — everything you need for home cooking, all under one roof.",
      featured: true,
      ownerId: owner.id,
      logoSeed: "pbh-grocery",
    },
    {
      slug: "al-noor-fashion-boutique",
      name: "Al-Noor Fashion Boutique",
      category: "Retail & Shops",
      shortDescription: "Custom-tailored shalwar kameez, bridal wear, and ready-to-wear fashion.",
      description:
        "Al-Noor Fashion Boutique offers custom tailoring and a curated selection of formal and everyday South Asian fashion, including bridal wear, for men, women, and children.",
      featured: false,
      ownerId: secondOwner.id,
      logoSeed: "pbh-fashion",
    },
    {
      slug: "grace-accountants",
      name: "Grace Accountants",
      category: "Professional Services",
      shortDescription: "Personal and small business tax, bookkeeping, and accounting services.",
      description:
        "Grace Accountants provides personal and small business tax preparation, bookkeeping, and year-round accounting support, with a deep understanding of the needs of Mississauga's immigrant-owned businesses. Founded by Mr. ABC.",
      featured: true,
      ownerId: owner.id,
      logoSeed: "pbh-accountants",
    },
    {
      slug: "skyhigh-builders",
      name: "SkyHigh Builders",
      category: "Home Services",
      shortDescription: "Residential construction, renovations, and custom home builds across the GTA.",
      description:
        "SkyHigh Builders has delivered residential renovations and custom builds across the Greater Toronto Area for over 15 years, known for reliable timelines and quality craftsmanship. Founded by Mr. ABC.",
      featured: true,
      ownerId: owner.id,
      logoSeed: "pbh-builders",
    },
    {
      slug: "noor-law-professional-corporation",
      name: "Noor Law Professional Corporation",
      category: "Professional Services",
      shortDescription: "Real estate, family, and immigration law services in Mississauga.",
      description:
        "Noor Law Professional Corporation offers trusted legal guidance in real estate transactions, family law, and immigration matters, with services available in English, Urdu, and Punjabi.",
      featured: false,
      ownerId: secondOwner.id,
      logoSeed: "pbh-law",
    },
    {
      slug: "glow-beauty-lounge",
      name: "Glow Beauty Lounge",
      category: "Beauty & Wellness",
      shortDescription: "Hair, makeup, and bridal beauty services for every occasion.",
      description:
        "Glow Beauty Lounge specializes in bridal makeup, hair styling, threading, and skincare treatments, with a team experienced in South Asian bridal looks for weddings and special events.",
      featured: true,
      ownerId: secondOwner.id,
      logoSeed: "pbh-beauty",
    },
    {
      slug: "crescent-home-renovations",
      name: "Crescent Home Renovations",
      category: "Home Services",
      shortDescription: "Kitchen, bathroom, and basement renovations for Mississauga homeowners.",
      description:
        "Crescent Home Renovations handles everything from kitchen and bathroom remodels to full basement finishing, with transparent quotes and a reputation built entirely on community referrals.",
      featured: false,
      ownerId: owner.id,
      logoSeed: "pbh-reno",
    },
    {
      slug: "mississauga-halal-catering-co",
      name: "Mississauga Halal Catering Co.",
      category: "Events & Catering",
      shortDescription: "Halal catering for weddings, corporate events, and community gatherings.",
      description:
        "Mississauga Halal Catering Co. provides full-service halal catering for weddings, walimas, corporate events, and community gatherings, with customizable menus ranging from traditional biryani to modern fusion dishes.",
      featured: true,
      ownerId: secondOwner.id,
      logoSeed: "pbh-catering",
    },
    {
      slug: "cedar-family-dental",
      name: "Cedar Family Dental",
      category: "Health & Medical",
      shortDescription: "Family and cosmetic dentistry with flexible appointments and direct insurance billing.",
      description:
        "Cedar Family Dental offers general, family, and cosmetic dentistry services with a welcoming, multilingual team and direct billing to most insurance providers.",
      featured: false,
      ownerId: owner.id,
      logoSeed: "pbh-dental",
    },
  ];

  for (const b of approvedBusinesses) {
    await prisma.business.upsert({
      where: { slug: b.slug },
      update: {},
      create: {
        slug: b.slug,
        name: b.name,
        category: b.category,
        shortDescription: b.shortDescription,
        description: b.description,
        address: "123 Placeholder Street, Mississauga, ON L5B 0A0",
        phone: "(555) 123-4567",
        email: `contact@${b.slug.replace(/-/g, "")}.com`,
        website: null,
        facebook: null,
        instagram: null,
        hours: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM\nSun: Closed",
        logoUrl: img(b.logoSeed),
        photoUrls: [img(`${b.logoSeed}-2`), img(`${b.logoSeed}-3`)].join(", "),
        status: "APPROVED",
        featured: b.featured,
        ownerId: b.ownerId,
      },
    });
  }
  console.log(`Seeded ${approvedBusinesses.length} approved businesses.`);

  const pendingBusinesses = [
    {
      slug: "peshawari-tikka-corner",
      name: "Peshawari Tikka Corner",
      category: "Restaurants & Food",
      shortDescription: "Charcoal-grilled tikka and traditional Peshawari-style dishes.",
      description:
        "Peshawari Tikka Corner is a new addition to Mississauga's food scene, specializing in charcoal-grilled tikka, chapli kebabs, and traditional Peshawari-style dishes made fresh daily.",
      ownerId: secondOwner.id,
      logoSeed: "pbh-tikka",
    },
    {
      slug: "unity-tax-and-immigration-services",
      name: "Unity Tax & Immigration Services",
      category: "Professional Services",
      shortDescription: "Tax filing and immigration consulting for newcomers and small businesses.",
      description:
        "Unity Tax & Immigration Services helps newcomers and small business owners navigate Canadian tax filing and immigration paperwork with personalized, one-on-one support.",
      ownerId: owner.id,
      logoSeed: "pbh-unity",
    },
  ];

  for (const b of pendingBusinesses) {
    await prisma.business.upsert({
      where: { slug: b.slug },
      update: {},
      create: {
        slug: b.slug,
        name: b.name,
        category: b.category,
        shortDescription: b.shortDescription,
        description: b.description,
        address: "123 Placeholder Street, Mississauga, ON L5B 0A0",
        phone: "(555) 123-4567",
        email: `contact@${b.slug.replace(/-/g, "")}.com`,
        hours: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 4:00 PM\nSun: Closed",
        logoUrl: img(b.logoSeed),
        photoUrls: "",
        status: "PENDING",
        featured: false,
        ownerId: b.ownerId,
      },
    });
  }
  console.log(`Seeded ${pendingBusinesses.length} pending businesses for admin review.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
