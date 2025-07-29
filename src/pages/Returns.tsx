import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Returns = () => {
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
          <h1 className="text-3xl font-bold text-headline mb-4">Return & Refund Policy</h1>
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-subheadline mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6">
            <section>
              <p>
                This site does not offer any products or services that involve payment. Therefore, no returns or refunds apply.
              </p>
            </section>

            <section>
              <p>
                If you believe you have encountered an issue or misleading link, please reach out to our contact details provided below.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;