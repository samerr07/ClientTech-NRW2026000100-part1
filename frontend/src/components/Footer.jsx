import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "B2B Energy Trading",
    "AI-Powered Bid Ranking",
    "RFQ & Tendering",
    "Vendor Verification",
    "Grid Balancing",
  ];

  return (
    <footer data-testid="footer" className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded bg-emerald-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-white">
                  RENERGIZR
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">
                  Industries Pvt. Ltd.
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India's emerging B2B marketplace for energy trading. Empowering businesses with AI-driven solutions and sustainable energy practices.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-linkedin"
                className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-twitter"
                className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 text-sm hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium">+91-9315940284</div>
                  <div className="text-slate-500 text-xs">Himanshu Gupta</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">contact@renergizr.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Renergizr Industries Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 text-sm hover:text-emerald-400 transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
