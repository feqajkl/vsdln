import { Card } from "@/components/ui/card";
import { Shield, Clock, Target, BarChart, Zap, Brain } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "COMPLETE DIGITAL LOCKDOWN",
    description: "Nuclear-grade website blocking. When we say blocked, we mean BLOCKED. No escape routes, no loopholes.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Brain,
    title: "REWIRE YOUR DOPAMINE",
    description: "Break the addiction cycle. Train your brain to crave productivity instead of endless scrolling.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Target,
    title: "LASER FOCUS SESSIONS",
    description: "25-minute pure focus hits. No distractions. No excuses. Just you and your work in perfect harmony.",
    gradient: "from-primary to-destructive"
  },
  {
    icon: Zap,
    title: "INSTANT WITHDRAWAL",
    description: "Feel the urge to check social media? Good. That's your brain detoxing from digital poison.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Clock,
    title: "COLD TURKEY MODE",
    description: "For the hardcore addicts. Complete internet shutdown except work sites. No mercy, no exceptions.",
    gradient: "from-destructive to-primary"
  },
  {
    icon: BarChart,
    title: "BRUTAL ANALYTICS",
    description: "See exactly how much time you waste. The truth hurts, but it's the first step to recovery.",
    gradient: "from-primary to-accent"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-accent/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-mono">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              THE DETOX PROGRAM
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six stages of digital rehabilitation. <span className="text-accent font-bold">Choose your poison antidote.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-accent-glow/50"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-accent-glow`}>
                  <feature.icon className="h-8 w-8 text-black font-bold" />
                </div>
                
                <h3 className="text-xl font-black mb-4 text-foreground font-mono tracking-wide">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;