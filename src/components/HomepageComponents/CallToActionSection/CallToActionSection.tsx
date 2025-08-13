import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CallToActionSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/cars");
  };

  return (
    <section className="max-w-4xl mx-auto my-20 text-center px-6 py-12 rounded-3xl shadow-lg bg-primary-600">
      <h2 className="text-3xl font-extrabold mb-6 text-white">
        {t("cta.title") || "Ready to Hit the Road?"}
      </h2>
      <p className="text-yellow-200 mb-8">
        {t("cta.subtitle") ||
          "Book your rental car today and enjoy flexible, reliable, and affordable service."}
      </p>

      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 12px var(--color-yellow-400)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBookNow}
        className="px-8 py-3 bg-yellow-400 text-primary-900 font-semibold rounded-full shadow-lg transition"
      >
        {t("cta.button") || "Book Now"}
      </motion.button>

      <div className="flex items-center justify-center gap-3 mt-6 text-yellow-200 text-sm">
        <CheckCircle className="w-5 h-5" />
        <span>
          {t("cta.note") ||
            "Flexible plans, insured cars, and 24/7 support — satisfaction guaranteed."}
        </span>
      </div>
    </section>
  );
}
