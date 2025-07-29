import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          <h1 className="text-3xl font-bold text-headline mb-4">Contact Us</h1>
          <p className="text-subheadline">
            Have questions or need support? We're here to help!
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <p className="text-lg mb-6">
              If you have any questions, suggestions, or concerns, please feel free to reach out to us via the phone numbers below:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <span className="text-2xl">🇫🇷</span>
                <div>
                  <p className="font-semibold">France</p>
                  <p className="text-primary">+33 7 56 75 73 42</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <span className="text-2xl">🇬🇧</span>
                <div>
                  <p className="font-semibold">United Kingdom</p>
                  <p className="text-primary">+44 7476 966269</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <span className="text-2xl">🇵🇰</span>
                <div>
                  <p className="font-semibold">Pakistan</p>
                  <p className="text-primary">+92 310 1040700</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-6 border-t">
            <p className="text-muted-foreground mb-4">
              You may also reach us through our WhatsApp group link for faster support.
            </p>
            <Button variant="whatsapp" asChild>
              <a 
                href="https://chat.whatsapp.com/BkbSqbYehbJ7LeHsze7Y0o?mode=ac_t" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contact via WhatsApp Group
              </a>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;