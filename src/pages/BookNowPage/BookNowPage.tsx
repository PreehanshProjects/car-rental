// BookNowPage.tsx
import { motion, type Variants } from "framer-motion";
import { useParams } from "react-router-dom";
import BookingFormSection from "../../components/BooknowComponents/BookingFormSection/BookingFormSection";
import CarDetailsSection from "../../components/BooknowComponents/CarDetailsSection/CarDetailsSection";
import SimilarCarsSection from "../../components/BooknowComponents/SimilarCarsSection/SimilarCarsSection";

// Dummy data (normally fetched from API)
const cars = [
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

// Container animation for staggered child appearance
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Section animation for fade-up effect
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BookNowPage() {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((c) => c.id === Number(id)) || cars[0];

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
          pricePerDay={car.price}
        />
      </motion.div>

      {/* Similar Cars Section */}
      <motion.div variants={sectionVariants} className="mt-16">
        <SimilarCarsSection currentCarId={car.id} cars={cars} />
      </motion.div>
    </motion.main>
  );
}
