
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy is measured against tangible business outcomes and ROI."
    },
    {
      icon: Lightbulb,
      title: "AI-First Approach",
      description: "We leverage cutting-edge AI technology to optimize every aspect of your digital presence."
    },
    {
      icon: Rocket,
      title: "Rapid Implementation",
      description: "Fast-track your digital transformation with our agile development and deployment processes."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and optimization ensure your digital assets perform at their peak."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Why Choose <span className="gradient-text">Next Level Digital</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're not just another digital agency. We're your strategic partner in the AI revolution, 
              combining deep industry expertise with cutting-edge technology to deliver results that 
              matter to your bottom line.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">Proven Track Record</h4>
                  <p className="text-gray-600">500+ successful projects across diverse industries with measurable results.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">AI-Powered Solutions</h4>
                  <p className="text-gray-600">First to market with AI agents and automation that actually drive business value.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">Full-Service Approach</h4>
                  <p className="text-gray-600">From strategy to execution, we handle every aspect of your digital transformation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="border-0 shadow-lg service-card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-navy-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
