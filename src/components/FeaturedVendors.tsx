
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { Star } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

type Vendor = {
  id: number;
  name: string;
  type: string;
  image: string;
  rating: number;
  reviews: number;
  profilePic?: string;
};

const vendors: Vendor[] = [
  {
    id: 1,
    name: "EventPix",
    type: "Photography",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974",
    rating: 4.9,
    reviews: 127
  },
  {
    id: 2,
    name: "Sound Masters",
    type: "Audio",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780",
    rating: 4.7,
    reviews: 83
  },
  {
    id: 3,
    name: "Stellar Events",
    type: "DJ Party",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
    rating: 4.8,
    reviews: 116
  },
  {
    id: 4,
    name: "Taste",
    type: "Food",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974",
    rating: 4.6,
    reviews: 92
  },
  {
    id: 5,
    name: "Party Xperts",
    type: "Decor",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974",
    rating: 4.5,
    reviews: 78
  },
];

const FeaturedVendors = () => {
  const { toast } = useToast();
  const { theme } = useTheme();

  return (
    <section className="w-full py-12 md:py-16 px-6">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Featured Vendors</h2>
              <p className="text-muted-foreground text-sm">We have personally vetted all the top rated professionals.</p>
            </div>
            <Button variant="link" asChild>
              <Link to="/vendors">View All</Link>
            </Button>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {vendors.map((vendor) => (
                <CarouselItem key={vendor.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                    <div className="relative h-48 w-full">
                      <img 
                        src={vendor.image} 
                        alt={vendor.name} 
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <div className="flex items-end gap-2">
                          <Avatar className="border-2 border-white h-10 w-10">
                            <img src={vendor.profilePic} alt={`${vendor.name} profile`} />
                          </Avatar>
                          <div className="text-white">
                            <p className="font-medium">{vendor.name}</p>
                            <p className="text-sm opacity-80">{vendor.type}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="w-5 h-5 fill-eventgo-yellow stroke-none text-eventgo-yellow" />
                          <span className="font-medium ml-1">{vendor.rating}</span>
                          <span className="text-xs text-muted-foreground ml-1">({vendor.reviews})</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button 
                        className="w-full" 
                        asChild
                      >
                        <Link to={`/vendor/${vendor.id}`}>
                          View Profile
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
