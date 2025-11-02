import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Home, Car, LogIn } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // to track current path

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMobileOpen(false);
  };

  const navItems = [
    { name: t("home"), path: "/", icon: <Home size={18} /> },
    { name: t("cars"), path: "/cars", icon: <Car size={18} /> },
    { name: t("login"), path: "/login", icon: <LogIn size={18} /> },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 animated-gradient-bg shadow-lg transition-colors duration-300 mb-20${
        mobileOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wider text-white bg-clip-text cursor-pointer">
          Car Rental
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all ${
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {item.icon} {item.name}
              </Link>
            );
          })}

          {/* Language Switch */}
          <div className="flex gap-2">
            <button
              onClick={() => changeLanguage("en")}
              className={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
                i18n.language === "en"
                  ? "bg-white text-blue-700"
                  : "hover:bg-white hover:text-blue-700"
              }`}
            >
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{ width: 20, height: 20 }}
              />{" "}
              EN
            </button>
            <button
              onClick={() => changeLanguage("fr")}
              className={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
                i18n.language === "fr"
                  ? "bg-white text-blue-700"
                  : "hover:bg-white hover:text-blue-700"
              }`}
            >
              <ReactCountryFlag
                countryCode="FR"
                svg
                style={{ width: 20, height: 20 }}
              />{" "}
              FR
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-6 pb-4 flex flex-col gap-4 bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              onClick={() => setMobileOpen(false)}
              to={item.path}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all ${
                isActive
                  ? "text-blue-600 font-semibold border-l-4 border-blue-600"
                  : "hover:text-blue-600"
              }`}
            >
              {item.icon} {item.name}
            </Link>
          );
        })}

        {/* Mobile Language */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => changeLanguage("en")}
            className={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
              i18n.language === "en"
                ? "bg-white text-blue-700"
                : "hover:bg-white hover:text-blue-700"
            }`}
          >
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{ width: 20, height: 20 }}
            />{" "}
            EN
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`flex items-center gap-1 px-2 py-1 rounded-md transition ${
              i18n.language === "fr"
                ? "bg-white text-blue-700"
                : "hover:bg-white hover:text-blue-700"
            }`}
          >
            <ReactCountryFlag
              countryCode="FR"
              svg
              style={{ width: 20, height: 20 }}
            />{" "}
            FR
          </button>
        </div>
      </div>
    </nav>
  );
}
