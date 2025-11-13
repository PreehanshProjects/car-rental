import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Car, DollarSign } from "lucide-react";
import CarCarousel from "./CarCarousel";

type Car = {
  id: number;
  name: string;
  type: string;
  seats: number;
  pricePerDay: number;
  images: string[];
};

type Props = { car: Car };

export default function CarCard({ car }: Props) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booknow/${car.id}`);
  };

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <CarCarousel images={car.images} />
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-primary-600">{car.name}</h3>
        <div className="flex items-center gap-4 text-gray-600">
          <Car size={18} /> <span>{car.type}</span>
          <Users size={18} /> <span>{car.seats} seats</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-500 font-semibold">
          <DollarSign size={18} />
          <span>${car.pricePerDay}/day</span>
        </div>
        <button
          onClick={handleBookNow}
          className="w-full py-2 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition"
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
}
