import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "Focus Plug has been a game-changer for my study sessions. I used to waste hours on social media, but now I can actually focus for the full 25 minutes. My grades have improved significantly!"
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Developer",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "As a developer, I'm constantly tempted to check Reddit or Twitter. Focus Plug blocks all that noise and helps me enter deep work states. I'm shipping features faster than ever."
  },
  {
    name: "Emily Watson",
    role: "PhD Researcher",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "The cross-device sync is incredible. I start a focus session on my laptop and my phone automatically blocks distracting apps. It's like having a personal productivity assistant."
  },
  {
    name: "David Kim",
    role: "Digital Marketing Manager",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "The analytics feature is amazing. Seeing how much time I save daily by avoiding distractions motivates me to keep using Focus Plug. It's addictive in the best way possible."
  },
  {
    name: "Lisa Thompson",
    role: "Medical Student",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "Medical school requires intense focus. Focus Plug helps me power through long study sessions without getting distracted. The Break Glass feature is perfect for emergencies."
  },
  {
    name: "Alex Johnson",
    role: "Freelance Writer",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    content: "I've tried other website blockers, but they were easy to bypass. Focus Plug's system-level blocking actually works. My writing productivity has doubled since I started using it."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-accent/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Loved by Students & Professionals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands who have transformed their focus and productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-hero-gradient text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;