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
              <p>
                We value your privacy. This website does not collect, store, or sell any personal data. When you click the "Join WhatsApp Group" button, you are redirected to WhatsApp voluntarily and independently. We do not retain your phone number or any identifiable information.
              </p>
            </section>

            <section>
              <p>
                We do not use cookies, tracking pixels, or third-party advertising scripts on this site.
              </p>
            </section>

            <section>
              <p>
                Your interaction with this page is anonymous and limited to the content displayed here.
              </p>
            </section>

            <section>
              <p>
                If you have any concerns about your data or privacy, feel free to contact us.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;