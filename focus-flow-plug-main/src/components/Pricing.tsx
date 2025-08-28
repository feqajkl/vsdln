import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "THE DEALER",
    price: "$4.99",
    period: "per month",
    icon: Crown,
    description: "Monthly supply of pure focus. Cancel anytime (but you won't want to).",
    features: [
      "Unlimited focus hits",
      "Nuclear website blocking",
      "Cross-device addiction control",
      "Real-time withdrawal tracking",
      "Emergency 'break glass' access",
      "Custom session intensity",
      "Dopamine detox analytics",
      "Cold turkey activation",
      "Recovery support line"
    ],
    popular: false
  },
  {
    name: "CLEAN FOR LIFE",
    price: "$84.99",
    period: "one-time hit",
    icon: Rocket,
    description: "The ultimate rehab package. Get clean once, stay clean forever.",
    features: [
      "Everything from The Dealer",
      "Lifetime immunity to distractions",
      "All future upgrades included",
      "VIP rehab dashboard",
      "Group therapy features",
      "Intervention mode for teams",
      "Leaderboard for addicts",
      "Direct line to the source",
      "Lifetime sobriety guarantee"
    ],
    popular: true
  }
];

const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-accent/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-mono">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              CHOOSE YOUR DOSE
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            First hit is free. After that, <span className="text-destructive font-bold">you pay for your recovery.</span>
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center items-stretch">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`flex-1 max-w-sm p-8 bg-card-gradient border-border/50 transition-all duration-300 relative overflow-hidden ${
                plan.popular 
                  ? 'border-primary/50 shadow-accent-glow/50 transform scale-105' 
                  : 'hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-hero-gradient text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                    plan.popular ? 'bg-hero-gradient' : 'bg-accent'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.name === "THE DEALER" ? "START THE PROGRAM" : "GET CLEAN FOR LIFE"}
                </Button>
                
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-center">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono">
            <span className="text-destructive">⚠️ WARNING:</span> 3-day free trial. No credit card required. <span className="text-accent">Addiction to productivity guaranteed.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;