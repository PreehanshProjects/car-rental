import { useTranslation } from "react-i18next";
import { Clock, ShieldCheck, Car, PhoneCall } from "lucide-react";

type Reason = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export default function WhyChooseUsSection() {
  const { t } = useTranslation();

  const reasons: Reason[] = [
    {
      Icon: Clock,
      title: t("whyChoose.flexiblePlans") || "Flexible Rental Plans",
      description:
        t("whyChoose.flexiblePlansDesc") ||
        "From hourly rentals to long-term leases, we adapt to your schedule.",
    },
    {
      Icon: ShieldCheck,
      title: t("whyChoose.fullInsurance") || "Full Insurance Coverage",
      description:
        t("whyChoose.fullInsuranceDesc") ||
        "Drive with peace of mind knowing you're fully covered.",
    },
    {
      Icon: Car,
      title: t("whyChoose.cleanFleet") || "Clean & Maintained Fleet",
      description:
        t("whyChoose.cleanFleetDesc") ||
        "Every car is inspected, cleaned, and sanitized before each rental.",
    },
    {
      Icon: PhoneCall,
      title: t("whyChoose.support") || "24/7 Customer Support",
      description:
        t("whyChoose.supportDesc") ||
        "Our team is here to help you any time, day or night.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto mb-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-primary-600">
        {t("whyChoose.title") || "Why Rent With Us"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {reasons.map(({ Icon, title, description }, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 p-6 bg-primary-600 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <Icon className="w-12 h-12 text-yellow-400" />
            <h3 className="font-semibold text-lg text-white">{title}</h3>
            <p className="text-sm text-white opacity-90">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
