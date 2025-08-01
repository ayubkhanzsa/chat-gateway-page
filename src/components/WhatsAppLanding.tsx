
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
            <div className="w-24 h-24 mx-auto mb-4 animate-fade-in">
              <img 
                src="/lovable-uploads/73134178-5fd9-4f39-b0c9-9fcfbaa664e7.png" 
                alt="Chat Bubbles"
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
              />
            </div>
            <p className="text-xs text-muted-foreground font-medium animate-fade-in">
              Not affiliated with or endorsed by WhatsApp Inc.
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-6 leading-tight">
            Join Our Exclusive WhatsApp Group
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-subheadline mb-10 leading-relaxed max-w-lg mx-auto">
            Get real-time updates, news, and exclusive offers via WhatsApp – directly from us.
          </p>

          {/* Join Button */}
          <div className="mb-12 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 mb-6 max-w-md mx-auto hover-scale animate-scale-in">
              <Button 
                variant="default" 
                size="lg" 
                onClick={handleJoinGroup}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 sm:py-4 text-lg sm:text-xl font-semibold rounded-2xl mb-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6 mr-3"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.685"/>
                </svg>
                Join WhatsApp Group
              </Button>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                By clicking, you agree to receive messages via WhatsApp. You can leave the group anytime.
              </p>
            </div>
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
