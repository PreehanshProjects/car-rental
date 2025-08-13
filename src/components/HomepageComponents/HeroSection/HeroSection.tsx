import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/cars");
  };

  return (
    <section className="max-w-4xl mx-auto text-center mb-20">
      <h1 className="text-5xl font-bold text-primary-600 mb-4">
        Drive Your Journey Today
      </h1>
      <p className="text-lg mb-6">
        Affordable, clean, and reliable cars for every trip — from short city
        rides to long adventures.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBookNow}
        className="px-8 py-3 bg-yellow-500 text-primary-900 rounded-full font-semibold shadow-lg"
      >
        Book a Car Now
      </motion.button>
    </section>
  );
}
