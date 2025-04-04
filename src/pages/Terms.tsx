import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-12 md:py-20 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Please read these terms carefully before using our platform.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6 mx-auto"></div>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using <span className="font-semibold"><span style={{ color: 'rgb(29, 216, 200)' }}>Flair</span><span className="text-yellow-400">My</span><span style={{ color: 'rgb(29, 216, 200)' }}>Event</span></span>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Description of Service</h2>
            <p className="text-muted-foreground">
              <span className="font-semibold"><span style={{ color: 'rgb(29, 216, 200)' }}>Flair</span><span className="text-yellow-400">My</span><span style={{ color: 'rgb(29, 216, 200)' }}>Event</span></span> provides a platform connecting event planners with vendors for various event-related services. We do not provide the event services ourselves but facilitate connections between users and service providers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. User Accounts</h2>
            <p className="text-muted-foreground">
              To use certain features of our service, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-8 text-muted-foreground space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the confidentiality of your account information</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
            <p className="text-muted-foreground">
              We reserve the right to terminate accounts that violate our terms or policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. User Content</h2>
            <p className="text-muted-foreground">
              Users may post content including reviews, photos, and comments. By posting content, you:
            </p>
            <ul className="list-disc pl-8 text-muted-foreground space-y-2">
              <li>Grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content</li>
              <li>Represent that you own or have the necessary rights to post such content</li>
              <li>Agree not to post content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable</li>
            </ul>
            <p className="text-muted-foreground">
              We reserve the right to remove any content that violates our terms or policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Service Fees and Payments</h2>
            <p className="text-muted-foreground">
              Some services may require payment. By using paid services, you agree to pay all fees and applicable taxes. Fees are non-refundable unless otherwise stated or required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Vendor Relationships</h2>
            <p className="text-muted-foreground">
              We do not endorse any vendors or guarantee the quality of their services. Any transactions between users and vendors are solely between those parties. We are not responsible for any losses or damages resulting from these interactions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, <span className="font-semibold"><span style={{ color: 'rgb(29, 216, 200)' }}>Flair</span><span className="text-yellow-400">My</span><span style={{ color: 'rgb(29, 216, 200)' }}>Event</span></span> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold harmless <span className="font-semibold"><span style={{ color: 'rgb(29, 216, 200)' }}>Flair</span><span className="text-yellow-400">My</span><span style={{ color: 'rgb(29, 216, 200)' }}>Event</span></span> and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the service or violation of these terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Modifications to Terms</h2>
            <p className="text-muted-foreground">
              We may modify these terms at any time by posting the revised terms on our website. Your continued use of the service after such changes constitutes your acceptance of the new terms.
            </p>
            <p className="text-muted-foreground">
              Last Updated: May 1, 2024
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at:
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

export default Terms; 