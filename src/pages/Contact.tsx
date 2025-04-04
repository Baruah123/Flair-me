import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, ArrowRight, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally send the data to your backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Get in Touch</h1>
              <p className="text-muted-foreground text-lg">
                Have questions or want to work with us? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Contact Form */}
              <div className="bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-muted p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-muted p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help with any questions you may have. Reach out to us using the contact details below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-muted-foreground mt-1">Reeshab@flairmyevent.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-muted-foreground mt-1">8851794490</p>
                      <p className="text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="text-muted-foreground mt-1">
                        Galaxy Blue Sapphire Plaza<br />
                        Greater Noida, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link to="/help">
                    <Button variant="outline" className="w-full">
                      View Our FAQ
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Find Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Located in the heart of Greater Noida at Galaxy Blue Sapphire Plaza, our office is easily accessible and ready to welcome you.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-muted p-6 md:col-span-1 flex flex-col gap-4">
                <div className="bg-primary/10 p-4 rounded-xl mb-2 inline-flex">
                  <Navigation className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Our Office</h3>
                <p className="text-muted-foreground">
                  Galaxy Blue Sapphire Plaza,<br />
                  Greater Noida,<br />
                  Uttar Pradesh, India
                </p>
                <div className="border-t border-border mt-2 pt-4">
                  <Button variant="outline" size="sm" className="w-full" onClick={() => window.open('https://maps.google.com/?q=Galaxy+Blue+Sapphire+Plaza', '_blank')}>
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="md:col-span-2 overflow-hidden rounded-xl shadow-lg border border-muted bg-background/80 backdrop-blur-sm h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56063.94325676019!2d77.40079344427078!3d28.56986921017361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557777b7b45%3A0x69870f8fa7e1f92e!2sGalaxy%20Blue%20Sapphire%20Plaza!5e0!3m2!1sen!2sin!4v1743709824386!5m2!1sen!2sin" 
                  className="w-full h-full border-0" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Galaxy Blue Sapphire Plaza Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
