
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Calendar, 
  Clock, 
  ChevronLeft 
} from "lucide-react";

// This would typically come from an API call based on the ID
// For demo purposes, we're using the same sample data as in Vendors.tsx
const vendorsData = [
  {
    id: 1,
    name: "Elegant Decor",
    category: "Decoration",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974",
    location: "Miami, FL",
    description: "Specializing in luxury wedding and event decorations. We create stunning, personalized environments for all special occasions.",
    phone: "+1 (555) 123-4567",
    email: "contact@elegantdecor.com",
    website: "www.elegantdecor.com",
    gallery: [
      "https://images.unsplash.com/photo-1604017011826-d3b4d689b16b?q=80&w=2070",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070"
    ],
    availability: "Monday to Saturday, 9 AM - 6 PM"
  },
  {
    id: 2,
    name: "Melodic Moments",
    category: "Music",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780",
    location: "Los Angeles, CA",
    description: "Professional live music services for weddings and special events. From classical ensembles to contemporary bands.",
    phone: "+1 (555) 234-5678",
    email: "info@melodicmoments.com",
    website: "www.melodicmoments.com",
    gallery: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070",
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070"
    ],
    availability: "Available for bookings 7 days a week"
  },
  {
    id: 3,
    name: "Perfect Frames",
    category: "Photography",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
    location: "New York, NY",
    description: "Capturing your special moments with artistic flair. Specializing in wedding photography and videography.",
    phone: "+1 (555) 345-6789",
    email: "hello@perfectframes.com",
    website: "www.perfectframes.com",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2070",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2070"
    ],
    availability: "Tuesday to Sunday, Flexible hours"
  },
  {
    id: 4,
    name: "Tasty Delights",
    category: "Catering",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974",
    location: "Houston, TX",
    description: "Gourmet catering services for all events. Our expert chefs create custom menus to suit your tastes and dietary requirements.",
    phone: "+1 (555) 456-7890",
    email: "orders@tastydelights.com",
    website: "www.tastydelights.com",
    gallery: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2074",
      "https://images.unsplash.com/photo-1516685125522-3c528b8046ee?q=80&w=2070",
      "https://images.unsplash.com/photo-1576269483449-3b721ee75dfe?q=80&w=2070"
    ],
    availability: "7 days a week, 24-hour notice required"
  },
  {
    id: 5,
    name: "Festive Designs",
    category: "Decoration",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1978",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    location: "Seattle, WA",
    description: "Creating magical event spaces with creative design elements. Specializing in themed events and celebrations.",
    phone: "+1 (555) 567-8901",
    email: "design@festivedesigns.com",
    website: "www.festivedesigns.com",
    gallery: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1978",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070"
    ],
    availability: "Monday to Friday, 10 AM - 7 PM"
  },
  {
    id: 6,
    name: "Celebration Spaces",
    category: "Decoration",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    location: "Denver, CO",
    description: "Transform any venue into a stunning celebration space. We handle everything from concept to execution.",
    phone: "+1 (555) 678-9012",
    email: "info@celebrationspaces.com",
    website: "www.celebrationspaces.com",
    gallery: [
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2070",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2068",
      "https://images.unsplash.com/photo-1519741347686-c1e30c4c4f01?q=80&w=2070",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070"
    ],
    availability: "Wednesday to Monday, By appointment only"
  },
  {
    id: 7,
    name: "Rhythm Masters",
    category: "Music",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974",
    location: "Austin, TX",
    description: "Professional DJs and bands for hire. Creating the perfect soundtrack for your special event.",
    phone: "+1 (555) 789-0123",
    email: "bookings@rhythmmasters.com",
    website: "www.rhythmmasters.com",
    gallery: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070"
    ],
    availability: "Available evenings and weekends"
  },
  {
    id: 8,
    name: "Moment Catchers",
    category: "Photography",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974",
    location: "Chicago, IL",
    description: "Award-winning photography services. We specialize in candid moments and natural light photography.",
    phone: "+1 (555) 890-1234",
    email: "capture@momentcatchers.com",
    website: "www.momentcatchers.com",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070",
      "https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?q=80&w=2070",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070"
    ],
    availability: "Available 7 days a week, booking required"
  },
  {
    id: 9,
    name: "Gourmet Events",
    category: "Catering",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974",
    location: "San Francisco, CA",
    description: "Exquisite catering for high-end events. Our team of culinary experts create unforgettable dining experiences.",
    phone: "+1 (555) 901-2345",
    email: "taste@gourmetevents.com",
    website: "www.gourmetevents.com",
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
      "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=2070",
      "https://images.unsplash.com/photo-1484300681262-5cca666b0954?q=80&w=2070",
      "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=2070"
    ],
    availability: "Monday to Saturday, 24-hour notice preferred"
  },
  {
    id: 10,
    name: "Wedding Wonders",
    category: "Event Planning",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964",
    location: "Atlanta, GA",
    description: "Full-service wedding planning and coordination. Making your dream wedding a reality from start to finish.",
    phone: "+1 (555) 012-3456",
    email: "plan@weddingwonders.com",
    website: "www.weddingwonders.com",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
    ],
    availability: "By appointment only"
  },
  {
    id: 11,
    name: "Blossoms & Bouquets",
    category: "Florists",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1974",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    location: "Portland, OR",
    description: "Artistic floral designs for weddings and events. Using fresh, seasonal blooms to create stunning arrangements.",
    phone: "+1 (555) 123-4567",
    email: "bloom@blossomsandbouquets.com",
    website: "www.blossomsandbouquets.com",
    gallery: [
      "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1974",
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=2104",
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=2070",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070"
    ],
    availability: "Tuesday to Sunday, 9 AM - 5 PM"
  },
  {
    id: 12,
    name: "Sweet Celebrations",
    category: "Bakery",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?q=80&w=2036",
    profilePic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974",
    location: "Nashville, TN",
    description: "Custom cakes and desserts for all occasions. Our talented pastry chefs create edible works of art.",
    phone: "+1 (555) 234-5678",
    email: "order@sweetcelebrations.com",
    website: "www.sweetcelebrations.com",
    gallery: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?q=80&w=2036",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2070",
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=2072",
      "https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=2071"
    ],
    availability: "Monday to Saturday, 48-hour notice required"
  }
];

