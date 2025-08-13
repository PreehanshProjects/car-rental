import { motion, type Variants } from "framer-motion";
import CallToActionSection from "../../components/HomepageComponents/CallToActionSection/CallToActionSection";
import FleetShowcaseSection from "../../components/HomepageComponents/FleetShowcaseSection/FleetShowcaseSection";
import HeroSection from "../../components/HomepageComponents/HeroSection/HeroSection";
import HowToFindUsSection from "../../components/HomepageComponents/HowToFindUsSection/HowToFindUsSection";
import StatsSection from "../../components/HomepageComponents/StatsSection/StatsSection";
import TestimonialSection from "../../components/HomepageComponents/TestimonialSection/TestimonialSection";
import WhyChooseUsSection from "../../components/HomepageComponents/WhyChooseUsSection/WhyChooseUsSection";
import AboutUsSection from "../../components/HomepageComponents/AboutUsSection/AboutUsSection";

// Section container animation
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

// Child animation
const childVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function HomePage() {
  const sections = [
    <HeroSection key="hero" />,
    <AboutUsSection key="about" />,
    <WhyChooseUsSection key="why" />,
    <FleetShowcaseSection key="fleet" />,
    <StatsSection key="stats" />,
    <TestimonialSection key="testimonials" />,
    <HowToFindUsSection key="find" />,
    <CallToActionSection key="cta" />,
  ];

  return (
    <main className="min-h-screen py-16 px-6 md:px-12 lg:px-24">
      {sections.map((Section, i) => (
        <motion.div
          key={i}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={childVariants}>{Section}</motion.div>
        </motion.div>
      ))}
    </main>
  );
}
