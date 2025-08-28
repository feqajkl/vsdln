import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Monitor, Smartphone, QrCode } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Download Focus Plug
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Available on all your devices. Start focusing today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Desktop Downloads */}
          <Card className="p-8 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Monitor className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Desktop</h3>
              </div>
              
              <p className="text-muted-foreground">
                Full-featured desktop application with advanced blocking capabilities
              </p>
              
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Also available on</p>
                <div className="space-y-3">
                  <Button 
                    variant="hero" 
                    className="w-full justify-start group-hover:shadow-accent-glow transition-all duration-300"
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download for Windows
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-border/50"
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download for macOS
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-border/50"
                  >
                    <Download className="mr-3 h-5 w-5" />
                    Download for Linux
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Mobile Downloads */}
          <Card className="p-8 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Smartphone className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Mobile & Tablet</h3>
              </div>
              
              <p className="text-muted-foreground">
                Block distracting apps and websites on your mobile devices
              </p>
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">or scan the QR code</p>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-3 flex-1">
                    <Button 
                      variant="hero" 
                      className="w-full justify-start group-hover:shadow-accent-glow transition-all duration-300"
                    >
                      <Download className="mr-3 h-5 w-5" />
                      Download on App Store
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-border/50"
                    >
                      <Download className="mr-3 h-5 w-5" />
                      Get it on Google Play
                    </Button>
                  </div>
                  
                  <div className="ml-6 p-4 bg-accent rounded-lg">
                    <QrCode className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;