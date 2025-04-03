
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Category data with details for each category
const categoriesDetails = {
  "wedding-venues": {
    name: "Wedding Venues",
    description: "Find the perfect location for your special day.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
    longDescription: "Your wedding venue sets the tone for your entire celebration. Browse our collection of stunning venues ranging from elegant ballrooms to rustic barns, beachfront properties, and charming garden settings. Each venue has been carefully selected to provide exceptional service and unforgettable experiences.",
    featuredInfo: [
      "Choose from indoor and outdoor options",
      "Various capacity sizes from intimate to grand celebrations",
      "All-inclusive packages available",
      "Diverse styles to match your wedding theme"
    ]
  },
  "catering": {
    name: "Catering",
    description: "Delight your guests with exquisite food and beverage services.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
    longDescription: "Food is a centerpiece of any successful event. Our curated catering vendors offer diverse culinary experiences from gourmet multi-course meals to creative buffets, cocktail receptions, and custom menu development. Discover caterers who specialize in various cuisines, dietary accommodations, and presentation styles.",
    featuredInfo: [
      "Customizable menus for any dietary requirements",
      "Full-service options including staff and rentals",
      "Beverage and bar service packages",
      "Tasting sessions available with most vendors"
    ]
  },
  "photography": {
    name: "Photography",
    description: "Capture every beautiful moment with professional photographers.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    longDescription: "Your special moments deserve to be beautifully preserved. Our photography vendors bring years of experience in capturing the emotion and magic of weddings and events. From candid photojournalistic styles to classic portraiture, our photographers know how to tell your story through compelling imagery that you'll treasure for years to come.",
    featuredInfo: [
      "Various photography styles and approaches",
      "Packages including digital files and albums",
      "Engagement and pre-event sessions",
      "Second shooters available for comprehensive coverage"
    ]
  },
  "music": {
    name: "Music & Entertainment",
    description: "Set the perfect mood with amazing DJs and live performers.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    longDescription: "Music creates the atmosphere and energy for your celebration. Choose from talented DJs who can read the crowd and keep your dance floor packed, or elegant live musicians for ceremony and cocktail hour ambiance. From string quartets to jazz ensembles, bands and solo performers, our entertainment vendors will make your event memorable.",
    featuredInfo: [
      "Wide range of musical styles and genres",
      "Professional sound equipment included",
      "Customizable playlists and song requests",
      "MC services for announcements and introductions"
    ]
  },
  "decoration": {
    name: "Decorations",
    description: "Transform your event space with stunning decorations.",
    image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=2074",
    longDescription: "The right decorations transform an ordinary space into something magical. Our decoration specialists offer complete design services including themes, color coordination, lighting, table settings, backdrops, and unique rentals. From minimalist modern to lush and ornate designs, find the perfect decorator to bring your vision to life.",
    featuredInfo: [
      "Complete styling and setup services",
      "Custom backdrop and installation creation",
      "Lighting design including uplighting and chandeliers",
      "Wide range of rental items available"
    ]
  },
  "planning": {
    name: "Wedding Planning",
    description: "Expert planners to make your event perfect from start to finish.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    longDescription: "Our professional wedding planners will guide you through every step of planning your perfect day. From full-service coordination to day-of management, our planners bring organization, creativity, and attention to detail to ensure your wedding is stress-free and exactly as you envisioned. They'll handle vendor coordination, timelines, budgeting, and all the logistics.",
    featuredInfo: [
      "Full planning, partial planning, and day-of coordination packages",
      "Vendor recommendations and contract review",
      "Budget management and tracking",
      "Timeline creation and execution"
    ]
  },
  "florists": {
    name: "Florists",
    description: "Beautiful floral arrangements to enhance your celebration.",
    image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1974",
    longDescription: "Flowers add color, texture, and natural beauty to any event. Our florists create everything from bridal bouquets and boutonnieres to ceremony arches, centerpieces, and venue installations. Whether you prefer lush garden-style arrangements or sleek modern designs, our floral artists will work within your budget to create stunning botanical elements.",
    featuredInfo: [
      "Personalized consultations and custom designs",
      "Seasonal flower recommendations",
      "Installation and breakdown services",
      "Rental items including vases, arches, and stands"
    ]
  },
  "transportation": {
    name: "Transportation",
    description: "Arrive in style with luxury transportation services.",
    image: "https://images.unsplash.com/photo-1511266076839-5b85ff6c11df?q=80&w=2073",
    longDescription: "Make a grand entrance or ensure your guests travel in comfort with our transportation vendors. From classic vintage cars and sleek limousines to luxury coaches and shuttle services, we've partnered with reliable transportation companies who prioritize punctuality, comfort, and style for your special event.",
    featuredInfo: [
      "Various vehicle options for different group sizes",
      "Professional chauffeurs and drivers",
      "Customizable routes and schedules",
      "Decorated vehicles available for wedding couples"
    ]
  }
};

