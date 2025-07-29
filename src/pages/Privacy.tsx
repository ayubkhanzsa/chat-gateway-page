import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <a href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Button>
          <h1 className="text-3xl font-bold text-headline mb-4">Privacy Policy</h1>
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-subheadline mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6">
            <div className="bg-muted/50 p-4 rounded-lg border">
              <p className="font-medium text-primary mb-2">Important Notice:</p>
              <p className="text-sm">
                We do not collect or store any personal data. Joining our WhatsApp group is 100% voluntary, and all communication is limited to WhatsApp only.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">1. Information We Collect</h2>
              <p>
                We collect minimal information when you use our WhatsApp group invitation service:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Basic usage analytics (anonymous)</li>
                <li>Information you voluntarily provide when contacting us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">2. How We Use Information</h2>
              <p>
                Any information we collect is used to:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Improve our service</li>
                <li>Respond to your inquiries</li>
                <li>Ensure service security and integrity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">3. WhatsApp Privacy</h2>
              <p>
                When you join our WhatsApp group, your participation is governed by WhatsApp's Privacy Policy. We do not have access to your WhatsApp account information or personal messages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">5. Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our Contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;