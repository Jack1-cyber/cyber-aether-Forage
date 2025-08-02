import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started with basic security",
      features: [
        "Basic vulnerability scanning",
        "Email support",
        "Monthly security reports",
        "Up to 5 endpoints",
        "Community access"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Advanced security for growing businesses",
      features: [
        "Advanced threat detection",
        "24/7 priority support",
        "Real-time monitoring",
        "Up to 50 endpoints",
        "Custom integrations",
        "Weekly security reports",
        "Penetration testing (quarterly)"
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "cyber" as const
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "Complete cybersecurity solution for enterprises",
      features: [
        "Zero Trust architecture",
        "Dedicated security expert",
        "AI-powered threat analysis",
        "Unlimited endpoints",
        "Custom compliance reports",
        "Daily security briefings",
        "Advanced penetration testing",
        "Emergency incident response"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "cyberOutline" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-dark-matte-purple to-dark-matte-purple-light bg-clip-text text-transparent mb-6">
            Choose Your Security Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Protect your business with our comprehensive cybersecurity solutions. 
            From basic protection to enterprise-grade security.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative transition-all duration-300 hover:shadow-cyber ${
                  plan.popular 
                    ? 'border-dark-matte-purple shadow-glow scale-105' 
                    : 'border-border hover:border-dark-matte-purple/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-dark-matte-purple to-dark-matte-purple-light text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-dark-matte-purple to-dark-matte-purple-light bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-dark-matte-purple flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6">
                    <Button 
                      variant={plan.buttonVariant} 
                      size="lg" 
                      className="w-full"
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyber-purple-light/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-dark-matte-purple to-dark-matte-purple-light bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Can I upgrade anytime?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">What's included in the free plan?</h3>
              <p className="text-muted-foreground">Basic vulnerability scanning, email support, and monthly reports for up to 5 endpoints.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Do you offer custom solutions?</h3>
              <p className="text-muted-foreground">Yes, our Enterprise plan includes custom solutions tailored to your specific needs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Is there a free trial?</h3>
              <p className="text-muted-foreground">We offer a 14-day free trial for our Professional plan with full feature access.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;