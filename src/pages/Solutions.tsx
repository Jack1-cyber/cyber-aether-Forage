import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Cloud, 
  Brain,
  ArrowRight,
  CheckCircle,
  Zap,
  Lock,
  Eye
} from "lucide-react";

const Solutions = () => {
  const cybersecuritySolutions = [
    {
      title: "Vulnerability Assessment & Penetration Testing",
      description: "Comprehensive security testing to identify and address vulnerabilities before they can be exploited",
      features: ["Network Security Testing", "Application Security", "Social Engineering Tests", "Compliance Reporting"]
    },
    {
      title: "Endpoint Detection & Response (EDR/XDR)",
      description: "Advanced endpoint protection with real-time threat detection and automated response capabilities",
      features: ["Behavioral Analysis", "Automated Containment", "Forensic Investigation", "Threat Intelligence"]
    },
    {
      title: "Zero Trust Security",
      description: "Never trust, always verify security architecture for modern distributed environments",
      features: ["Identity Verification", "Device Authentication", "Network Segmentation", "Continuous Monitoring"]
    },
    {
      title: "Firewall Security",
      description: "Next-generation firewall solutions with advanced threat prevention and application control",
      features: ["Intrusion Prevention", "Application Control", "URL Filtering", "SSL Inspection"]
    }
  ];

  const cloudSolutions = [
    {
      title: "Cloud Solutions Architecture",
      description: "Design and implement scalable, secure cloud infrastructure tailored to your business needs",
      features: ["Multi-Cloud Strategy", "Hybrid Architecture", "Performance Optimization", "Cost Management"]
    },
    {
      title: "Cloud Security Implementation",
      description: "Comprehensive security measures for cloud environments with continuous compliance monitoring",
      features: ["Data Encryption", "Access Management", "Security Monitoring", "Compliance Automation"]
    },
    {
      title: "Migration Services",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum security",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Post-Migration Support"]
    },
    {
      title: "Partner Services Integration",
      description: "Collaborative solutions with leading cloud providers and security vendors",
      features: ["AWS Partnership", "Azure Integration", "Google Cloud", "Third-party Integrations"]
    }
  ];

  const aiServices = [
    {
      title: "AI Workflow Automations",
      description: "Intelligent automation solutions to streamline business processes and reduce manual tasks",
      features: ["Process Intelligence", "Automated Decision Making", "Predictive Analytics", "Workflow Optimization"]
    },
    {
      title: "General Workflow Automations",
      description: "Comprehensive automation solutions for various business operations and processes",
      features: ["Document Processing", "Data Integration", "Task Automation", "Reporting Automation"]
    },
    {
      title: "AI-integrated Cyber & Cloud Services",
      description: "Advanced AI-powered security and cloud management solutions",
      features: ["Threat Prediction", "Anomaly Detection", "Auto-scaling", "Intelligent Monitoring"]
    },
    {
      title: "Intelligent Threat Detection",
      description: "AI-powered threat detection and response systems for proactive security",
      features: ["Machine Learning Models", "Behavioral Analytics", "Real-time Detection", "Automated Response"]
    }
  ];

  const SolutionCategory = ({ title, icon: Icon, solutions, gradient }: any) => (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className={`p-4 rounded-xl bg-gradient-to-br ${gradient} mr-6`}>
          <Icon className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {solutions.map((solution: any, index: number) => (
          <div
            key={solution.title}
            className="group p-8 rounded-2xl bg-card border border-white/10 hover:border-pista-green/40 transition-all duration-500 hover:shadow-glow float-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-pista-green transition-colors duration-300">
              {solution.title}
            </h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              {solution.description}
            </p>
            <ul className="space-y-2 mb-6">
              {solution.features.map((feature: string) => (
                <li key={feature} className="flex items-center text-sm text-foreground/80">
                  <CheckCircle className="h-4 w-4 text-pista-green mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="cyberOutline" className="group/btn">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-cyber-purple to-dark-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pista-green to-pista-green-glow bg-clip-text text-transparent float-up">
              Solutions & Products
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8 float-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive cybersecurity and AI solutions designed to protect, automate, and optimize your digital infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center float-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="xl">
                Get Started Today
              </Button>
              <Button variant="cyberOutline" size="xl">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SolutionCategory
              title="Cybersecurity Solutions"
              icon={Shield}
              solutions={cybersecuritySolutions}
              gradient="from-red-500 to-pink-500"
            />
            
            <SolutionCategory
              title="Cloud Services"
              icon={Cloud}
              solutions={cloudSolutions}
              gradient="from-blue-500 to-cyan-500"
            />
            
            <SolutionCategory
              title="AI Services"
              icon={Brain}
              solutions={aiServices}
              gradient="from-purple-500 to-indigo-500"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-cyber-purple via-dark-charcoal to-cyber-purple">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Let our experts help you choose the right solutions for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Contact Our Experts
              </Button>
              <Button variant="cyberOutline" size="xl">
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;