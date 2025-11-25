import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo1 from "../assets/images/L2.png";
import logo2 from "../assets/images/L3.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/our-centre", label: "Our Centre" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-0 flex-shrink-0 z-50">
              <img
                src={logo1}
                alt="Logo 1"
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <img
                src={logo2}
                alt="Logo 2"
                className="h-10 sm:h-12 w-auto object-contain -ml-1"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-200 relative py-2 ${
                      isActive
                        ? "text-[#1A3F22]"
                        : "text-[#58761B] hover:text-[#1A3F22]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D99201] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <Link
                to="/contact"
                className="ml-2 btn-base btn-primary"
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-[#1A3F22] transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      <div className="h-20"></div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          aria-hidden={!open}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              open ? "opacity-40" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />

          {/* Mobile Drawer */}
          <aside
            className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl 
                       transform transition-transform duration-300 ease-out flex flex-col
                       ${open ? "translate-x-0" : "translate-x-full"}`}
            role="dialog"
            aria-modal="true"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <div className="flex items-center gap-0">
                <img
                  src={logo1}
                  alt="Logo 1"
                  className="h-10 w-auto object-contain"
                />
                <img
                  src={logo2}
                  alt="Logo 2"
                  className="h-8 w-auto object-contain -ml-1"
                />
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-gray-100 text-[#1A3F22] transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-6 px-6">
              <div className="flex flex-col gap-1">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-[#1A3F22] bg-[#F4F7EB] shadow-sm"
                          : "text-[#58761B] hover:text-[#1A3F22] hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>

            {/* Drawer Footer */}
            <div className="px-6 py-6 border-t border-gray-200 space-y-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-base btn-primary w-full"
              >
                Get Quote
              </Link>
              <a
                href="tel:9560553909"
                className="btn-base btn-outline w-full"
              >
                <Phone size={18} /> 9560553909
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}