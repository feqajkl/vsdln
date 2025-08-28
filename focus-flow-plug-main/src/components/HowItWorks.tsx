import { Card } from "@/components/ui/card";
import { Play, Settings, BarChart3, Users } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Set Your Goals",
    description: "Choose your focus duration and select which websites and apps to block during your session."
  },
  {
    icon: Play,
    title: "Start Focus Session",
    description: "Hit start and Focus Plug immediately blocks all distracting content across your devices."
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    description: "Monitor your focus streaks, productivity metrics, and see how much time you save daily."
  },
  {
    icon: Users,
    title: "Share Success",
    description: "Compare progress with friends and join focus challenges to stay motivated and accountable."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              How Focus Plug Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and transform your productivity with our simple 4-step process
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group text-center relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              
              <div className="space-y-6">
                <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;