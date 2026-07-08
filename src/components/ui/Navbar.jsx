import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../layout/Logo.png";

const NAV_LINKS = [
  { path: "/",           label: "Home",     end: true  },
  { path: "/About",      label: "About",    end: false },
  { path: "/onSkills",   label: "Skills",   end: false },
  { path: "/Projects",   label: "Projects", end: false },
  { path: "/Gaming",     label: "Gaming",   end: false },
  { path: "/Resume",     label: "Resume",   end: false },
  { path: "/Contact",    label: "Contact",  end: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative font-mono text-[10px] uppercase tracking-widest py-1.5 transition-all duration-300 ${
      isActive
        ? "text-emerald-400 font-black"
        : "text-gray-400 hover:text-emerald-300"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020403]/90 backdrop-blur-xl border-b border-emerald-900/40 shadow-[0_4px_40px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {logo ? (
            <img
              src={logo}
              alt="Harsha.dev"
              className="h-9 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 6px rgba(0,255,136,0.7))" }}
            />
          ) : (
            <span className="font-orbitron text-sm font-black text-emerald-400 tracking-widest">
              HARSHA.DEV
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-7">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className={navLinkClass}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-0 w-full h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #00ff88, #39ff14)",
                        boxShadow: "0 0 8px #00ff88",
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button desktop */}
        <a
          href="/harsha_vardhan_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block font-mono text-[9px] tracking-widest uppercase px-5 py-2 rounded border font-black transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #00ff88, #39ff14)",
            color: "#000",
            borderColor: "#00ff88",
            boxShadow: "0 0 12px rgba(0,255,136,0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#00ff88";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #00ff88, #39ff14)";
            e.currentTarget.style.color = "#000";
          }}
        >
          Get CV
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 py-5 space-y-4"
          style={{
            background: "rgba(2,4,3,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(0,255,136,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block font-mono text-sm uppercase tracking-widest py-2 border-b border-emerald-950/30 transition-colors ${
                  isActive ? "text-emerald-400 font-black" : "text-gray-400"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/harsha_vardhan_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-center font-mono text-[10px] uppercase tracking-widest py-3 rounded font-black text-black mt-3"
            style={{ background: "linear-gradient(135deg, #00ff88, #39ff14)" }}
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
