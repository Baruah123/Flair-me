import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Search, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left font-medium flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-muted/30">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Help = () => {
  const faqItems = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the top-right corner of the homepage. Fill in your details, including your name, email address, and create a password. Click 'Create Account' to finish the process."
    },
    {
      question: "How do I find vendors for my event?",
      answer: "You can find vendors by browsing our categories page, using the search function, or filtering by location and service type. Each vendor has a profile with details, photos, and reviews to help you make an informed decision."
    },
    {
      question: "How does the booking process work?",
      answer: "Once you've found a vendor you like, you can request a quote directly through our platform. The vendor will respond with availability and pricing. You can then communicate, negotiate, and finalize the booking through our secure messaging system."
    },
    {
      question: "Can I leave reviews for vendors?",
      answer: "Yes, after your event, you'll receive a prompt to review the vendor. Your honest feedback helps other users and improves the quality of service on our platform."
    },
    {
      question: "How do I become a vendor on the platform?",
      answer: "To join as a vendor, click on 'Apply as Flair-my-event Pro' at the bottom of the page. Complete the application form with details about your services, upload a portfolio, and our team will review your application."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept major credit cards, debit cards, and digital payment methods like PayPal. All transactions are processed securely through our trusted payment gateway."
    },
    {
      question: "How do I cancel or reschedule a booking?",
      answer: "To cancel or reschedule, go to your bookings in your account dashboard and select the booking you want to modify. Follow the prompts to cancel or suggest a new date. Note that cancellation policies vary by vendor."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security seriously. We use industry-standard encryption and security measures to protect your personal information. You can review our Privacy Policy for more details."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 bg-muted/30 relative">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Center</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Find answers to common questions or contact our support team for assistance.
              </p>
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Search for answers..." 
                  className="pl-10 py-6"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-8">
                Our support team is ready to assist you with any questions or concerns.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="p-6 bg-background rounded-xl shadow-sm flex flex-col items-center">
                  <Mail className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">Get a response within 24 hours</p>
                  <a href="mailto:Reeshab@flairmyevent.com" className="text-primary hover:underline">
                    Reeshab@flairmyevent.com
                  </a>
                </div>
                <div className="p-6 bg-background rounded-xl shadow-sm flex flex-col items-center">
                  <Phone className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">Available Mon-Fri, 9am-6pm</p>
                  <a href="tel:+918851794490" className="text-primary hover:underline">
                    +91 8851794490
                  </a>
                </div>
                <div className="p-6 bg-background rounded-xl shadow-sm flex flex-col items-center">
                  <MessageCircle className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-4">Instant support from our team</p>
                  <Button variant="outline" size="sm">
                    Start Chat
                  </Button>
                </div>
              </div>
              <div className="mt-10 text-center">
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium">Visit us:</span><br />
                  Office Number 2201, 20th Floor,<br />
                  Galaxy Blue Sapphire,<br />
                  Greater Noida West - 201306
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Help; 