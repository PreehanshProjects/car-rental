import CarCard from "./CarCard";

type Car = {
  id: number;
  name: string;
  type: string;
  seats: number;
  pricePerDay: number;
  images: string[];
};

type Props = { cars: Car[] };

export default function CarListSection({ cars }: Props) {
  if (cars.length === 0)
    return (
      <p className="text-center text-gray-500">No cars match your filters.</p>
    );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </section>
  );
}
