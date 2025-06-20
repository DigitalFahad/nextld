
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  TrendingUp, 
  Code, 
  Bot, 
  Zap, 
  Video, 
  Camera, 
  BookOpen,
  Smartphone,
  Users,
  Megaphone,
  Palette
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      category: "Performance Marketing",
      icon: TrendingUp,
      description: "Data-driven advertising across all major platforms",
      services: ["Google Ads", "Meta Ads", "Microsoft Ads", "LinkedIn Ads", "Amazon Ads", "TikTok Ads"],
      color: "from-green-500 to-emerald-600"
    },
    {
      category: "SEO & Optimization", 
      icon: Search,
      description: "Advanced SEO strategies powered by AI insights",
      services: ["Local SEO", "International SEO", "AI SEO", "Google My Business", "SEO Audit", "App Store Optimization"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      category: "Website Development",
      icon: Code,
      description: "Custom websites and e-commerce solutions",
      services: ["WordPress & Shopify", "Personal Brand Sites", "Real Estate", "Healthcare", "Coach/Consultant", "UI/UX to Code"],
      color: "from-purple-500 to-violet-600"
    },
    {
      category: "AI Agent Development",
      icon: Bot,
      description: "Intelligent automation and voice AI solutions",
      services: ["Voice Agents", "Customer Service Bots", "Sales Automation", "Custom AI Solutions"],
      color: "from-orange-500 to-red-600"
    },
    {
      category: "Marketing Automation",
      icon: Zap,
      description: "Streamlined workflows and customer journey optimization",
      services: ["Zapier Integration", "HubSpot", "GHL", "Workflow Automation", "Klaviyo", "Customer.io"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      category: "Content & Media",
      icon: Video,
      description: "Professional video and content production",
      services: ["Video Editing", "DVC Production", "Product Photography", "Voice Over", "AI Generated Ads"],
      color: "from-pink-500 to-rose-600"
    },
    {
      category: "Design & Branding",
      icon: Palette,
      description: "Complete brand identity and design solutions",
      services: ["Figma UI/UX Design", "Brand Book", "Landing Pages", "Website Content & Copywriting"],
      color: "from-teal-500 to-green-600"
    },
    {
      category: "Specialized Solutions",
      icon: Smartphone,
      description: "Advanced digital products and training",
      services: ["Mobile Apps", "LMS Development", "Payment Gateway Integration", "Influencer Marketing", "Trainings"],
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered marketing to custom development, we provide end-to-end digital services 
            that drive growth and innovation for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.category} 
              className="service-card-hover border-0 shadow-lg bg-white group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-navy-900 group-hover:text-primary transition-colors">
                  {service.category}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.services.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {item}
                    </div>
                  ))}
                  {service.services.length > 4 && (
                    <div className="text-sm text-primary font-medium pt-2">
                      +{service.services.length - 4} more services
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how our AI-powered solutions can accelerate your business growth.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
