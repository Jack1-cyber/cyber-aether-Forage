import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Cloud, 
  Brain,
  Zap,
  Lock,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Product X",
      subtitle: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and prevent cyber threats in real-time with 99.9% accuracy.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      price: "Starting at $999/month",
      badge: "Most Popular",
      features: [
        "Real-time threat detection",
        "Machine learning analytics",
        "Automated response system",
        "24/7 monitoring dashboard",
        "Custom threat intelligence",
        "Integration with existing tools"
      ],
      keyBenefits: [
        "Reduce false positives by 90%",
        "Detect zero-day attacks",
        "Automated incident response",
        "Comprehensive reporting"
      ]
    },
    {
      name: "Product Y",
      subtitle: "Cloud Security Platform",
      description: "Comprehensive cloud security solution that protects multi-cloud environments with unified visibility and control.",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      price: "Starting at $1,499/month",
      badge: "Enterprise Ready",
      features: [
        "Multi-cloud protection",
        "Compliance automation",
        "Data loss prevention",
        "Identity and access management",
        "Network security policies",
        "Continuous compliance monitoring"
      ],
      keyBenefits: [
        "Unified cloud visibility",
        "Automated compliance",
        "Reduced security overhead",
        "Scalable architecture"
      ]
    },
    {
      name: "Product Z",
      subtitle: "Zero Trust Network Access",
      description: "Next-generation network security solution implementing zero trust principles for modern distributed workforces.",
      icon: Lock,
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
      price: "Starting at $799/month",
      badge: "Secure Remote Work",
      features: [
        "Zero trust architecture",
        "Device authentication",
        "Conditional access policies",
        "Micro-segmentation",
        "User behavior analytics",
        "Secure remote access"
      ],
      keyBenefits: [
        "Eliminate network perimeter",
        "Secure remote workforce",
        "Reduce attack surface",
        "Granular access control"
      ]
    },
    {
      name: "Product A",
      subtitle: "Automated Security Operations",
      description: "AI-driven security orchestration platform that automates incident response and security operations workflows.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      price: "Starting at $1,299/month",
      badge: "Automation Leader",
      features: [
        "Security orchestration",
        "Automated playbooks",
        "Incident response automation",
        "Threat intelligence integration",
        "Custom workflow builder",
        "Performance analytics"
      ],
      keyBenefits: [
        "Reduce response time by 80%",
        "Automate repetitive tasks",
        "Improve team efficiency",
        "Consistent incident handling"
      ]
    },
    {
      name: "Product B",
      subtitle: "Enterprise Security Suite",
      description: "Complete cybersecurity solution combining multiple security technologies into a unified platform for enterprises.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      price: "Custom Pricing",
      badge: "Enterprise Suite",
      features: [
        "Unified security platform",
        "Advanced analytics",
        "Threat hunting tools",
        "Compliance management",
        "Risk assessment",
        "Executive dashboards"
      ],
      keyBenefits: [
        "Complete security coverage",
        "Centralized management",
        "Reduced complexity",
        "Cost optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-cyber-purple to-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pista-green to-pista-green-glow bg-clip-text text-transparent float-up">
              Our Products
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8 float-up" style={{ animationDelay: '0.2s' }}>
              Cutting-edge cybersecurity and AI products designed to protect your organization from evolving threats
            </p>
            <Button variant="hero" size="xl" className="float-up" style={{ animationDelay: '0.4s' }}>
              Explore All Products
            </Button>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={product.name}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-medium-charcoal border border-white/10 hover:border-pista-green/40 transition-all duration-500 hover:shadow-glow float-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                      
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-pista-green/20 text-pista-green border-pista-green/40">
                          {product.badge}
                        </Badge>
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute top-4 left-4">
                        <div className="p-3 rounded-lg bg-pista-green/20 backdrop-blur-sm">
                          <IconComponent className="h-8 w-8 text-pista-green" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-pista-green transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-lg text-pista-green/80 font-medium mb-3">
                          {product.subtitle}
                        </p>
                        <p className="text-foreground/70 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Star className="h-4 w-4 text-pista-green mr-2" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.slice(0, 4).map((feature) => (
                            <div key={feature} className="flex items-center text-sm text-foreground/80">
                              <CheckCircle className="h-3 w-3 text-pista-green mr-2 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                        <ul className="space-y-1">
                          {product.keyBenefits.slice(0, 3).map((benefit) => (
                            <li key={benefit} className="text-sm text-foreground/70 flex items-center">
                              <div className="w-1.5 h-1.5 bg-pista-green rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-pista-green">
                          {product.price}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="cyberOutline" size="sm">
                            Learn More
                          </Button>
                          <Button variant="cyber" size="sm" className="group/btn">
                            Request Demo
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-cyber-purple via-dark-charcoal to-cyber-purple">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Security?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Speak with our product experts to find the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Schedule Product Demo
              </Button>
              <Button variant="cyberOutline" size="xl">
                Compare Products
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;