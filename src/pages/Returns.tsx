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
              <h2 className="text-xl font-semibold text-headline mb-3">1. Service Nature</h2>
              <p>
                Our WhatsApp group invitation service is provided free of charge. As this is a complimentary service, traditional return and refund policies do not apply.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">2. Leaving the Group</h2>
              <p>
                You may leave the WhatsApp group at any time by:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Opening the WhatsApp group</li>
                <li>Tapping on the group name</li>
                <li>Scrolling down and selecting "Exit Group"</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">3. Future Paid Services</h2>
              <p>
                Should we introduce paid services in the future, we will provide clear terms for returns and refunds at that time. Any paid services will have their own dedicated return policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">4. Service Issues</h2>
              <p>
                If you experience any issues with our service:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Contact us through our Contact page</li>
                <li>We will work to resolve the issue promptly</li>
                <li>We strive for 100% user satisfaction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">5. Data Removal</h2>
              <p>
                If you wish to have any data associated with your use of our service removed, please contact us and we will process your request in accordance with applicable privacy laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-headline mb-3">6. Contact Information</h2>
              <p>
                For any questions regarding this policy, please reach out through our Contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;