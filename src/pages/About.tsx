
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, Calendar, Flame, User, Users } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-2">
                <div className="bg-background rounded-full px-4 py-1.5 text-sm font-medium">
                  Making events extraordinary
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">EventGo</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Connecting event planners with the perfect vendors to create unforgettable experiences.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
                  <Calendar className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">Our Story</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  EventGo was born from a simple idea: planning events should be exciting, not exhausting.
                  Our founders experienced firsthand the challenges of finding reliable, quality vendors for their events.
                </p>
                <p className="text-muted-foreground mb-6 text-lg">
                  After countless hours spent searching through disconnected websites, reading unreliable reviews,
                  and struggling to communicate with vendors, they knew there had to be a better way.
                </p>
                <p className="text-muted-foreground text-lg">
                  Today, EventGo has grown into a vibrant community of event planners and trusted vendors,
                  all connected through our innovative platform that makes discovering, communicating with,
                  and booking vendors a seamless experience.
                </p>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069" 
                  alt="Event planning" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-white/90 text-lg font-medium">Creating magical moments since 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="w-full py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/10 z-0"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
                <Sparkles className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To simplify event planning by connecting people with exceptional vendors through
                a platform that promotes transparency, quality, and creativity.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Calendar className="text-primary" />,
                  title: "Discovery",
                  description: "Making it easy to find and connect with the perfect vendors for any event."
                },
                {
                  icon: <Flame className="text-primary" />,
                  title: "Inspiration",
                  description: "Showcasing creative ideas and talented professionals to inspire unforgettable events."
                },
                {
                  icon: <Users className="text-primary" />,
                  title: "Connection",
                  description: "Building a community where event planners and vendors can collaborate seamlessly."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-muted"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
                <User className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">Our Values</h2>
              <p className="text-muted-foreground text-lg">
                The core principles that guide everything we do at EventGo.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  title: "Excellence",
                  description: "We are committed to excellence in everything we do."
                },
                {
                  title: "Integrity",
                  description: "We operate with honesty and transparency."
                },
                {
                  title: "Innovation",
                  description: "We continuously seek new ways to improve our platform."
                },
                {
                  title: "Community",
                  description: "We foster a supportive community of vendors and planners."
                },
                {
                  title: "Customer-Centric",
                  description: "Our users' needs are at the heart of our decisions."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-muted hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
                <Users className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">Our Team</h2>
              <p className="text-muted-foreground text-lg">
                Meet the visionaries behind EventGo who are dedicated to transforming the event planning landscape.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Jane Smith",
                  role: "Founder & CEO",
                  bio: "Entrepreneur with extensive experience in event planning and tech startups. Jane founded EventGo to revolutionize how people plan and organize events.",
                  image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471"
                },
                {
                  name: "David Chen",
                  role: "CTO",
                  bio: "Tech innovator with a background in building scalable platforms. David leads our engineering team to create seamless experiences for vendors and event planners alike.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470"
                },
                {
                  name: "Maya Patel",
                  role: "Creative Director",
                  bio: "Former event designer with an eye for visual storytelling. Maya ensures our platform showcases vendors' work in the most compelling and authentic way.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374"
                }
              ].map((person, index) => (
                <div key={index} className="bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-muted overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <Avatar className="w-24 h-24 border-4 border-background mx-auto -mt-20 relative z-20 shadow-lg">
                      <AvatarImage src={person.image} alt={person.name} />
                      <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mt-6 mb-1">{person.name}</h3>
                    <p className="text-primary font-medium mb-4">{person.role}</p>
                    <p className="text-muted-foreground mb-6">
                      {person.bio}
                    </p>
                    <div className="flex justify-center space-x-4">
                      {["twitter", "linkedin", "instagram"].map((social, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
                          aria-label={`${social} link`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/80"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
