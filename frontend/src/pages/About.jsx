import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Award, 
  Building2, 
  Leaf, 
  ArrowRight,
  CheckCircle,
  Zap,
  Calendar,
  TrendingUp
} from "lucide-react";
import { Button } from "../components/ui/button";

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission",
      description: "To democratize energy trading in India through an intelligent, transparent, and sustainable B2B marketplace that empowers businesses to make smarter energy decisions.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Vision",
      description: "To become India's most trusted energy trading platform, driving the nation's transition to a sustainable energy future through technology and innovation.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Values",
      description: "Transparency, sustainability, innovation, and trust form the cornerstone of everything we do. We create value for all stakeholders in the energy ecosystem.",
    },
  ];

  const timeline = [
    { 
      year: "2024", 
      title: "Company Founded", 
      description: "Renergizr Industries Private Limited established with a vision to transform B2B energy trading in India." 
    },
    { 
      year: "2025", 
      title: "Platform Development", 
      description: "Strategic partnership initiated for developing the AI-powered B2B energy marketplace platform." 
    },
    { 
      year: "2026", 
      title: "MVP Launch", 
      description: "Launch of the intelligent energy trading platform with RFQ/Tendering and AI bid ranking capabilities." 
    },
    { 
      year: "Future", 
      title: "Market Expansion", 
      description: "Scaling operations across India with advanced features, partnerships, and sustainable energy solutions." 
    },
  ];

  const highlights = [
    "RFQ/Tendering workflow for streamlined procurement",
    "AI-driven bid ranking for optimal deals",
    "Green energy certification verification",
    "Real-time grid balancing with 5G/6G tech",
    "Comprehensive vendor verification system",
    "Platform analytics and insights dashboard"
  ];

  return (
    <main data-testid="about-page" className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
              <Building2 className="w-3.5 h-3.5" />
              About Our Company
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Building India's Energy Future
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Renergizr Industries Private Limited is pioneering the next generation of B2B energy trading with AI-powered solutions, sustainable practices, and a commitment to transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section data-testid="company-overview" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                From Vision to Reality
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Renergizr Industries was founded with a singular purpose: to transform how businesses in India buy and sell energy. We recognized the inefficiencies in traditional energy procurement and set out to create a smarter solution.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our B2B marketplace leverages cutting-edge AI technology to match energy buyers with verified vendors, ensuring optimal pricing, regulatory compliance, and sustainable practices. We're not just building a platform—we're shaping the future of India's energy sector.
              </p>
              <div className="flex items-center gap-4 p-5 rounded bg-slate-50 border-accent-left">
                <div className="w-12 h-12 rounded bg-emerald-500 flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Commitment to Sustainability</div>
                  <div className="text-slate-500 text-sm">Promoting green energy adoption across India</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1758599543129-5269a8f29e68?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                  alt="Business Partnership"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section data-testid="values-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              What Drives Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Our Foundation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-testid={`value-card-${index}`}
                className="bg-white p-8 rounded-sm shadow-sm border-accent-top card-lift"
              >
                <div className="w-14 h-14 rounded bg-slate-100 flex items-center justify-center text-emerald-600 mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section data-testid="highlights-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                What We Offer
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Platform Capabilities
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our comprehensive platform provides everything you need for efficient energy trading, from intelligent bid matching to regulatory compliance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-8 lg:p-10 rounded-sm">
              <h3 className="text-white font-bold text-lg mb-6">Key Differentiators</h3>
              <div className="space-y-4">
                {[
                  { label: "AI-Powered Intelligence", value: "Smart bid ranking & analysis" },
                  { label: "Regulatory Compliance", value: "Built-in compliance frameworks" },
                  { label: "Real-Time Operations", value: "5G/6G enabled grid balancing" },
                  { label: "Green Energy Focus", value: "Sustainability certifications" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-slate-700 pb-4">
                    <span className="text-slate-300 text-sm">{item.label}</span>
                    <span className="text-emerald-400 text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section data-testid="timeline-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Milestones & Growth
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8">
              <div className="timeline-line"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} data-testid={`timeline-item-${index}`} className="relative">
                    <div className="timeline-dot" style={{ top: '8px' }}></div>
                    <div className="bg-white p-6 rounded-sm shadow-sm ml-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                        <span className="text-emerald-600 font-bold text-sm">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
            Want to Partner With Us?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Join the energy revolution. Discover how Renergizr can transform your energy trading experience.
          </p>
          <Link to="/contact">
            <Button
              data-testid="about-cta"
              className="rounded-sm px-10 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
