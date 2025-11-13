// CarDetailsSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Car } from "lucide-react";

type Car = {
  id: number;
  name: string;
  type: string;
  seats: number;
  pricePerDay: number;
  images: string[];
};

export default function CarDetailsSection({ car }: { car: Car }) {
  const [currentImage, setCurrentImage] = useState(0);

  const prev = () =>
    setCurrentImage((i) => (i === 0 ? car.images.length - 1 : i - 1));
  const next = () =>
    setCurrentImage((i) => (i === car.images.length - 1 ? 0 : i + 1));

  return (
    <section className="flex flex-col md:flex-row gap-12 items-center">
      {/* Carousel */}
      <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
        <motion.img
          src={car.images[currentImage]}
          alt={car.name}
          className="w-full h-64 md:h-96 object-cover rounded-xl"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary-600 text-white rounded-full p-2 shadow-lg hover:bg-primary-700"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 text-white rounded-full p-2 shadow-lg hover:bg-primary-700"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Details */}
      <div className="md:flex-1 space-y-4">
        <h2 className="text-3xl font-bold text-primary-600">{car.name}</h2>
        <div className="flex items-center gap-6 text-gray-700">
          <div className="flex items-center gap-1">
            <Car /> <span>{car.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users /> <span>{car.seats} seats</span>
          </div>
        </div>
        <p className="text-2xl font-extrabold text-yellow-500">
          ${car.pricePerDay}/day
        </p>
      </div>
    </section>
  );
}
