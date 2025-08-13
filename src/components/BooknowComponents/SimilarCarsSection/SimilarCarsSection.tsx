// SimilarCarsSection.tsx
import { motion } from "framer-motion";
import CarCard from "../../CarpageComponents/CarListSection/CarCard";

type Car = {
  id: number;
  name: string;
  type: string;
  seats: number;
  price: number;
  images: string[];
};

type Props = {
  currentCarId: number;
  cars: Car[];
};

export default function SimilarCarsSection({ currentCarId, cars }: Props) {
  const filteredCars = cars.filter((car) => car.id !== currentCarId);

  return (
    <section className="max-w-6xl mx-auto my-16">
      <h3 className="text-2xl md:text-3xl font-bold text-primary-600 mb-6">
        You Might Also Like
      </h3>

      <motion.div
        className="flex gap-6 overflow-x-auto pb-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {filteredCars.map((car) => (
          <motion.div
            key={car.id}
            whileHover={{ scale: 1.05 }}
            className="min-w-[250px] flex-shrink-0"
          >
            <CarCard car={car} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
