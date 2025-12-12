import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { clean, deepclean, regularmaid } from "@/assets";

const services = [
  {
    title: "Deep Cleaning",
    description:
      "Perfect for moving in/out or spring cleaning. We clean every nook and cranny, including behind appliances and inside cabinets.",
    image: clean,
    link: "/services#deep-cleaning",
  },
  {
    title: "Regular Maid Service",
    description:
      "Keep your home fresh with our weekly or bi-weekly visits. Includes dusting, mopping, bathroom sanitation, and kitchen tidying.",
    image: regularmaid,
    link: "/services#maid-service",
  },
  {
    title: "Sofa & Upholstery",
    description:
      "Revitalize your furniture. We use industrial extraction machines to remove deep-seated dust, stains, and allergens.",
    image: deepclean,
    link: "/services#upholstery",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Professional Services
            </h2>
            <p className="text-secondary-light text-lg">
              Tailored cleaning solutions to meet the specific needs of your
              home.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative">
                <Image
                  width={500}
                  height={500}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-light mb-6 flex-1">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile "View All" Button (Only visible on small screens) */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/services"
            className="inline-block bg-white border border-slate-200 text-secondary font-semibold py-3 px-8 rounded-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
