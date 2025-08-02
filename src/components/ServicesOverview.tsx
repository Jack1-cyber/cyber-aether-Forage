import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Cloud, 
  Brain,
  ArrowRight,
  Lock,
  Eye,
  Server,
  Zap
} from "lucide-react";
import aiServicesBg from "@/assets/ai-services-bg.jpg";
import cloudServicesBg from "@/assets/cloud-services-bg.jpg";
import securityShield from "@/assets/security-shield.jpg";

const ServicesOverview = () => {
  const mainServices = [
    {
      title: "Cybersecurity Solutions",
      description: "Advanced threat detection and prevention with cutting-edge security technologies",
      icon: Shield,
      image: securityShield,
      services: [
        "Vulnerability Assessment & Penetration Testing",
        "Endpoint Detection (EDR & XDR)",
        "Zero Trust Security",
        "Firewall Security"
      ],
      gradient: "from-red-500/20 to-pink-500/20",
      href: "/solutions/cybersecurity"
    },
    {
      title: "Cloud Services",
      description: "Comprehensive cloud solutions with enterprise-grade security and scalability",
      icon: Cloud,
      image: cloudServicesBg,
      services: [
        "Cloud Solutions Architecture",
        "Cloud Security Implementation",
        "Migration Services",
        "Partner Services Integration"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      href: "/solutions/cloud"
    },
    {
      title: "AI Services",
      description: "Intelligent automation and AI-powered security solutions for modern enterprises",
      icon: Brain,
      image: aiServicesBg,
      services: [
        "AI Workflow Automations",
        "General Workflow Automations",
        "AI-integrated Cyber & Cloud Services",
        "Intelligent Threat Detection"
      ],
      gradient: "from-purple-500/20 to-indigo-500/20",
      href: "/solutions/ai"
    }
  ];

  const additionalFeatures = [
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Never trust, always verify approach to security"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous surveillance and threat detection"
    },
    {
      icon: Server,
      title: "Enterprise Grade",
      description: "Scalable solutions for organizations of all sizes"
    },
    {
      icon: Zap,
      title: "Real-time Response",
      description: "Instant threat mitigation and automated responses"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cyber-purple to-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 float-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pista-green to-pista-green-glow bg-clip-text text-transparent">
            Our Solutions & Products
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover our comprehensive suite of cybersecurity and AI solutions designed to protect and empower your digital transformation
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 hover:border-pista-green/40 transition-all duration-500 hover:shadow-glow hover:scale-105 float-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-pista-green/20 group-hover:bg-pista-green/30 transition-colors duration-300 mr-4">
                      <IconComponent className="h-8 w-8 text-pista-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-pista-green transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.services.map((item) => (
                      <li key={item} className="flex items-center text-sm text-foreground/80">
                        <div className="w-2 h-2 bg-pista-green rounded-full mr-3 opacity-60"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="cyberOutline" 
                    className="w-full group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-medium-charcoal/50 backdrop-blur-sm border border-white/10 hover:border-pista-green/40 transition-all duration-300 hover:shadow-glow float-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-lg bg-pista-green/20 group-hover:bg-pista-green/30 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-pista-green" />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-pista-green transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;