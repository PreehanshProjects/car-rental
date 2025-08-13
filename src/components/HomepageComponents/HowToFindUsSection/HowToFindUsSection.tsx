import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Phone, Mail, Home, Clock } from "lucide-react";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [-20.309606, 57.484902];

function SetView({ coords, zoom }: { coords: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, zoom);
  }, [map, coords, zoom]);
  return null;
}

function ForceResizeMap() {
  const map = useMap();
  useEffect(() => {
    const handleResize = () => map.invalidateSize();
    setTimeout(handleResize, 300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [map]);
  return null;
}

export default function HowToFindUsSection() {
  return (
    <section
      className="max-w-6xl mx-auto my-20 p-6 sm:p-8 bg-white/90 rounded-3xl shadow-xl border border-gray-200"
      style={{
        backgroundColor: "var(--color-main)",
        color: "var(--color-yellow-500)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <h2
        className="text-3xl font-bold mb-8 text-center"
        style={{ color: "var(--color-yellow-600)" }}
      >
        How To Find Us
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div
          className="flex-1 space-y-6"
          style={{ color: "var(--color-yellow-500)" }}
        >
          <div className="flex items-center gap-3">
            <Phone className="text-yellow-600" size={20} />
            <a
              href="tel:+53333444"
              className="hover:underline"
              style={{ color: "var(--color-yellow-500)" }}
            >
              54444444 / 53333333
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-yellow-600" size={20} />
            <a
              href="mailto:contact@real-estate.mu"
              className="hover:underline"
              style={{ color: "var(--color-yellow-500)" }}
            >
              contact@real-estate.mu
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Home className="text-yellow-600 mt-1" size={20} />
            <address
              className="not-italic"
              style={{ color: "var(--color-yellow-500)" }}
            >
              Royal-Road, Main-Street near Park
              <br />
              101010 New-York, USA
            </address>
          </div>

          <h3
            className="text-2xl font-semibold mt-8 mb-4"
            style={{ color: "var(--color-yellow-600)" }}
          >
            Opening Hours
          </h3>
          <div className="space-y-2">
            {["Mon–Fri: 08:00–15:00", "Sat: Closed", "Sun: Closed"].map(
              (line) => (
                <div
                  key={line}
                  className="flex items-center gap-3"
                  style={{ color: "var(--color-yellow-500)" }}
                >
                  <Clock className="text-yellow-600" size={20} />
                  <span>{line}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg border border-gray-300">
          <MapContainer scrollWheelZoom={false} className="h-full w-full">
            <SetView coords={position} zoom={16} />
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position}>
              <Popup>Our Location</Popup>
            </Marker>
            <ForceResizeMap />
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
