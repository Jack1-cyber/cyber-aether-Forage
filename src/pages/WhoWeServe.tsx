import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Heart,
  Landmark,
  GraduationCap,
  Factory,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield
} from "lucide-react";

const WhoWeServe = () => {
  const industries = [
    {
      name: "Financial Services",
      icon: Building2,
      description: "Protecting financial institutions with regulatory-compliant security solutions and real-time fraud detection.",
      challenges: [
        "Regulatory compliance (PCI DSS, SOX)",
        "Advanced persistent threats",
        "Real-time fraud detection",
        "Customer data protection"
      ],
      solutions: [
        "Zero Trust Banking Security",
        "AI-powered fraud detection",
        "Compliance automation",
        "Secure payment processing"
      ],
      caseStudy: "Reduced fraud by 95% for a major regional bank",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      clientSize: "From community banks to global financial institutions",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      name: "Healthcare",
      icon: Heart,
      description: "Ensuring HIPAA compliance and protecting sensitive patient data with specialized healthcare security solutions.",
      challenges: [
        "HIPAA compliance requirements",
        "Protected health information (PHI)",
        "Medical device security",
        "Ransomware threats"
      ],
      solutions: [
        "HIPAA-compliant cloud security",
        "Medical device protection",
        "Patient data encryption",
        "Incident response for healthcare"
      ],
      caseStudy: "Secured 50+ healthcare facilities with zero data breaches",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      clientSize: "From private practices to hospital networks",
      gradient: "from-green-500/20 to-emerald-600/20"
    },
    {
      name: "Government",
      icon: Landmark,
      description: "Delivering security solutions that meet the stringent requirements of government agencies and public sector organizations.",
      challenges: [
        "National security requirements",
        "Citizen data protection",
        "Legacy system integration",
        "Compliance with government standards"
      ],
      solutions: [
        "FedRAMP authorized solutions",
        "Government cloud security",
        "Critical infrastructure protection",
        "Secure communications"
      ],
      caseStudy: "Secured critical infrastructure for multiple state agencies",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop",
      clientSize: "Local governments to federal agencies",
      gradient: "from-red-500/20 to-red-600/20"
    },
    {
      name: "Education",
      icon: GraduationCap,
      description: "Protecting educational institutions and student data while enabling secure remote learning environments.",
      challenges: [
        "Student data privacy (FERPA)",
        "Remote learning security",
        "Research data protection",
        "Budget constraints"
      ],
      solutions: [
        "Secure learning platforms",
        "Student data protection",
        "Research environment security",
        "Cost-effective solutions"
      ],
      caseStudy: "Enabled secure remote learning for 100,000+ students",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
      clientSize: "K-12 schools to major universities",
      gradient: "from-purple-500/20 to-indigo-600/20"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Securing industrial control systems and protecting intellectual property in manufacturing environments.",
      challenges: [
        "Industrial IoT security",
        "Intellectual property protection",
        "Supply chain security",
        "Operational technology (OT) security"
      ],
      solutions: [
        "ICS/SCADA security",
        "IoT device protection",
        "Supply chain monitoring",
        "OT/IT convergence security"
      ],
      caseStudy: "Protected critical manufacturing processes with 99.9% uptime",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      clientSize: "From specialized manufacturers to global corporations",
      gradient: "from-orange-500/20 to-amber-600/20"
    },
    {
      name: "Small & Medium Businesses",
      icon: Users,
      description: "Providing enterprise-grade security solutions tailored for SMBs with simplified management and cost-effective pricing.",
      challenges: [
        "Limited IT resources",
        "Budget constraints",
        "Growing cyber threats",
        "Compliance requirements"
      ],
      solutions: [
        "Managed security services",
        "Cloud-first security",
        "Automated threat detection",
        "Affordable pricing models"
      ],
      caseStudy: "Helped 500+ SMBs achieve enterprise-level security",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      clientSize: "Startups to mid-market companies",
      gradient: "from-teal-500/20 to-cyan-600/20"
    }
  ];

  const stats = [
    { number: "1000+", label: "Organizations Protected" },
    { number: "50M+", label: "Endpoints Secured" },
    { number: "99.9%", label: "Uptime Achieved" },
    { number: "24/7", label: "Security Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-cyber-purple to-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pista-green to-pista-green-glow bg-clip-text text-transparent float-up">
              Who We Serve
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8 float-up" style={{ animationDelay: '0.2s' }}>
              Tailored cybersecurity solutions for diverse industries and organizations of all sizes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center float-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="xl">
                Find Your Solution
              </Button>
              <Button variant="cyberOutline" size="xl">
                Request Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-dark-charcoal via-cyber-purple to-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={stat.label} className="float-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-pista-green pulse-glow mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Industries We Protect</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Specialized security solutions designed for the unique challenges of your industry
              </p>
            </div>

            <div className="space-y-16">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={industry.name}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={`float-up ${!isEven ? 'lg:col-start-2' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-center mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${industry.gradient} mr-4`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground">{industry.name}</h3>
                      </div>
                      
                      <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                        {industry.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <Shield className="h-4 w-4 text-pista-green mr-2" />
                            Key Challenges
                          </h4>
                          <ul className="space-y-2">
                            {industry.challenges.map((challenge) => (
                              <li key={challenge} className="text-sm text-foreground/80 flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <CheckCircle className="h-4 w-4 text-pista-green mr-2" />
                            Our Solutions
                          </h4>
                          <ul className="space-y-2">
                            {industry.solutions.map((solution) => (
                              <li key={solution} className="text-sm text-foreground/80 flex items-start">
                                <div className="w-1.5 h-1.5 bg-pista-green rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-card p-6 rounded-xl border border-white/10 mb-6">
                        <div className="flex items-center mb-3">
                          <TrendingUp className="h-5 w-5 text-pista-green mr-2" />
                          <span className="font-semibold text-foreground">Success Story</span>
                        </div>
                        <p className="text-foreground/70 mb-3">{industry.caseStudy}</p>
                        <p className="text-sm text-foreground/60">
                          <strong>Client Size:</strong> {industry.clientSize}
                        </p>
                      </div>
                      
                      <Button variant="cyberOutline" className="group">
                        Learn More About {industry.name} Solutions
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                    
                    {/* Image */}
                    <div className={`float-up ${!isEven ? 'lg:col-start-1' : ''}`} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={industry.image}
                          alt={industry.name}
                          className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} opacity-60`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Organization Size Section */}
        <section className="py-20 bg-gradient-to-b from-dark-charcoal to-cyber-purple">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Solutions for Every Size</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                From startups to enterprise organizations, we have the right security solution for you
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Small Business",
                  size: "1-50 employees",
                  features: ["Managed security services", "Cloud-first approach", "Affordable pricing", "Easy deployment"],
                  price: "Starting at $99/month"
                },
                {
                  title: "Mid-Market",
                  size: "50-1000 employees",
                  features: ["Hybrid security solutions", "Compliance support", "Dedicated support", "Custom integrations"],
                  price: "Starting at $999/month"
                },
                {
                  title: "Enterprise",
                  size: "1000+ employees",
                  features: ["Custom solutions", "24/7 SOC services", "Advanced analytics", "White-glove support"],
                  price: "Custom pricing"
                }
              ].map((tier, index) => (
                <div
                  key={tier.title}
                  className="p-8 rounded-2xl bg-card border border-white/10 hover:border-pista-green/40 transition-all duration-500 hover:shadow-glow text-center float-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.title}</h3>
                  <p className="text-pista-green font-medium mb-6">{tier.size}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center text-foreground/80">
                        <CheckCircle className="h-4 w-4 text-pista-green mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-bold text-pista-green mb-6">{tier.price}</div>
                  <Button variant="cyber" className="w-full">
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-cyber-purple via-dark-charcoal to-cyber-purple">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Secure Your Industry?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Speak with our industry experts to discover the perfect security solution for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Schedule Industry Consultation
              </Button>
              <Button variant="cyberOutline" size="xl">
                Download Industry Brief
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoWeServe;