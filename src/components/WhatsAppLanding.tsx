
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
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-12 h-12 text-white"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
                <path d="M9 10a3 3 0 0 1 6 0c0 2-3 3-3 3"/>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">
              Not affiliated with or endorsed by WhatsApp Inc.
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-headline mb-6 leading-tight">
            Join Our Exclusive WhatsApp Group!
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-subheadline mb-10 leading-relaxed max-w-lg mx-auto">
            Get real-time updates, news, and exclusive offers via WhatsApp – directly from us.
          </p>

          {/* Join Button */}
          <div className="mb-12">
            <Button 
              variant="default" 
              size="lg" 
              onClick={handleJoinGroup}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full mb-4 transition-colors duration-200"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5 mr-2"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
              </svg>
              Join WhatsApp Group
            </Button>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              By clicking, you agree to receive messages via WhatsApp. You can leave the group anytime.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6">
            <a 
              href="terms.html" 
              className="hover:text-primary transition-colors duration-200"
            >
              Terms & Conditions
            </a>
            <a 
              href="privacy.html" 
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="returns.html" 
              className="hover:text-primary transition-colors duration-200"
            >
              Return & Refund Policy
            </a>
            <a 
              href="contact.html" 
              className="hover:text-primary transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>© 2025 Midasbuy Connect. All rights reserved.</p>
            <p>This is an independent service and is not affiliated with WhatsApp Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhatsAppLanding;
