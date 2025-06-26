
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PreviewNav from "./PreviewNav";
import { 
  ArrowRight, 
  Globe, 
  Calendar, 
  CheckCircle, 
  Star,
  TrendingUp,
  Search,
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
  Briefcase
} from "lucide-react";

const HomePageLayout1 = () => {
  const coreServices = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom WordPress & Shopify solutions that convert visitors into customers",
      highlight: "50+ sites launched",
      color: "from-purple-500 to-violet-600",
      features: ["Custom WordPress", "Shopify E-commerce", "Mobile Responsive", "SEO Optimized"]
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "ROI-driven campaigns across Google, Meta, LinkedIn, and Amazon",
      highlight: "300% avg ROI increase",
      color: "from-green-500 to-emerald-600",
      features: ["Google Ads", "Meta Advertising", "LinkedIn Campaigns", "Amazon Marketing"]
    },
    {
      icon: Zap,
      title: "AI Agent Development",
      description: "Intelligent automation solutions that streamline business operations",
      highlight: "50% efficiency boost",
      color: "from-blue-500 to-cyan-600",
      features: ["Voice Agents", "Customer Service Bots", "Sales Automation", "Custom AI Solutions"]
    },
    {
      icon: BarChart3,
      title: "Marketing Automation",
      description: "Streamlined workflows that nurture leads and optimize customer journeys",
      highlight: "85% time savings",
      color: "from-orange-500 to-red-600",
      features: ["Workflow Automation", "Lead Nurturing", "Email Sequences", "CRM Integration"]
    }
  ];

  const trustIndicators = [
    { label: "Global Clients", value: "50+", icon: Globe },
    { label: "Projects Delivered", value: "500+", icon: Award },
    { label: "Countries Served", value: "15+", icon: MapPin },
    { label: "Team Experience", value: "8+", icon: Users }
  ];

  const achievements = [
    {
      icon: Target,
      metric: "300%",
      label: "Average ROI Increase",
      description: "Across performance marketing campaigns"
    },
    {
      icon: Code,
      metric: "95%",
      label: "Client Satisfaction Rate",
      description: "Based on project completion reviews"
    },
    {
      icon: Users,
      metric: "50+",
      label: "Enterprise Clients",
      description: "From startups to Fortune 500 companies"
    }
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
                <div className="text-xs text-gray-500">Enterprise Digital Solutions</div>
              </div>
            </div>
            <Button className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Corporate Messaging */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                  <Globe className="w-3 h-3 mr-1" />
                  Global Enterprise Solutions
                </Badge>
                <Badge className="bg-green-50 text-green-700 border-green-200">
                  AI-Powered Results
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
                Transform Your Business
                <span className="gradient-text block">With AI-Driven Digital Solutions</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our expert team delivers cutting-edge digital marketing, development, and automation 
                solutions that drive measurable growth for businesses worldwide. Trusted by enterprises 
                across 15+ countries.
              </p>

              {/* Key Differentiators */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border mb-8">
                <h3 className="font-semibold text-navy-900 mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                  Why Leading Companies Choose Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">AI-First Approach</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Proven ROI Results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 Global Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Enterprise Security</span>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium group ai-glow">
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Free Strategy Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-full text-lg">
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Right: Team/Corporate Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Corporate Team Placeholder */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mb-6 relative">
                  <div className="text-center text-gray-600">
                    <Users className="w-16 h-16 mx-auto mb-4 opacity-60" />
                    <p className="text-lg font-medium">Expert Digital Team</p>
                    <p className="text-sm">Global specialists in AI & digital transformation</p>
                    <p className="text-xs mt-2 opacity-75">Collaborative workspace environment</p>
                  </div>
                  
                  {/* Floating Achievement Elements */}
                  <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">500+ Projects</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">5.0 Rating</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="py-12 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((item) => (
              <div key={item.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <item.icon className="w-6 h-6 text-blue-400 mr-2" />
                  <span className="text-3xl font-bold text-white">{item.value}</span>
                </div>
                <div className="text-gray-300 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services - Top 4 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Core Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to accelerate business growth through advanced technology and proven strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={service.title} className="service-card-hover border-0 shadow-lg bg-white group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="bg-green-50 text-green-700 border-green-200">
                      {service.highlight}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Proven Results That Drive Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach delivers measurable outcomes for businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <Card key={achievement.label} className="text-center p-8 border-0 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-navy-900 mb-2">{achievement.metric}</h3>
                <p className="text-gray-600 mb-4 font-medium">{achievement.label}</p>
                <p className="text-sm text-gray-500">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values & Approach */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Strategic Approach
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We combine cutting-edge AI technology with proven digital marketing strategies 
                to deliver exceptional results for businesses ready to scale globally.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>AI-powered optimization across all digital channels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Data-driven strategies with transparent reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support with dedicated account management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Enterprise-grade security and compliance</span>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Learn About Our Process
              </Button>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Strategic Dashboard</p>
                  <p className="text-sm">Real-time performance metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Schedule a free consultation with our digital strategy experts and discover 
            how AI-powered solutions can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call Direct
            </Button>
          </div>

          <p className="text-sm opacity-75">
            ✓ No long-term contracts ✓ Results-focused approach ✓ Global expertise
          </p>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-navy-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Next Level Digital</span>
              </div>
              <p className="text-gray-300 mb-4">
                Enterprise digital solutions powered by AI innovation.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Global Presence</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Serving 15+ Countries Worldwide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Global Support Coverage</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageLayout1;
