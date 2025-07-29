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
              <p>
                By using this website, you agree to the following terms:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>This site provides a link to a voluntary WhatsApp group for informational purposes only.</li>
                <li>Joining the WhatsApp group is entirely optional.</li>
                <li>We do not charge any fees or ask for personal information.</li>
                <li>The group may be moderated for appropriate conduct, and users can be removed for spamming or violating group guidelines.</li>
              </ul>
            </section>

            <section>
              <p>
                We reserve the right to update these terms at any time without prior notice.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;