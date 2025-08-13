import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import CarListSection from "../../components/CarpageComponents/CarListSection/CarListSection";
import FiltersSection from "../../components/CarpageComponents/FilterSection/FilterSection";

// Dummy data
const carsData = [
  {
    id: 1,
    name: "Tesla Model 3",
    type: "Electric",
    seats: 5,
    price: 120,
    images: ["/images/cars/tesla1.jpg", "/images/cars/tesla2.jpg"],
  },
  {
    id: 2,
    name: "Ford Explorer",
    type: "SUV",
    seats: 7,
    price: 90,
    images: ["/images/cars/explorer1.jpg", "/images/cars/explorer2.jpg"],
  },
  {
    id: 3,
    name: "BMW 3 Series",
    type: "Sedan",
    seats: 5,
    price: 110,
    images: ["/images/cars/bmw1.jpg", "/images/cars/bmw2.jpg"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CarPage() {
  // Filter states
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [seatsFilter, setSeatsFilter] = useState("Any");
  const [priceRange, setPriceRange] = useState<[number, number]>([20, 200]);

  // Filtered cars
  const filteredCars = carsData.filter((car) => {
    const typeMatch = typeFilter === "All Types" || car.type === typeFilter;
    const seatsMatch =
      seatsFilter === "Any" ||
      (seatsFilter === "7+"
        ? car.seats >= 7
        : car.seats === Number(seatsFilter));
    const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1];

    return typeMatch && seatsMatch && priceMatch;
  });

  return (
    <motion.main
      className="min-h-screen py-16 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-800 font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Available Cars for Booking
      </motion.h1>

      <motion.div variants={sectionVariants}>
        <FiltersSection
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          seatsFilter={seatsFilter}
          setSeatsFilter={setSeatsFilter}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </motion.div>

      <motion.div variants={sectionVariants} className="mt-8">
        <CarListSection cars={filteredCars} />
      </motion.div>
    </motion.main>
  );
}
