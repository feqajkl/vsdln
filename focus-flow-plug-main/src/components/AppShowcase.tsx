import laptopMockup from "@/assets/laptop-mockup.jpg";

const AppShowcase = () => {
  return (
    <section className="py-20 px-6 bg-accent/10">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-block">
              <span className="bg-hero-gradient text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Desktop & Mobile
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Keep your focus by blocking apps and websites that distract you
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Focus Plug blocks distracting apps and websites that you chose while on 
              focus. It'll restore them when the session has ended.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Website blocker works on Safari, Chrome, Brave, and Microsoft Edge</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">App blocking available on macOS and Windows</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Cross-device synchronization keeps you focused everywhere</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src={laptopMockup} 
                alt="Focus Plug app interface on laptop showing active focus session" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10 rounded-lg"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;