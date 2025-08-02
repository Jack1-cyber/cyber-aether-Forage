import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Cloud, 
  Brain, 
  Settings, 
  Users, 
  CreditCard,
  Headphones,
  BookOpen,
  ChevronRight
} from "lucide-react";
import cyberHeroBg from "@/assets/cyber-hero-bg.jpg";

const HeroSection = () => {
  const heroBlocks = [
    { 
      title: "SECaaS", 
      subtitle: "Security as a Service",
      icon: Shield, 
      description: "Complete security solutions delivered as managed services",
      gradient: "from-dark-matte-purple/20 to-dark-matte-purple-light/20"
    },
    { 
      title: "Pricing", 
      subtitle: "Transparent Solutions",
      icon: CreditCard, 
      description: "Flexible pricing models for every business size",
      gradient: "from-blue-500/20 to-blue-400/20"
    },
    { 
      title: "Managed Services", 
      subtitle: "24/7 Operations",
      icon: Headphones, 
      description: "Round-the-clock monitoring and support",
      gradient: "from-purple-500/20 to-purple-400/20"
    },
    { 
      title: "Cloud Solutions", 
      subtitle: "Modern Infrastructure",
      icon: Cloud, 
      description: "Scalable cloud architecture and deployment",
      gradient: "from-cyan-500/20 to-cyan-400/20"
    },
    { 
      title: "Cloud Security", 
      subtitle: "Protected Environments",
      icon: Shield, 
      description: "Advanced security for cloud infrastructure",
      gradient: "from-green-500/20 to-green-400/20"
    },
    { 
      title: "Migration", 
      subtitle: "Seamless Transitions",
      icon: Settings, 
      description: "Smooth migration to secure environments",
      gradient: "from-orange-500/20 to-orange-400/20"
    },
    { 
      title: "Partner Services", 
      subtitle: "Strategic Alliances",
      icon: Users, 
      description: "Collaborative solutions with trusted partners",
      gradient: "from-pink-500/20 to-pink-400/20"
    },
    { 
      title: "Advisory", 
      subtitle: "Expert Guidance",
      icon: BookOpen, 
      description: "Strategic cybersecurity consulting",
      gradient: "from-indigo-500/20 to-indigo-400/20"
    },
    { 
      title: "Chain Management", 
      subtitle: "Supply Chain Security",
      icon: Settings, 
      description: "End-to-end supply chain protection",
      gradient: "from-red-500/20 to-red-400/20"
    },
    { 
      title: "Project Management", 
      subtitle: "Organized Delivery",
      icon: Settings, 
      description: "Professional project execution",
      gradient: "from-yellow-500/20 to-yellow-400/20"
    },
    { 
      title: "EduTech", 
      subtitle: "Educational Technology",
      icon: BookOpen, 
      description: "Secure learning environments",
      gradient: "from-teal-500/20 to-teal-400/20"
    },
    { 
      title: "How It Works?", 
      subtitle: "Our Process",
      icon: Brain, 
      description: "Discover our proven methodology",
      gradient: "from-dark-matte-purple/20 to-dark-matte-purple-light/20"
    }
  ];

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cyberHeroBg})` }}
      >
        <div className="absolute inset-0 bg-cyber-purple/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/50 via-transparent to-cyber-purple/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Content */}
        <div className="text-center mb-16 float-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-dark-matte-purple via-dark-matte-purple-light to-dark-matte-purple bg-clip-text text-transparent">
            Cybersecurity
            <span className="block text-4xl md:text-6xl mt-2">
              Meets <span className="text-dark-matte-purple">AI Innovation</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protecting your digital future with advanced AI-powered cybersecurity solutions. 
            Experience the next generation of threat detection and prevention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Explore Solutions
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="cyberOutline" size="xl">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Interactive Service Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {heroBlocks.map((block, index) => {
            const IconComponent = block.icon;
            return (
              <div
                key={block.title}
                className={`group relative p-6 rounded-xl bg-gradient-to-br ${block.gradient} backdrop-blur-sm border border-white/10 hover:border-dark-matte-purple/40 transition-all duration-500 hover:shadow-glow hover:scale-105 cursor-pointer float-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-lg bg-dark-matte-purple/20 group-hover:bg-dark-matte-purple/30 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-dark-matte-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-dark-matte-purple transition-colors duration-300">
                      {block.title}
                    </h3>
                    <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                      {block.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-foreground/50 leading-relaxed">
                    {block.description}
                  </p>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-dark-matte-purple/0 via-dark-matte-purple/5 to-dark-matte-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "24/7", label: "Security Monitoring" },
            { number: "500+", label: "Protected Clients" },
            { number: "10M+", label: "Threats Blocked" }
          ].map((stat, index) => (
            <div key={stat.label} className="float-up" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-dark-matte-purple pulse-glow">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/60 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;