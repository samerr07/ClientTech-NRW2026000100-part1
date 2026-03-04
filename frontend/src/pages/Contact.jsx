import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageSquare,
  Zap,
  CheckCircle,
  Building2
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91-9315940284",
      subtext: "Himanshu Gupta",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "contact@renergizr.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "New Delhi, India",
      subtext: "Serving clients nationwide",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      value: "Mon - Sat: 9AM - 6PM IST",
      subtext: "Indian Standard Time",
    },
  ];

  const faqs = [
    {
      q: "What is Renergizr's B2B energy trading platform?",
      a: "Our platform connects energy buyers with verified vendors through an intelligent marketplace featuring AI-powered bid ranking, RFQ/tendering workflows, and real-time grid balancing capabilities."
    },
    {
      q: "How does the AI-driven bid ranking work?",
      a: "Our proprietary algorithm analyzes multiple parameters including price, vendor reliability, compliance status, and energy specifications to rank bids and help you make optimal procurement decisions."
    },
    {
      q: "Is the platform suitable for small businesses?",
      a: "Absolutely! Our platform is designed to serve businesses of all sizes, from SMEs to large enterprises, with scalable solutions tailored to your specific energy trading needs."
    },
    {
      q: "How do you ensure vendor compliance?",
      a: "We have a comprehensive verification system that checks regulatory documents, green energy certifications, carbon credit balances, and ongoing compliance monitoring for all registered vendors."
    },
  ];

  return (
    <main data-testid="contact-page" className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              Contact Us
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Let's Start a Conversation
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Have questions about our platform? Ready to transform your energy trading? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section data-testid="contact-form-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
                Contact Information
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10">
                Whether you're interested in our B2B energy trading platform, have technical questions, or want to explore partnership opportunities, our team is ready to assist.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    data-testid={`contact-info-${index}`}
                    className="bg-slate-50 p-5 rounded-sm border-accent-left"
                  >
                    <div className="w-10 h-10 rounded bg-emerald-500 flex items-center justify-center text-white mb-3">
                      {info.icon}
                    </div>
                    <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">{info.title}</div>
                    <div className="text-slate-900 font-semibold mb-1">{info.value}</div>
                    <div className="text-slate-500 text-xs">{info.subtext}</div>
                  </div>
                ))}
              </div>

              {/* Office Location */}
              <div className="mt-10 bg-slate-900 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-white font-semibold">Corporate Office</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Renergizr Industries Private Limited<br />
                  New Delhi, India
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 rounded-sm p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded bg-emerald-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Send Us a Message</h3>
                    <p className="text-slate-500 text-sm">Fill out the form below</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-900 text-sm font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          data-testid="input-name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="h-11 rounded-sm border-slate-300 focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-900 text-sm font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          data-testid="input-email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                          className="h-11 rounded-sm border-slate-300 focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-slate-900 text-sm font-semibold">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          data-testid="input-company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="h-11 rounded-sm border-slate-300 focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-900 text-sm font-semibold">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          data-testid="input-phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91-XXXXXXXXXX"
                          className="h-11 rounded-sm border-slate-300 focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-900 text-sm font-semibold">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        data-testid="input-subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="h-11 rounded-sm border-slate-300 focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-900 text-sm font-semibold">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        data-testid="input-message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your energy trading needs..."
                        rows={5}
                        className="rounded-sm border-slate-300 focus:border-emerald-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      data-testid="submit-button"
                      className="w-full h-12 rounded-sm bg-emerald-500 hover:bg-emerald-600 text-white font-semibold uppercase tracking-wide text-sm"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section data-testid="faq-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
              FAQs
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-testid={`faq-item-${index}`}
                className="bg-white p-6 rounded-sm border border-slate-200"
              >
                <h3 className="text-base font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
