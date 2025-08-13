import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AboutUsSection() {
  const { t } = useTranslation();
  const [isHover, setIsHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);
  const scale = isHover ? 1.05 : 1;

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();
    const posX = event.clientX - rect.left - rect.width / 2;
    const posY = event.clientY - rect.top - rect.height / 2;
    x.set(posX);
    y.set(posY);
  }

  function handleMouseLeave() {
    setIsHover(false);
    x.set(0);
    y.set(0);
  }

  function handleMouseEnter() {
    setIsHover(true);
  }

  return (
    <motion.section
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-5xl mx-auto mb-20 flex flex-col md:flex-row items-center gap-12 rounded-3xl p-12 shadow-lg bg-primary-600 text-white"
    >
      {/* Image with microinteraction */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
        style={{
          perspective: 600,
          rotateX: rotateX,
          rotateY: rotateY,
          scale: scale,
          boxShadow: isHover
            ? "0 20px 40px rgba(0,0,0,0.5)"
            : "0 8px 30px rgba(0,0,0,0.3)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <motion.img
          src="/images/fleet.jpg"
          alt={t("aboutSection.title")}
          className="w-full h-auto object-cover rounded-3xl"
          whileHover={{ scale: 1.05 }}
          draggable={false}
        />
      </motion.div>

      {/* Text content */}
      <div className="md:flex-1">
        <h2 className="text-3xl font-bold mb-4">{t("aboutSection.title")}</h2>
        <p className="leading-relaxed text-lg mb-4">
          {t("aboutSection.description")}
        </p>
      </div>
    </motion.section>
  );
}
