import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, Heart, Clock, ArrowRight } from "lucide-react";
import { about } from "@/assets";

export default function AboutPage() {
  return (
    <main>
      {/* 1. Page Header */}
      <section className="bg-surface py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            We Are <span className="text-primary">HomeFix</span>
          </h1>
          <p className="text-xl text-secondary-light max-w-2xl mx-auto leading-relaxed">
            On a mission to professionalize the home cleaning industry in Sri
            Lanka. Reliable. Trustworthy. Consistent.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  width={500}
                  height={500}
                  src={about}
                  alt="Team meeting"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative block */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-surface rounded-full -z-10 hidden lg:block"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10 hidden lg:block"></div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Why We Started
              </h2>
              <div className="space-y-6 text-secondary-light text-lg leading-relaxed">
                <p>
                  Finding reliable help in Colombo has always been a challenge.
                  Calls go unanswered, cleaners don&apos;t show up, and quality
                  varies wildy. We realized that homeowners deserve better.
                </p>
                <p>
                  HomeFix was built to bridge the gap between busy professionals
                  and trusted cleaning staff. We don&apos;t just &quot;send a
                  cleaner&quot; — we provide a managed service where
                  accountability and quality are guaranteed.
                </p>
                <p className="font-medium text-secondary border-l-4 border-primary pl-4">
                  &quot;We treat every home with the same respect and care as we
                  would our own. That is our simple promise to you.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values (Trust Indicators) */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              What separates us from the freelancer market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
              <ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Safety First</h3>
              <p className="text-slate-400">
                Every staff member undergoes a strict background check and
                police clearance before entering your home.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Trained Staff</h3>
              <p className="text-slate-400">
                We invest in training our team on modern cleaning techniques,
                hygiene standards, and equipment handling.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-slate-400">
                If we say 9:00 AM, we mean 9:00 AM. We value your time and stick
                to the schedule.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Customer Care</h3>
              <p className="text-slate-400">
                Not happy with the clean? Let us know within 24 hours and we
                will fix it for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.5k+</div>
              <div className="text-blue-100">Cleans Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Trained Staff</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-24 bg-surface text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Ready to experience the difference?
          </h2>
          <p className="text-secondary-light text-lg mb-8 max-w-xl mx-auto">
            Book your first clean today and see why Colombo homeowners trust
            HomeFix.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 shadow-lg transition-all"
            >
              Book Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
