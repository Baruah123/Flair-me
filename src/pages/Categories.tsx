
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const categories = [
    {
      slug: "wedding-venues",
      name: "Wedding Venues", 
      description: "Find the perfect location for your special day.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
      count: 24
    },
    {
      slug: "catering",
      name: "Catering", 
      description: "Delight your guests with exquisite food and beverage services.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
      count: 18
    },
    {
      slug: "photography",
      name: "Photography", 
      description: "Capture every beautiful moment with professional photographers.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
      count: 22
    },
    {
      slug: "music",
      name: "Music & Entertainment",
      description: "Set the perfect mood with amazing DJs and live performers.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
      count: 15
    },
    {
      slug: "decoration",
      name: "Decorations", 
      description: "Transform your event space with stunning decorations.",
      image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=2074",
      count: 17
    },
    {
      slug: "planning",
      name: "Wedding Planning", 
      description: "Expert planners to make your event perfect from start to finish.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
      count: 9
    },
    {
      slug: "florists",
      name: "Florists", 
      description: "Beautiful floral arrangements to enhance your celebration.",
      image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1974",
      count: 13
    },
    {
      slug: "transportation",
      name: "Transportation",
      description: "Arrive in style with luxury transportation services.",
      image: "https://images.unsplash.com/photo-1511266076839-5b85ff6c11df?q=80&w=2073",
      count: 8
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Explore Event Categories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect vendors for your special event by browsing through our curated categories
          </p>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.slug} to={`/category/${category.slug}`} className="block h-full">
              <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300 border border-border/50">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold group-hover:text-eventgo-teal transition-colors">{category.name}</h3>
                    <p className="text-sm text-white/80">{category.count} vendors</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
