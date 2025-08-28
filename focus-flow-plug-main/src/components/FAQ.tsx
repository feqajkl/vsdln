import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Focus Plug block websites differently from other apps?",
    answer: "Focus Plug uses advanced system-level blocking that prevents easy bypassing. Unlike browser extensions, our app blocks at the network level and includes smart detection to catch redirect attempts and new distracting sites automatically."
  },
  {
    question: "Can I customize which websites get blocked?",
    answer: "Absolutely! Focus Plug comes with intelligent presets for common distracting sites, but you can create custom block lists, add specific URLs, and even use keyword-based blocking to catch related sites automatically."
  },
  {
    question: "What happens if I really need to access a blocked site during a session?",
    answer: "We understand emergencies happen. Focus Plug includes a 'Break Glass' feature that requires a 60-second cool-down period and a written justification, helping you think twice while still allowing access when truly necessary."
  },
  {
    question: "Does Focus Plug work across all my devices?",
    answer: "Yes! Focus Plug syncs across all your devices. Start a session on your laptop, and your phone and tablet will automatically apply the same blocking rules. Your focus travels with you wherever you work."
  },
  {
    question: "Is my browsing data private and secure?",
    answer: "Your privacy is our priority. Focus Plug only monitors URLs to determine blocking - we never store your browsing content or personal data. All blocking happens locally on your device, and sync data is encrypted end-to-end."
  },
  {
    question: "Can I track my productivity improvements?",
    answer: "Focus Plug includes detailed analytics showing your focus streaks, time saved from distractions, and productivity trends over time. See exactly how much more focused you've become with visual reports and insights."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Focus Plug
          </p>
        </div>
        
        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card-gradient border border-border/50 rounded-lg px-6 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;