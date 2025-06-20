
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* AI Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Bot className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">AI-Powered Digital Solutions</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-6 leading-tight animate-fade-in">
            Take Your Business to the{" "}
            <span className="gradient-text">Next Level</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We combine cutting-edge AI technology with proven digital marketing strategies to deliver unprecedented results for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium group ai-glow">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-full text-lg font-medium">
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 mb-2">50+</div>
              <div className="text-gray-600">AI Agents Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy-900 mb-2">300%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 animate-pulse-glow">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-20 animate-pulse-glow" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-pulse-glow" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
