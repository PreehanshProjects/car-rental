import { motion, type Variants } from "framer-motion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingFormSection from "../../components/BooknowComponents/BookingFormSection/BookingFormSection";
import CarDetailsSection from "../../components/BooknowComponents/CarDetailsSection/CarDetailsSection";
import SimilarCarsSection from "../../components/BooknowComponents/SimilarCarsSection/SimilarCarsSection";

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

export default function BookNowPage() {
  const { id } = useParams<{ id: string }>();

  // State for the current car
  const [car, setCar] = useState<Car | null>(null);

  // State for all cars (for "You Might Also Like")
  const [cars, setCars] = useState<Car[]>([]);

  // Loading & error states
  const [loadingCar, setLoadingCar] = useState(true);
  const [loadingCars, setLoadingCars] = useState(true);
  const [errorCar, setErrorCar] = useState<string | null>(null);
  const [errorCars, setErrorCars] = useState<string | null>(null);

  // Fetch current car by ID
  useEffect(() => {
    if (!id) return;

    const fetchCar = async () => {
      try {
        const res = await fetch(`http://localhost:5046/api/cars/${id}`);
        if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
        const data = await res.json();
        setCar(data);
      } catch (err: any) {
        console.error("Failed to fetch car:", err);
        setErrorCar("Unable to load car from server.");
      } finally {
        setLoadingCar(false);
      }
    };

    fetchCar();
  }, [id]);

  // Fetch all cars for "You Might Also Like"
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:5046/api/cars");
        if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
        const data = await res.json();
        setCars(data);
      } catch (err: any) {
        console.error("Failed to load cars:", err);
        setErrorCars("Unable to load cars from server.");
      } finally {
        setLoadingCars(false);
      }
    };

    fetchCars();
  }, []);

  if (loadingCar || loadingCars)
    return <p className="text-center py-10 text-lg">Loading car...</p>;
  if (errorCar)
    return <p className="text-center py-10 text-red-600">{errorCar}</p>;
  if (!car)
    return <p className="text-center py-10 text-gray-500">Car not found.</p>;

  return (
    <motion.main
      className="min-h-screen py-16 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-800 font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-primary-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Book Your Car
      </motion.h1>

      {/* Car Details Section */}
      <motion.div variants={sectionVariants}>
        <CarDetailsSection car={car} />
      </motion.div>

      {/* Booking Form Section */}
      <motion.div variants={sectionVariants} className="mt-12">
        <BookingFormSection
          carId={car.id}
          carName={car.name}
          pricePerDay={car.pricePerDay}
        />
      </motion.div>

      {/* Similar Cars Section */}
      <motion.div variants={sectionVariants} className="mt-16">
        <SimilarCarsSection
          currentCarId={car.id}
          cars={cars.filter((c) => c.id !== car.id)}
        />
      </motion.div>
    </motion.main>
  );
}
