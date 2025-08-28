import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold bg-text-gradient bg-clip-text text-transparent">
                Focus Plug
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The most effective website blocker for students and professionals who want to eliminate distractions and boost productivity.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Product Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Product</h3>
            <div className="space-y-3">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#download" className="block text-muted-foreground hover:text-foreground transition-colors">Downloads</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#updates" className="block text-muted-foreground hover:text-foreground transition-colors">What's New</a>
            </div>
          </div>
          
          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-3">
              <a href="#help" className="block text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
              <a href="#community" className="block text-muted-foreground hover:text-foreground transition-colors">Community</a>
              <a href="#status" className="block text-muted-foreground hover:text-foreground transition-colors">System Status</a>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-3">
              <a href="#privacy" className="block text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#terms" className="block text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#security" className="block text-muted-foreground hover:text-foreground transition-colors">Security</a>
              <a href="#cookies" className="block text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Focus Plug. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for productivity enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;