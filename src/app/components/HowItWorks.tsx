import { CalendarCheck, Sparkles, Coffee } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Book Online",
    description:
      "Select your preferred date and time. It takes less than 60 seconds to schedule your clean.",
    icon: CalendarCheck,
  },
  {
    id: 2,
    title: "We Clean",
    description:
      "Our fully vetted and equipped professional cleaners arrive and make your home shine.",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "You Relax",
    description:
      "Enjoy your free time and come home to a fresh, sparkling clean environment.",
    icon: Coffee,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-secondary-light text-lg">
            Getting a spotless home is easier than you think. Just three simple
            steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop Only) - Visual only */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold border-4 border-white">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-secondary mb-3">
                {step.title}
              </h3>
              <p className="text-secondary-light leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
