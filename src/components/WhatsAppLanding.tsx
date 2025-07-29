import { Button } from "@/components/ui/button";
import messagingIcon from "@/assets/messaging-icon.png";

const WhatsAppLanding = () => {
  const handleJoinGroup = () => {
    window.open("https://chat.whatsapp.com/BkbSqbYehbJ7LeHsze7Y0o?mode=ac_t", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src={messagingIcon} 
              alt="Messaging Group" 
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-contain"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Not affiliated with or endorsed by WhatsApp Inc.
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-4 leading-tight">
            Join Our Exclusive WhatsApp Group!
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-subheadline mb-8 leading-relaxed">
            Get real-time updates, news, and exclusive offers via WhatsApp — directly from us.
          </p>

          {/* Join Button */}
          <div className="mb-8">
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={handleJoinGroup}
              className="mb-3"
            >
              Join WhatsApp Group
            </Button>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              By clicking, you agree to receive messages via WhatsApp. You can leave the group anytime.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-footer-text mb-4">
            <a 
              href="/terms" 
              className="hover:text-primary transition-colors duration-200"
            >
              Terms & Conditions
            </a>
            <a 
              href="/privacy" 
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="/returns" 
              className="hover:text-primary transition-colors duration-200"
            >
              Return & Refund Policy
            </a>
            <a 
              href="/contact" 
              className="hover:text-primary transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>© 2024 WhatsApp Group Connect. All rights reserved.</p>
            <p>This is an independent service and is not affiliated with WhatsApp Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhatsAppLanding;