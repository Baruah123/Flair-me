import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-12 md:py-20 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6 mx-auto"></div>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, phone number, and other contact information.
            </p>
            <p className="text-muted-foreground">
              We also automatically collect certain information when you use our services, including:
            </p>
            <ul className="list-disc pl-8 text-muted-foreground space-y-2">
              <li>Log information (IP address, browser type, pages viewed)</li>
              <li>Device information (hardware model, operating system)</li>
              <li>Location information (with your permission)</li>
              <li>Cookie and tracking technologies</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-8 text-muted-foreground space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Monitor and analyze trends and usage patterns</li>
              <li>Personalize and improve your experience</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal data. We may share your information with:
            </p>
            <ul className="list-disc pl-8 text-muted-foreground space-y-2">
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners, with your consent</li>
              <li>Legal authorities when required by law</li>
              <li>In connection with a business transfer or transaction</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include internal reviews of our data collection, storage, and processing practices and security measures.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Your Rights</h2>
            <p className="text-muted-foreground">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-8 text-muted-foreground space-y-2">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-muted-foreground">
              Last Updated: May 1, 2024
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold"><span style={{ color: 'rgb(29, 216, 200)' }}>Flair</span><span className="text-yellow-400">My</span><span style={{ color: 'rgb(29, 216, 200)' }}>Event</span></span><br />
              Email: Reeshab@flairmyevent.com<br />
              Phone: +91 8851794490<br />
              Address: Office Number 2201, 20th Floor, Galaxy Blue Sapphire, Greater Noida West - 201306
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy; 