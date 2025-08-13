// BookingFormSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";

type Props = {
  carId: number;
  carName: string;
  pricePerDay: number;
};

export default function BookingFormSection({
  carId,
  carName,
  pricePerDay,
}: Props) {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [passengers, setPassengers] = useState<number>(1);
  const [insurance, setInsurance] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking ${carName} from ${startDate} to ${endDate}`);
  };

  return (
    <motion.section
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 my-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-primary-600 mb-6">
        Book {carName}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dates */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="font-medium mb-1 block">Start Date</label>
            <div className="relative">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              />
              <Calendar
                className="absolute right-3 top-3 text-primary-600"
                size={20}
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="font-medium mb-1 block">End Date</label>
            <div className="relative">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              />
              <Calendar
                className="absolute right-3 top-3 text-primary-600"
                size={20}
              />
            </div>
          </div>
        </div>

        {/* Passengers */}
        <div>
          <label className="font-medium mb-1 block">Passengers</label>
          <div className="flex items-center gap-2">
            <Users className="text-primary-600" size={20} />
            <input
              type="number"
              min={1}
              max={10}
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="w-20 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>

        {/* Insurance */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={insurance}
            onChange={() => setInsurance(!insurance)}
            className="accent-primary-600 w-5 h-5"
          />
          <span>Full Insurance Coverage</span>
        </div>

        {/* Total Price */}
        <div className="text-lg font-semibold mt-2">
          Total Price:{" "}
          <span className="text-primary-600">
            $
            {pricePerDay *
              (endDate && startDate
                ? Math.ceil(
                    (new Date(endDate).getTime() -
                      new Date(startDate).getTime()) /
                      (1000 * 3600 * 24)
                  )
                : 1)}
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary-600 text-white rounded-full font-semibold mt-4 hover:bg-primary-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </motion.section>
  );
}
