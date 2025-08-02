import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Award,
  TrendingUp,
  Shield,
  Brain,
  Calendar,
  CheckCircle
} from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize cybersecurity through AI innovation"
    },
    {
      year: "2021",
      title: "First AI Product Launch",
      description: "Released our groundbreaking AI-powered threat detection platform"
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Secured $50M in Series A funding to accelerate product development"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Extended operations to Europe and Asia, serving 500+ enterprises"
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Named 'Cybersecurity Innovator of the Year' by leading industry publications"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every decision we make prioritizes the security and privacy of our clients' data"
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible with AI and cybersecurity"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Our success is measured by the security achievements of our clients"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from products to service"
    }
  ];

  const leadership = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former CISO at Fortune 500 company, 15+ years in cybersecurity",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      background: "Former Principal Engineer at leading tech company, AI/ML expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Security Officer",
      background: "PhD in Computer Science, former NSA cybersecurity researcher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "VP of Engineering",
      background: "Former Engineering Director at cybersecurity unicorn, 12+ years experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const certifications = [
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant",
    "GDPR Compliant",
    "CCPA Compliant",
    "NIST Framework Aligned",
    "PCI DSS Certified"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-cyber-purple to-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pista-green to-pista-green-glow bg-clip-text text-transparent float-up">
              About CyberAI Pro
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8 float-up" style={{ animationDelay: '0.2s' }}>
              Leading the future of cybersecurity with cutting-edge AI technology and world-class expertise
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="float-up">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-pista-green mr-4" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  To democratize enterprise-grade cybersecurity by making advanced AI-powered security 
                  solutions accessible to organizations of all sizes. We believe that robust cybersecurity 
                  should not be a privilege reserved for large corporations, but a fundamental right for 
                  every digital business.
                </p>
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-10 w-10 text-pista-green mr-4" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To create a world where cyber threats are anticipated, prevented, and neutralized 
                  before they can cause harm. Through continuous innovation in AI and machine learning, 
                  we envision a future where cybersecurity is proactive, intelligent, and seamlessly integrated 
                  into every aspect of digital business operations.
                </p>
              </div>
              
              <div className="float-up" style={{ animationDelay: '0.2s' }}>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-cyber"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-b from-dark-charcoal to-cyber-purple">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.title}
                    className="text-center p-8 rounded-2xl bg-card border border-white/10 hover:border-pista-green/40 transition-all duration-500 hover:shadow-glow float-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-xl bg-pista-green/20">
                        <IconComponent className="h-10 w-10 text-pista-green" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Leadership Team</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Experienced leaders driving innovation in cybersecurity and AI
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={leader.name}
                  className="group text-center p-6 rounded-2xl bg-card border border-white/10 hover:border-pista-green/40 transition-all duration-500 hover:shadow-glow float-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-pista-green/20 group-hover:border-pista-green/60 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{leader.name}</h3>
                  <p className="text-pista-green font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{leader.background}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gradient-to-b from-dark-charcoal to-cyber-purple">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Journey</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Key milestones in our mission to revolutionize cybersecurity
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-pista-green/30"></div>
              
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    } float-up`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="p-6 rounded-xl bg-card border border-white/10 hover:border-pista-green/40 transition-all duration-300 hover:shadow-glow">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 text-pista-green mr-2" />
                        <span className="text-pista-green font-bold text-lg">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pista-green border-4 border-cyber-purple"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Compliance */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Certifications & Compliance</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Maintaining the highest standards of security and compliance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-center p-6 rounded-xl bg-card border border-white/10 hover:border-pista-green/40 transition-all duration-300 hover:shadow-glow float-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-6 w-6 text-pista-green mr-4" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-cyber-purple via-dark-charcoal to-cyber-purple">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Be part of the team that's shaping the future of cybersecurity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                View Careers
              </Button>
              <Button variant="cyberOutline" size="xl">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;