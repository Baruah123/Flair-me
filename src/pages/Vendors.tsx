
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Star, Search, MapPin, Filter } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

// Sample vendor data
const vendorsData = [
  {
    id: 1,
    name: "Elegant Decor",
    category: "Decoration",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974",
    location: "Miami, FL"
  },
  {
    id: 2,
    name: "Melodic Moments",
    category: "Music",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780",
    location: "Los Angeles, CA"
  },
  {
    id: 3,
    name: "Perfect Frames",
    category: "Photography",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
    location: "New York, NY"
  },
  {
    id: 4,
    name: "Tasty Delights",
    category: "Catering",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974",
    location: "Houston, TX"
  },
  {
    id: 5,
    name: "Festive Designs",
    category: "Decoration",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1978",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    location: "Seattle, WA"
  },
  {
    id: 6,
    name: "Celebration Spaces",
    category: "Decoration",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    location: "Denver, CO"
  },
  {
    id: 7,
    name: "Rhythm Masters",
    category: "Music",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974",
    location: "Austin, TX"
  },
  {
    id: 8,
    name: "Moment Catchers",
    category: "Photography",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974",
    location: "Chicago, IL"
  },
  {
    id: 9,
    name: "Gourmet Events",
    category: "Catering",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974",
    location: "San Francisco, CA"
  },
  {
    id: 10,
    name: "Wedding Wonders",
    category: "Event Planning",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964",
    location: "Atlanta, GA"
  },
  {
    id: 11,
    name: "Blossoms & Bouquets",
    category: "Florists",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1974",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    location: "Portland, OR"
  },
  {
    id: 12,
    name: "Sweet Celebrations",
    category: "Bakery",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?q=80&w=2036",
    profilePic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974",
    location: "Nashville, TN"
  }
];

// Available categories for filtering
const categories = [
  "All Categories",
  "Decoration",
  "Music",
  "Photography",
  "Catering",
  "Event Planning",
  "Florists",
  "Bakery"
];

const Vendors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("rating");

  // Filter and sort vendors
  const filteredVendors = vendorsData.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         vendor.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || vendor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find the Perfect <span className="bg-gradient-to-r from-primary to-eventgo-teal bg-clip-text text-transparent">Vendor</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Browse our curated selection of top-rated vendors to make your event unforgettable.
              </p>
              
              <div className="w-full max-w-2xl mt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search vendors or locations..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vendors Grid */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight">
                {filteredVendors.length} Vendors Found
              </h2>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Top Rated</SelectItem>
                    <SelectItem value="name">Alphabetical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVendors.map((vendor) => (
                <Card key={vendor.id} className="overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <div className="relative h-48 w-full">
                    <img 
                      src={vendor.image} 
                      alt={vendor.name} 
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-end gap-2">
                        <Avatar className="border-2 border-white h-10 w-10">
                          <AvatarImage src={vendor.profilePic} alt={`${vendor.name} profile`} />
                        </Avatar>
                        <div className="text-white">
                          <p className="font-medium">{vendor.name}</p>
                          <div className="flex items-center text-sm gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{vendor.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{vendor.category}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Link to={`/vendor/${vendor.id}`}>View Profile</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredVendors.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No vendors found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vendors;
