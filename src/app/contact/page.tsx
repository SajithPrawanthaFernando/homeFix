"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";

type FormValues = {
  name: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  date: string;
  time: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormValues, boolean>>
  >({});

  const formatToAmPm = (time24: string) => {
    // expects "HH:mm"
    const [hh, mm] = time24.split(":").map(Number);
    if (Number.isNaN(hh) || Number.isNaN(mm)) return time24;

    const period = hh >= 12 ? "PM" : "AM";
    const hour12 = hh % 12 === 0 ? 12 : hh % 12;

    return `${hour12}:${String(mm).padStart(2, "0")} ${period}`;
  };

  // Replace this with your actual business WhatsApp number (format: 947xxxxxx)
  const WHATSAPP_NUMBER = "94769363695";

  const serviceOptions = useMemo(
    () => [
      "General Maid Service",
      "Deep Cleaning",
      "Sofa/Carpet Cleaning",
      "Move-In/Out",
      "Other",
    ],
    []
  );

  const normalizeLKPhone = (raw: string) => {
    const digits = raw.replace(/[^\d+]/g, "").trim();

    // Handle +94XXXXXXXXX
    if (digits.startsWith("+94")) {
      const num = digits.replace(/[^\d]/g, ""); // 94XXXXXXXXX
      if (num.length === 11) return `+${num}`;
      return null;
    }

    // Handle 94XXXXXXXXX
    if (digits.startsWith("94")) {
      const num = digits.replace(/[^\d]/g, "");
      if (num.length === 11) return `+${num}`;
      return null;
    }

    // Handle 0XXXXXXXXX (10 digits)
    const onlyDigits = raw.replace(/\D/g, "");
    if (onlyDigits.startsWith("0") && onlyDigits.length === 10) {
      return `+94${onlyDigits.slice(1)}`; // +94XXXXXXXXX
    }

    return null;
  };

  const validate = (values: FormValues): FormErrors => {
    const e: FormErrors = {};

    const name = values.name.trim();
    const location = values.location.trim();
    const message = values.message.trim();

    if (!name) e.name = "Full name is required.";
    else if (name.length < 2) e.name = "Please enter at least 2 characters.";

    if (!values.phone.trim()) e.phone = "Phone number is required.";
    else if (!normalizeLKPhone(values.phone))
      e.phone =
        "Enter a valid Sri Lankan number (e.g. 0771234567 or +94771234567).";

    if (!values.service?.trim()) e.service = "Please select a service.";
    else if (!serviceOptions.includes(values.service))
      e.service = "Please select a valid service option.";

    if (!location) e.location = "Location is required.";
    else if (location.length < 2) e.location = "Please enter a valid location.";

    if (!values.date) e.date = "Please select a preferred date.";
    else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const selected = new Date(values.date);
      selected.setHours(0, 0, 0, 0);

      if (selected < today) e.date = "Date cannot be in the past.";
    }

    if (!values.time) e.time = "Please select a preferred time.";

    if (message && message.length < 5)
      e.message = "If you add a message, please enter at least 5 characters.";

    return e;
  };

  const readFormValues = (form: HTMLFormElement): FormValues => {
    const formData = new FormData(form);
    return {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      location: String(formData.get("location") ?? ""),
      date: String(formData.get("date") ?? ""),
      time: String(formData.get("time") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const values = readFormValues(form);
    const newErrors = validate(values);

    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      service: true,
      location: true,
      date: true,
      time: true,
      message: true,
    });

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    const normalizedPhone = normalizeLKPhone(values.phone)!;

    const text =
      `New Booking Request from homeFix.lk\n\n` +
      `*Name:* ${values.name.trim()}\n` +
      `*Phone:* ${normalizedPhone}\n` +
      `*Service:* ${values.service}\n` +
      `*Location:* ${values.location.trim()}\n` +
      `*Preferred Date:* ${values.date}\n` +
      `*Preferred Time:* ${formatToAmPm(values.time)}\n` +
      `*Note:* ${values.message.trim() || "No special notes"}`;

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(waLink, "_blank");
    setIsSubmitting(false);
    form.reset();
    setErrors({});
    setTouched({});
  };

  return (
    <main className="bg-surface min-h-screen">
      {/* 1. Page Header */}
      <section className="bg-secondary py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ready to book a clean or have questions? We are here to help. Reach
            out to us via phone, email, or the form below.
          </p>
        </div>
      </section>

      {/* 2. Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* LEFT COLUMN: Contact Information */}
            <div className="w-full lg:w-5/12 space-y-8">
              {/* Info Cards */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-secondary mb-6">
                  Contact Details
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-light font-medium">
                        Call Us (9am - 5pm)
                      </p>
                      <a
                        href={`tel:+${WHATSAPP_NUMBER}`}
                        className="text-lg  text-secondary hover:text-primary transition-colors"
                      >
                        +94 76 936 3695
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-light font-medium">
                        WhatsApp Us
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        className="text-lg text-secondary hover:text-primary transition-colors"
                      >
                        +94 76 936 3695
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-light font-medium">
                        Email Support
                      </p>
                      <a
                        href="mailto:hello@homefix.lk"
                        className="text-lg  text-secondary hover:text-primary transition-colors"
                      >
                        hello@homefix.lk
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-light font-medium">
                        Head Office
                      </p>
                      <p className="text-base text-secondary font-medium">
                        No. 123, Galle Road,
                        <br />
                        Colombo 04, Sri Lanka.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-secondary p-8 rounded-2xl text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Service Areas</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  We currently serve the greater Colombo area and immediate
                  suburbs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Colombo 1-15",
                    "Dehiwala",
                    "Wattala",
                    "Rajagiriya",
                    "Thalawathugoda",
                    "Kotte",
                    "Nugegoda",
                    "Battaramulla",
                    "Pelawatte",
                    "Kohuwala",
                    "Peliyagoda",
                    "Mount Lavinia",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-blue-100 border border-white/5"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  Send us a Message
                </h3>
                <p className="text-secondary-light mb-8">
                  Fill out the form below and it will open a WhatsApp chat with
                  our team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-secondary"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onBlur={() => handleBlur("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        className={`w-full px-4 py-3 text-black rounded-lg border outline-none transition-all focus:ring-2 focus:ring-primary/20 ${
                          errors.name && touched.name
                            ? "border-red-400 focus:border-red-400"
                            : "border-slate-200 focus:border-primary"
                        }`}
                        placeholder="John Doe"
                      />
                      {touched.name && errors.name && (
                        <p id="name-error" className="text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-secondary"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        inputMode="tel"
                        onBlur={() => handleBlur("phone")}
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        className={`w-full px-4 py-3 text-black rounded-lg border outline-none transition-all focus:ring-2 focus:ring-primary/20 ${
                          errors.phone && touched.phone
                            ? "border-red-400 focus:border-red-400"
                            : "border-slate-200 focus:border-primary"
                        }`}
                        placeholder="077 123 4567 "
                      />
                      {touched.phone && errors.phone && (
                        <p id="phone-error" className="text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Service Type */}
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-semibold text-secondary"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        defaultValue=""
                        onBlur={() => handleBlur("service")}
                        aria-invalid={!!errors.service}
                        aria-describedby={
                          errors.service ? "service-error" : undefined
                        }
                        className={`w-full px-4 py-[14px] rounded-lg border text-black outline-none transition-all bg-white focus:ring-2 focus:ring-primary/20 ${
                          errors.service && touched.service
                            ? "border-red-400 focus:border-red-400"
                            : "border-slate-200 focus:border-primary"
                        }`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {touched.service && errors.service && (
                        <p id="service-error" className="text-sm text-red-600">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <label
                        htmlFor="location"
                        className="text-sm font-semibold text-secondary"
                      >
                        Your Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        onBlur={() => handleBlur("location")}
                        aria-invalid={!!errors.location}
                        aria-describedby={
                          errors.location ? "location-error" : undefined
                        }
                        className={`w-full px-4 py-3 rounded-lg text-black border outline-none transition-all focus:ring-2 focus:ring-primary/20 ${
                          errors.location && touched.location
                            ? "border-red-400 focus:border-red-400"
                            : "border-slate-200 focus:border-primary"
                        }`}
                        placeholder="e.g. Nugegoda"
                      />
                      {touched.location && errors.location && (
                        <p id="location-error" className="text-sm text-red-600">
                          {errors.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date */}
                    <div className="space-y-2">
                      <label
                        htmlFor="date"
                        className="text-sm font-semibold text-secondary"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        min={new Date().toISOString().split("T")[0]} // ✅ no past dates
                        onBlur={() => handleBlur("date")}
                        aria-invalid={!!errors.date}
                        aria-describedby={
                          errors.date ? "date-error" : undefined
                        }
                        className={`w-full px-4 py-3 rounded-lg text-black border outline-none transition-all focus:ring-2 focus:ring-primary/20 ${
                          errors.date && touched.date
                            ? "border-red-400 focus:border-red-400"
                            : "border-slate-200 focus:border-primary"
                        }`}
                      />
                      {touched.date && errors.date && (
                        <p id="date-error" className="text-sm text-red-600">
                          {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Time */}
                    <div className="space-y-2">
                      <label
                        htmlFor="time"
                        className="text-sm font-semibold text-secondary"
                      >
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        onBlur={() => handleBlur("time")}
                        aria-invalid={!!errors.time}
                        aria-describedby={
                          errors.time ? "time-error" : undefined
                        }
                        className={`w-full px-4 py-3 rounded-lg text-black border outline-none transition-all focus:ring-2 focus:ring-primary/20 ${
                          errors.time && touched.time
                            ? "border-red-400 focus:border-red-400"
                            : "border-slate-200 focus:border-primary"
                        }`}
                      />
                      {touched.time && errors.time && (
                        <p id="time-error" className="text-sm text-red-600">
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-secondary"
                    >
                      Message / Special Instructions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      onBlur={() => handleBlur("message")}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className={`w-full px-4 py-3 text-black rounded-lg border outline-none transition-all resize-none focus:ring-2 focus:ring-primary/20 ${
                        errors.message && touched.message
                          ? "border-red-400 focus:border-red-400"
                          : "border-slate-200 focus:border-primary"
                      }`}
                      placeholder="I have a 3 bedroom apartment and need a deep clean..."
                    />
                    {touched.message && errors.message && (
                      <p id="message-error" className="text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Opening WhatsApp..."
                    ) : (
                      <>
                        Send via WhatsApp <MessageCircle className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
