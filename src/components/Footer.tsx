import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Cybersecurity", href: "/solutions/cybersecurity" },
        { name: "Cloud Services", href: "/solutions/cloud" },
        { name: "AI Services", href: "/solutions/ai" },
        { name: "Managed Services", href: "/solutions/managed" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Product X", href: "/products/x" },
        { name: "Product Y", href: "/products/y" },
        { name: "Product Z", href: "/products/z" },
        { name: "Product A", href: "/products/a" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Who We Serve", href: "/who-we-serve" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Support", href: "/support" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-charcoal to-cyber-purple border-t border-pista-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-pista-green to-pista-green-glow rounded-lg">
                <Shield className="h-6 w-6 text-cyber-purple" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pista-green to-pista-green-glow bg-clip-text text-transparent">
                CyberAI Pro
              </span>
            </Link>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Leading the future of cybersecurity with AI-powered solutions. 
              Protecting enterprises worldwide with cutting-edge technology and expert services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-foreground/60">
                <Mail className="h-4 w-4 text-pista-green" />
                <span>contact@cyberaiepro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/60">
                <Phone className="h-4 w-4 text-pista-green" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/60">
                <MapPin className="h-4 w-4 text-pista-green" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-medium-charcoal border border-pista-green/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-pista-green/40 focus:ring-1 focus:ring-pista-green/40"
                />
                <Button variant="cyber" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-foreground/60 hover:text-pista-green transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pista-green/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-foreground/60 text-sm">
              © 2024 CyberAI Pro. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-medium-charcoal hover:bg-pista-green/20 text-foreground/60 hover:text-pista-green transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;