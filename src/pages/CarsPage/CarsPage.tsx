import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import CarListSection from "../../components/CarpageComponents/CarListSection/CarListSection";
import FiltersSection from "../../components/CarpageComponents/FilterSection/FilterSection";

type Car = {
  id: number;
  name: string;
  type: string;
  seats: number;
  pricePerDay: number;
  images: string[];
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CarPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [seatsFilter, setSeatsFilter] = useState("Any");
  const [priceRange, setPriceRange] = useState<[number, number]>([20, 200]);

  // Fetch data from API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:5046/api/cars");
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        setCars(data);
      } catch (err: any) {
        console.error("Failed to load cars:", err);
        setError("Unable to load cars from server.");
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const typeMatch = typeFilter === "All Types" || car.type === typeFilter;
    const seatsMatch =
      seatsFilter === "Any" ||
      (seatsFilter === "7+"
        ? car.seats >= 7
        : car.seats === Number(seatsFilter));
    const priceMatch =
      car.pricePerDay >= priceRange[0] && car.pricePerDay <= priceRange[1];
    return typeMatch && seatsMatch && priceMatch;
  });

  if (loading)
    return <p className="text-center py-10 text-lg">Loading cars...</p>;
  if (error)
    return (
      <p className="text-center py-10 text-red-600 font-medium">{error}</p>
    );

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
