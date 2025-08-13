import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Car = {
  id: number;
  name: string;
  image: string;
  category: string;
  pricePerDay: string;
};

const featuredCars: Car[] = [
  {
    id: 1,
    name: "Toyota Corolla",
    image: "/images/fleet/corolla.jpg",
    category: "Economy",
    pricePerDay: "$35/day",
  },
  {
    id: 2,
    name: "Nissan X-Trail",
    image: "/images/fleet/xtrail.jpg",
    category: "SUV",
    pricePerDay: "$60/day",
  },
  {
    id: 3,
    name: "BMW 5 Series",
    image: "/images/fleet/bmw5.jpg",
    category: "Luxury",
    pricePerDay: "$120/day",
  },
  {
    id: 4,
    name: "Hyundai H-1",
    image: "/images/fleet/h1.jpg",
    category: "Van",
    pricePerDay: "$80/day",
  },
];

export default function FleetShowcaseSection() {
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto mb-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-primary-600">
        {t("fleet.title") || "Our Featured Fleet"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredCars.map((car) => (
          <motion.div
            key={car.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group"
          >
            {/* Car image */}
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 bg-yellow-500 text-primary-900 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                {car.category}
              </span>
            </div>

            {/* Car details */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-primary-700 mb-2">
                {car.name}
              </h3>
              <p className="text-gray-600 mb-4">{car.pricePerDay}</p>
              <motion.button
                whileHover={{
                  backgroundColor: "var(--color-primary-600)",
                  color: "#fff",
                }}
                className="w-full py-2 bg-yellow-500 text-primary-900 font-semibold rounded-full shadow-md transition-colors"
              >
                {t("fleet.bookNow") || "Book Now"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
