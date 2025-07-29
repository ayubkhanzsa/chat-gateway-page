import { Button } from "@/components/ui/button";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const WhatsAppLanding = () => {
  const handleJoinGroup = () => {
    window.open("https://chat.whatsapp.com/BkbSqbYehbJ7LeHsze7Y0o?mode=ac_t", "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={whatsappLogo} 
              alt="WhatsApp" 
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-contain"
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-4 leading-tight">
            Join Our Exclusive WhatsApp Group!
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-subheadline mb-8 leading-relaxed">
            Stay updated with the latest news, offers, and insights — directly on WhatsApp.
          </p>

          {/* Join Button */}
          <Button 
            variant="whatsapp" 
            size="xl" 
            onClick={handleJoinGroup}
            className="mb-4"
          >
            Join WhatsApp Group
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-footer-text">
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
        </div>
      </footer>
    </div>
  );
};

export default WhatsAppLanding;