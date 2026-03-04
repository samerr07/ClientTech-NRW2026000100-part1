import { Link } from "react-router-dom";
import { 
  Users, 
  Linkedin, 
  Mail, 
  Phone,
  ArrowRight,
  Zap,
  Award,
  Building2,
  ExternalLink
} from "lucide-react";
import { Button } from "../components/ui/button";

const Team = () => {
  const leadership = [
    {
      name: "Himanshu Gupta",
      role: "Founder & Director",
      phone: "+91-9315940284",
      email: "himanshu@renergizr.com",
      linkedin: "https://linkedin.com/in/",
      bio: "Visionary leader with extensive experience in the energy sector, driving Renergizr's mission to transform B2B energy trading in India through innovative technology solutions.",
    },
  ];

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from technology development to customer service.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration and partnership to achieve common goals.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "We embrace innovation and continuously seek new ways to improve energy trading.",
    },
  ];

  return (
    <main data-testid="team-page" className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
              <Users className="w-3.5 h-3.5" />
              Our Team
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Meet the Team Behind Renergizr
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Our leadership team brings together diverse expertise in energy, technology, and business to drive India's energy transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section data-testid="leadership-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              Leadership
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Our Leadership Team
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {leadership.map((member, index) => (
              <div
                key={index}
                data-testid={`team-member-${index}`}
                className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2">
                  {/* Photo Area */}
                  <div className="bg-slate-100 p-8 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <Users className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  
                  {/* Info Area */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-semibold text-sm mb-4">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-emerald-500" />
                        <span className="text-slate-700 text-sm">{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-emerald-500" />
                        <span className="text-slate-700 text-sm">{member.email}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="linkedin-link"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white text-sm font-semibold rounded hover:bg-[#006097] transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect on LinkedIn
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section data-testid="culture-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                Our Culture
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                At Renergizr, we foster a culture of innovation, collaboration, and excellence. Our team is united by a shared vision of transforming India's energy landscape.
              </p>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-emerald-500 flex items-center justify-center text-white shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{value.title}</h3>
                      <p className="text-slate-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/8353811/pexels-photo-8353811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Team Collaboration"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section data-testid="join-section" className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-3 block">
                Careers
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
                Join Our Mission
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                We're always looking for talented individuals who share our passion for transforming India's energy sector. If you're excited about making a difference, we'd love to hear from you.
              </p>
              <Link to="/contact">
                <Button
                  data-testid="careers-cta"
                  className="rounded-sm px-8 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-sm p-8">
              <h3 className="text-white font-bold text-lg mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {[
                  "Opportunity to work on cutting-edge technology",
                  "Collaborative and innovative work environment",
                  "Impact-driven projects in the energy sector",
                  "Growth and learning opportunities",
                  "Competitive compensation and benefits"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
