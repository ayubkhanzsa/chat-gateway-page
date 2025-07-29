import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
          <h1 className="text-3xl font-bold text-headline mb-4">Terms & Conditions</h1>
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-subheadline mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this WhatsApp group invitation service, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily access this service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">3. WhatsApp Group Participation</h2>
              <p>
                By joining our WhatsApp group, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Maintain respectful communication</li>
                <li>Not share inappropriate content</li>
                <li>Respect other members' privacy</li>
                <li>Follow WhatsApp's terms of service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">4. Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">5. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us through our Contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;