import { useTranslation } from "react-i18next";

type Stat = {
  number: string;
  label: string;
};

export default function StatsSection() {
  const { t } = useTranslation();

  const stats: Stat[] = [
    {
      number: "250+",
      label: t("stats.carsAvailable") || "Cars Available",
    },
    {
      number: "15K+",
      label: t("stats.happyClients") || "Happy Renters",
    },
    {
      number: "12",
      label: t("stats.locations") || "Rental Locations",
    },
    {
      number: "10+",
      label: t("stats.yearsService") || "Years in Service",
    },
  ];

  return (
    <section className="bg-primary-600 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map(({ number, label }, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-yellow-400">{number}</p>
              <p className="text-white text-sm opacity-90">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
