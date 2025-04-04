import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroVideo from "@/image/hell.mp4";

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 bg-black">
        <video 
          className="w-full h-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo}  type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto relative z-10 px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block p-1.5 rounded-full bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-md mb-6 shadow-lg shadow-black/20 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-full px-8 py-2.5 text-sm font-semibold text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              The best events happen at FlairMyEvent
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Create a <span className="text-eventgo-teal">Memorable</span> Event Experience
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Connect with top-rated professionals to help you plan your perfect event, from photographers to caterers, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="rounded-full bg-eventgo-teal text-black hover:bg-eventgo-teal/90 px-8 py-6">
              Find Your Vendor
            </Button>
            <Button variant="outline" className="rounded-full border-white/20 bg-transparent backdrop-blur-sm hover:bg-white/10 px-8 py-6">
              Browse Categories
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
