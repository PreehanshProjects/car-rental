import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  review: string;
};

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    {
      name: "Sarah M.",
      role: t("testimonials.roles.tourist") || "Tourist",
      review:
        t("testimonials.reviews.sarah") ||
        "Booking was simple, the car was spotless, and the staff were incredibly friendly. Highly recommended!",
    },
    {
      name: "James P.",
      role: t("testimonials.roles.business") || "Business Traveler",
      review:
        t("testimonials.reviews.james") ||
        "I rent cars every month for work trips, and this is by far the most reliable company I've used.",
    },
    {
      name: "Emma K.",
      role: t("testimonials.roles.local") || "Local Customer",
      review:
        t("testimonials.reviews.emma") ||
        "Flexible rental options and affordable prices — exactly what I needed.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-primary-600">
        {t("testimonials.title") || "What Our Customers Say"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ name, role, review }, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">"{review}"</p>
            <h4 className="font-semibold text-primary-600">{name}</h4>
            <span className="text-sm text-gray-500">{role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
