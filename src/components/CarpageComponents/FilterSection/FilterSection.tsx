import { Slider } from "@mui/material";

type Props = {
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  seatsFilter: string;
  setSeatsFilter: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
};

export default function FiltersSection({
  typeFilter,
  setTypeFilter,
  seatsFilter,
  setSeatsFilter,
  priceRange,
  setPriceRange,
}: Props) {
  return (
    <section className="mb-12 bg-white p-6 rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Car Type */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2">Car Type</label>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option>All Types</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Truck</option>
          <option>Electric</option>
        </select>
      </div>

      {/* Seats */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2">Seats</label>
        <select
          value={seatsFilter}
          onChange={(e) => setSeatsFilter(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option>Any</option>
          <option>2</option>
          <option>4</option>
          <option>5</option>
          <option>7+</option>
        </select>
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2">Price per day ($)</label>
        <Slider
          value={priceRange}
          onChange={(_, newValue) =>
            setPriceRange(newValue as [number, number])
          }
          valueLabelDisplay="auto"
          min={10}
          max={500}
        />
      </div>
    </section>
  );
}
