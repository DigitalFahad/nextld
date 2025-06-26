
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
  Play
} from "lucide-react";

const HomePageLayout2 = () => {
  const coreServices = [
    {
      icon: Code,
      title: "Website Development",
      description: "Enterprise-grade WordPress & Shopify solutions built for scale and performance",
      stats: "200+ Websites Launched",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "ROI-focused campaigns across Google, Meta, LinkedIn, and Amazon platforms",
      stats: "500% Average ROAS",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "AI Agent Development",
      description: "Custom AI solutions that automate workflows and enhance customer experiences",
      stats: "80% Efficiency Increase",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: BarChart3,
      title: "Marketing Automation",
      description: "Intelligent workflows that nurture leads and optimize conversion funnels",
      stats: "300% Lead Quality Boost",
      color: "from-orange-500 to-red-600"
    }
  ];

  const clientLogos = [
    { name: "TechCorp", logo: "TC" },
    { name: "Global Industries", logo: "GI" },
    { name: "Innovation Labs", logo: "IL" },
    { name: "Digital Solutions", logo: "DS" },
    { name: "Enterprise Plus", logo: "EP" },
    { name: "Future Systems", logo: "FS" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "Chief Marketing Officer",
      company: "TechCorp Solutions",
      content: "Next Level Digital transformed our digital presence completely. Their AI-driven approach increased our lead generation by 400% in just 6 months.",
      rating: 5,
      avatar: "SC",
      hasVideo: true
    },
    {
      name: "Michael Rodriguez",
      position: "VP of Growth",
      company: "Global Industries",
      content: "The team's expertise in performance marketing is unmatched. We've seen consistent 5x ROAS across all our campaigns.",
      rating: 5,
      avatar: "MR",
      hasVideo: false
    },
    {
      name: "Emily Watson",
      position: "Founder & CEO",
      company: "Innovation Labs",
      content: "Their AI automation solutions saved us 20+ hours per week while improving our customer satisfaction scores significantly.",
      rating: 5,
      avatar: "EW",
      hasVideo: true
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
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-navy-900">Next Level Digital</span>
                <div className="text-xs text-gray-500">Global Digital Excellence</div>
              </div>
            </div>
            <Button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              Book Strategy Call
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
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
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-medium group ai-glow">
                <Calendar className="w-5 h-5 mr-2" />
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 px-10 py-4 rounded-full text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600">Join 500+ companies that have transformed their digital presence with us</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client) => (
              <div key={client.name} className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center border">
                  <span className="text-xl font-bold text-gray-700">{client.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Core Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive enterprise solutions designed to accelerate growth through cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={service.title} className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                      {service.stats}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Explore Solution
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              <Card key={testimonial.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    {testimonial.hasVideo && (
                      <Button size="sm" variant="outline" className="text-blue-600 border-blue-600">
                        <Play className="w-3 h-3 mr-1" />
                        Video
                      </Button>
                    )}
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

      {/* Global Presence */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Global Digital Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With teams across 5 countries, we deliver 24/7 support and local expertise wherever you are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {globalLocations.map((location) => (
              <div key={location.country} className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <span className="text-3xl">{location.flag}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{location.country}</h3>
                <p className="text-gray-400">{location.city}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Global Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">5</div>
                <div className="text-gray-300">Global Offices</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join 500+ companies that have accelerated their growth with our AI-powered digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          <p className="text-sm opacity-75">
            ✓ No commitment required ✓ Custom strategy session ✓ Expert team consultation
          </p>
        </div>
      </section>

      {/* Enhanced Footer with Global Locations */}
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
                <li><a href="#" className="hover:text-white transition-colors">Performance Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Agent Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Automation</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Global Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
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
              © 2024 Next Level Digital. All rights reserved. Global digital excellence.
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

export default HomePageLayout2;
