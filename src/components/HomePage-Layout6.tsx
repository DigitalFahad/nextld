
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PreviewNav from "./PreviewNav";
import { 
  ArrowRight, 
  Globe, 
  Calendar, 
  CheckCircle, 
  Star,
  TrendingUp,
  Code,
  Zap,
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  Target,
  BarChart3,
  Briefcase,
  Quote,
  Play,
  Menu,
  X,
  Search,
  Palette,
  Shield,
  Lightbulb
} from "lucide-react";
import { useState } from "react";

const HomePageLayout6 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites and web applications built with cutting-edge technology",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Performance Optimization"]
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence",
      features: ["Search Engine Optimization", "PPC Campaigns", "Social Media Marketing", "Content Strategy"]
    },
    {
      icon: Zap,
      title: "AI Agent Development",
      description: "Custom AI solutions that automate workflows and enhance customer experiences",
      features: ["Chatbots", "Process Automation", "Data Analysis", "Customer Support AI"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Turn your data into actionable insights for better business decisions",
      features: ["Business Intelligence", "Performance Tracking", "Custom Dashboards", "Reporting Tools"]
    },
    {
      icon: Target,
      title: "Marketing Automation",
      description: "Intelligent workflows that nurture leads and optimize conversion funnels",
      features: ["Lead Nurturing", "Email Campaigns", "CRM Integration", "Sales Funnels"]
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Creative design solutions that capture your brand essence and engage customers",
      features: ["Brand Identity", "UI/UX Design", "Graphic Design", "Brand Guidelines"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "Chief Marketing Officer",
      company: "TechCorp Solutions",
      content: "Next Level Digital transformed our digital presence completely. Their AI-driven approach increased our lead generation by 400% in just 6 months.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      position: "VP of Growth",
      company: "Global Industries", 
      content: "The team's expertise in performance marketing is unmatched. We've seen consistent 5x ROAS across all our campaigns.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      position: "Founder & CEO",
      company: "Innovation Labs",
      content: "Their AI automation solutions saved us 20+ hours per week while improving our customer satisfaction scores significantly.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const whyChooseReasons = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Deep understanding across 200+ industries with proven strategies that work"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Results",
      description: "Every decision backed by comprehensive analytics and performance metrics"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Assigned account managers and 24/7 support across all global offices"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Latest AI and automation tools integrated into all our service offerings"
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "28-year history with thousands of successful campaigns and satisfied clients"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Local expertise with global scale across 5 countries and multiple time zones"
    }
  ];

  const globalLocations = [
    { country: "Pakistan", city: "Karachi", flag: "🇵🇰" },
    { country: "Malaysia", city: "Kuala Lumpur", flag: "🇲🇾" },
    { country: "Canada", city: "Toronto", flag: "🇨🇦" },
    { country: "New Zealand", city: "Auckland", flag: "🇳🇿" },
    { country: "Australia", city: "Sydney", flag: "🇦🇺" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PreviewNav />
      
      {/* Header from Layout 2 (without tagline) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-navy-900">Next Level Digital</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                Book Strategy Call
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full w-fit">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Strategy Call
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section from Layout 2 */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center space-x-2 mb-8">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30">
                <Globe className="w-3 h-3 mr-1" />
                5 Global Offices
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30">
                500+ Projects Delivered
              </Badge>
              <Badge className="bg-green-500/20 text-green-200 border-green-400/30">
                AI-Powered Solutions
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Enterprise Digital
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Transformation
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Your global partner for AI-driven digital marketing, development, and automation solutions. 
              Trusted by industry leaders across 5 continents.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-medium group">
                <Calendar className="w-5 h-5 mr-2" />
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white px-10 py-4 rounded-full text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">AI Agents Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Digital Solutions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From AI-powered marketing to custom development, we provide end-to-end digital services 
            that drive growth and innovation for your business.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Transform Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how our AI-powered solutions can accelerate your business growth.
          </p>
          
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real partnerships. See how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-gray-300 mb-4" />
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-navy-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Next Level Digital - Updated to match live website */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Why Choose Next Level Digital?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with cutting-edge technology to deliver exceptional results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whyChooseReasons.map((reason, index) => (
              <div key={reason.title} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">28+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section with Form */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8">
                Get in touch with us today and let's discuss how we can help transform your business.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details & Global Presence */}
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>hello@nextldigital.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+92 333 348-7795</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Global Offices in 5 Countries</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Our Global Presence</h3>
                <div className="grid grid-cols-1 gap-4">
                  {globalLocations.map((location) => (
                    <div key={location.country} className="flex items-center space-x-3">
                      <span className="text-2xl">{location.flag}</span>
                      <div>
                        <div className="font-semibold">{location.country}</div>
                        <div className="text-gray-400 text-sm">{location.city}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Next Level Digital</span>
              </div>
              <p className="text-gray-300 mb-6">
                Enterprise digital transformation powered by AI innovation and global expertise.
              </p>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@nextldigital.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+92 333 348-7795</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6">Core Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Website Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO & Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Agent Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Automation</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Global Offices */}
            <div>
              <h4 className="font-bold text-lg mb-6">Global Offices</h4>
              <div className="space-y-3 text-gray-300 text-sm">
                {globalLocations.map((location) => (
                  <div key={location.country} className="flex items-center space-x-2">
                    <span>{location.flag}</span>
                    <span>{location.city}, {location.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Next Level Digital. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageLayout6;