// Sample vendor data - we'll show relevant vendors for each category
const vendorsData = {
  "wedding-venues": [
    {
      id: 101,
      name: "Grand Ballroom Estate",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974",
      location: "Miami, FL"
    },
    {
      id: 102,
      name: "Seaside Wedding Resort",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1978",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
      location: "San Diego, CA"
    },
    {
      id: 103,
      name: "Rustic Barn Weddings",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
      location: "Nashville, TN"
    },
  ],
  "catering": [
    {
      id: 201,
      name: "Gourmet Delights",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974",
      location: "Chicago, IL"
    },
    {
      id: 202,
      name: "Culinary Creations",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780",
      location: "Boston, MA"
    },
    {
      id: 203,
      name: "Tasty Celebrations",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?q=80&w=2036",
      profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
      location: "New York, NY"
    },
  ],
  "photography": [
    {
      id: 301,
      name: "Timeless Captures",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974",
      location: "Denver, CO"
    },
    {
      id: 302,
      name: "Perfect Moments",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964",
      location: "Seattle, WA"
    },
    {
      id: 303,
      name: "Wedding Stories",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1511158961912-94e89d89cba5?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
      location: "Portland, OR"
    },
  ],
  "music": [
    {
      id: 401,
      name: "Harmony Entertainment",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974",
      location: "Austin, TX"
    },
    {
      id: 402,
      name: "Melody Makers",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974",
      location: "Las Vegas, NV"
    },
    {
      id: 403,
      name: "Rhythmic Bliss",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974",
      location: "Nashville, TN"
    },
  ],
  "decoration": [
    {
      id: 501,
      name: "Elegant Designs",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&w=2074",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
      location: "Miami, FL"
    },
    {
      id: 502,
      name: "Creative Spaces",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2026",
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
      location: "San Francisco, CA"
    },
    {
      id: 503,
      name: "Dreamy Settings",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1510140747-47dd2d7ee5e6?q=80&w=2073",
      profilePic: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974",
      location: "Los Angeles, CA"
    },
  ],
  "planning": [
    {
      id: 601,
      name: "Perfect Day Planners",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
      profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964",
      location: "New York, NY"
    },
    {
      id: 602,
      name: "Wedding Wizards",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
      location: "Chicago, IL"
    },
    {
      id: 603,
      name: "Event Experts",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070",
      profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
      location: "Dallas, TX"
    },
  ],
  "florists": [
    {
      id: 701,
      name: "Blooming Beauty",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1974",
      profilePic: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974",
      location: "Portland, OR"
    },
    {
      id: 702,
      name: "Petal Perfection",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?q=80&w=2029",
      profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974",
      location: "Seattle, WA"
    },
    {
      id: 703,
      name: "Floral Fantasy",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=1973",
      profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974",
      location: "San Francisco, CA"
    },
  ],
  "transportation": [
    {
      id: 801,
      name: "Luxury Rides",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1511266076839-5b85ff6c11df?q=80&w=2073",
      profilePic: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974",
      location: "Los Angeles, CA"
    },
    {
      id: 802,
      name: "Classic Car Services",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?q=80&w=2035",
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
      location: "Miami, FL"
    },
    {
      id: 803,
      name: "Elegant Transport",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2071",
      profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974",
      location: "New York, NY"
    },
  ]
};

const CategoryPage = () => {
  const { slug } = useParams();
  
  // Check if the category exists in our data
  if (!slug || !categoriesDetails[slug as keyof typeof categoriesDetails]) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist or has been removed.</p>
          <Button asChild><Link to="/categories">Browse All Categories</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const category = categoriesDetails[slug as keyof typeof categoriesDetails];
  const vendors = vendorsData[slug as keyof typeof vendorsData] || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 flex flex-col justify-end p-6 sm:p-12">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{category.name}</h1>
              <p className="text-white/80 text-lg sm:text-xl">{category.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Description */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About {category.name}</h2>
              <p className="text-muted-foreground mb-6">{category.longDescription}</p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {category.featuredInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Looking for {category.name}?</h3>
              <p className="text-muted-foreground mb-6">Find the perfect {category.name.toLowerCase()} provider for your special event. Browse our curated selection of top-rated vendors.</p>
              <Button className="w-full" size="lg">
                Contact a Specialist
              </Button>
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-2">Popular searches</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Best {category.name}</Badge>
                  <Badge>Affordable {category.name}</Badge>
                  <Badge>Luxury {category.name}</Badge>
                  <Badge>Top-rated</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Vendors */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Top {category.name} Vendors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
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
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{category.name}</span>
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
          
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link to="/vendors">View All {category.name} Vendors</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Had to add this separately since it's referenced in the component
const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80">
      {children}
    </span>
  );
};

export default CategoryPage;
