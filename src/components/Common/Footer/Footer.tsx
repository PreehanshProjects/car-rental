import { useTranslation } from "react-i18next";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Car,
} from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-primary-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row md:justify-between gap-12">
        {/* Brand & Social */}
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-yellow-400">
            RentEasy
          </h2>
          <p className="mb-6 max-w-md leading-relaxed text-white/90">
            {t("footer.description") ||
              "Your trusted partner for fast, reliable, and affordable car rentals. Explore our fleet and drive with confidence."}
          </p>
          <div className="flex space-x-4">
            {[
              {
                Icon: Facebook,
                href: "https://facebook.com",
                bgColor: "hover:bg-blue-600",
              },
              {
                Icon: Instagram,
                href: "https://instagram.com",
                bgColor: "hover:bg-pink-500",
              },
              {
                Icon: Twitter,
                href: "https://twitter.com",
                bgColor: "hover:bg-blue-400",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com",
                bgColor: "hover:bg-blue-700",
              },
            ].map(({ Icon, href, bgColor }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={href.split("//")[1].split(".")[0]}
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 transition ${bgColor} hover:text-white shadow`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col flex-1 space-y-4 text-sm md:text-base">
          <h3 className="font-semibold mb-4 uppercase tracking-wide text-yellow-400 text-lg">
            {t("footer.contactUs") || "Contact Us"}
          </h3>
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-yellow-400" />
            <a href={`tel:${t("footer.phone")}`} className="hover:underline">
              {t("footer.contact.phone") || "54444444 / 53333333"}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-yellow-400" />
            <a href={`mailto:${t("footer.email")}`} className="hover:underline">
              {t("footer.contact.email") || "contact@renteasy.com"}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-1 text-yellow-400" />
            <address className="not-italic leading-relaxed">
              {t("footer.contact.address") ||
                "Royal-Road, Main Street near Park, 101010 New-York, USA"}
            </address>
          </div>
        </div>

        {/* Fleet & Policies */}
        <div className="flex flex-col flex-1 space-y-4 text-sm md:text-base">
          <h3 className="font-semibold mb-4 uppercase tracking-wide text-yellow-400 text-lg">
            {t("footer.usefulLinks.links") || "Quick Links"}
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="hover:text-yellow-300 transition flex items-center gap-2"
            >
              <Car size={16} /> {t("footer.usefulLinks.fleet") || "Our Fleet"}
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              About Us
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              FAQ
            </a>
          </div>
        </div>
      </div>

      <hr className="my-10 border-yellow-400" />

      {/* Bottom */}
      <div className="text-center text-xs text-white/80 select-none">
        © {new Date().getFullYear()} RentEasy. All rights reserved.
      </div>
    </footer>
  );
}
