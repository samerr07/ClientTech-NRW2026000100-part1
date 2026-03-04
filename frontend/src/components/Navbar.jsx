import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products & Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-slate-200"
          : "bg-slate-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" data-testid="logo-link" className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded flex items-center justify-center ${isScrolled ? 'bg-emerald-500' : 'bg-emerald-500'}`}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg tracking-tight leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                RENERGIZR
              </span>
              <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-400'}`}>
                Industries
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 text-sm font-semibold tracking-tight transition-colors ${
                  isActive(link.path)
                    ? isScrolled 
                      ? "text-emerald-600" 
                      : "text-emerald-400"
                    : isScrolled 
                      ? "text-slate-700 hover:text-emerald-600" 
                      : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button
                data-testid="nav-cta-button"
                className="rounded-sm px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm uppercase tracking-wide"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? "text-emerald-600 bg-emerald-50"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                data-testid="mobile-cta-button"
                className="w-full mt-4 rounded-sm py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
