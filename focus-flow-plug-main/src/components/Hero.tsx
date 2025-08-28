import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      
      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="bg-text-gradient bg-clip-text text-transparent font-mono">
              YOUR BRAIN IS
            </span>
            <br />
            <span className="text-accent font-mono animate-pulse">
              ADDICTED
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Dopamine hits from endless scrolling got you hooked? <br />
            <span className="text-primary font-bold">We've got the cure.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 font-bold shadow-accent-glow">
              GET CLEAN NOW
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold">
              3 FREE HITS
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground font-mono">
            <span className="text-destructive animate-pulse">WARNING:</span> Side effects may include productivity, focus, and getting your life back.
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;