const VendorDetail = () => {
  const { id } = useParams();
  const vendorId = parseInt(id || "1");
  
  // Find the vendor with the matching ID
  const vendor = vendorsData.find(v => v.id === vendorId) || vendorsData[0];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <div 
          className="relative w-full h-64 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${vendor.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20">
            <div className="container px-4 md:px-6 h-full flex items-end pb-6">
              <Link to="/vendors" className="absolute top-6 left-6 flex items-center gap-1 text-white bg-black/30 hover:bg-black/50 transition-colors p-2 rounded-full">
                <ChevronLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Back to Vendors</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container px-4 md:px-6 -mt-20 relative z-10">
          <div className="bg-card rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Vendor Profile */}
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-20 w-20 border-4 border-background">
                    <AvatarImage src={vendor.profilePic} alt={`${vendor.name} profile`} />
                  </Avatar>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold">{vendor.name}</h1>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{vendor.category}</span>
                      <div className="flex items-center px-2 py-1 bg-yellow-400/10 text-yellow-600 text-xs rounded-full">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{vendor.rating}</span>
                      </div>
                      <div className="flex items-center px-2 py-1 bg-blue-400/10 text-blue-600 text-xs rounded-full">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{vendor.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">About</h2>
                    <p className="text-muted-foreground">{vendor.description}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {vendor.gallery.map((img, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
                          <img 
                            src={img} 
                            alt={`${vendor.name} work sample ${index+1}`} 
                            className="h-full w-full object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:w-1/3 space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Button className="w-full">Contact Now</Button>
                    </div>

                    <div className="space-y-3 pt-3 border-t">
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">{vendor.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">{vendor.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Website</p>
                          <p className="text-sm text-muted-foreground">{vendor.website}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Availability</p>
                          <p className="text-sm text-muted-foreground">{vendor.availability}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Request a Quote</h3>
                    <p className="text-sm text-muted-foreground mb-4">Fill out a quick form to get pricing and availability information.</p>
                    <Button variant="outline" className="w-full">Get Quote</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Vendors */}
        <section className="w-full py-12 mt-6">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Similar Vendors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vendorsData
                .filter(v => v.category === vendor.category && v.id !== vendor.id)
                .slice(0, 3)
                .map((similarVendor) => (
                  <Card key={similarVendor.id} className="overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                    <div className="relative h-40 w-full">
                      <img 
                        src={similarVendor.image} 
                        alt={similarVendor.name} 
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <div className="flex items-end gap-2">
                          <Avatar className="border-2 border-white h-10 w-10">
                            <AvatarImage src={similarVendor.profilePic} alt={`${similarVendor.name} profile`} />
                          </Avatar>
                          <div className="text-white">
                            <p className="font-medium">{similarVendor.name}</p>
                            <div className="flex items-center text-sm gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{similarVendor.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">{similarVendor.category}</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm font-medium">{similarVendor.rating}</span>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Link to={`/vendor/${similarVendor.id}`}>View Profile</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VendorDetail;
