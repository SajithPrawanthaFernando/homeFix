import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { hero } from "@/assets";

export default function Hero() {
  return (
    <section className="relative bg-surface pt-16 pb-20 lg:pt-[75px] lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              #1 Cleaning Service in Sri Lanka
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[51px] font-bold text-secondary leading-tight mb-6">
              Experience the Joy of a <br className="hidden lg:block" />
              <span className="text-primary">Spotless Home.</span>
            </h1>

            <p className="text-lg text-secondary-light mb-8 leading-relaxed max-w-lg">
              Professional cleaning services for busy lifestyles. We handle the
              mess so you can focus on what matters. Reliable, vetted staff and
              eco-friendly products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary/20"
              >
                Book a Clean
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-secondary hover:text-primary font-semibold text-lg rounded-lg shadow-sm border border-slate-200 transition-colors"
              >
                View Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium text-secondary-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Background Checked Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Same-Day Booking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={hero}
                alt="Sparkling clean living room"
                className="w-full lg:h-[450px] h-auto  object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
