import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { clean, deepclean, move, regularmaid } from "@/assets";
import Image from "next/image";

// Data for the services to make the code clean and easy to edit
const servicesList = [
  {
    id: "deep-cleaning",
    title: "Deep Cleaning Service",
    description:
      "A top-to-bottom thorough cleaning for homes that haven't been professionally cleaned in over 3 months. Perfect for Spring cleaning, or preparing for a special event.",
    image: clean.src,
    features: [
      "Deep scrubbing of floors and skirting boards",
      "Descaling of bathroom tiles, shower heads, and taps",
      "Degreasing kitchen stove, hood, and backsplash",
      "Cleaning behind and under movable furniture",
      "Wiping down all doors, frames, and switches",
      "Interior window cleaning (reachable heights)",
    ],
  },
  {
    id: "maid-service",
    title: "Regular Maid Service",
    description:
      "Keep your home consistently fresh with our recurring service. Available Daily, Weekly, or Bi-Weekly. We assign the same trusted cleaner to your home whenever possible.",
    image: regularmaid.src,
    features: [
      "Dusting of all accessible surfaces",
      "Vacuuming and mopping of all floors",
      "Thorough cleaning and sanitizing of bathrooms",
      "Kitchen counter wiping and sink scrubbing",
      "Making beds and changing linens (if provided)",
      "Emptying trash bins and replacing liners",
    ],
  },
  {
    id: "upholstery",
    title: "Sofa & Carpet Shampooing",
    description:
      "Don't replace your furniture—revive it. We use industrial injection-extraction machines to remove deep-seated dust, mites, allergens, and stubborn stains.",
    image: deepclean.src,
    features: [
      "Pre-treatment of tough stains and spots",
      "Deep steam cleaning / hot water extraction",
      "Removal of dust mites and allergens",
      "Fabric conditioning for a soft touch",
      "Fast drying time (4-6 hours)",
      "Safe for pets and children",
    ],
  },
  {
    id: "move-in-out",
    title: "Move-In / Move-Out Cleaning",
    description:
      "Moving is stressful enough without having to clean. Whether you need your deposit back or want a fresh start in a new home, we handle the dirty work.",
    image: move.src,
    features: [
      "Cleaning inside all empty cabinets and drawers",
      "Scrubbing of balcony and utility areas",
      "Deep cleaning of all appliances (Fridge/Oven interiors)",
      "Removal of cobwebs and high dusting",
      "Spot cleaning of walls",
      "Sanitization of all sanitary ware",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold text-white">
              Professional Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Cleaning Services
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From quick touch-ups to industrial-grade deep cleans, we have a
            package for every Sri Lankan home.
          </p>
        </div>
      </section>

      {/* 2. Services List */}
      <div className="flex flex-col">
        {servicesList.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-surface"}`}
          >
            <div className="container mx-auto px-6">
              <div
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                    <Image
                      width={500}
                      height={500}
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold text-secondary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-secondary-light mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <div className="bg-white/50 rounded-xl p-6 border border-slate-200 mb-8">
                    <h4 className="font-semibold text-secondary mb-4 uppercase text-sm tracking-wider">
                      What&apos;s Included:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-secondary-light text-sm font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    Book This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
