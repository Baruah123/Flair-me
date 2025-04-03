
import { Camera, Music, CakeSlice, Palette, PartyPopper, Sparkles, Tent, Coins } from "lucide-react";
import { Link } from "react-router-dom";

type Category = {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  slug: string;
};

const categories: Category[] = [
  {
    name: "Photography",
    icon: <Camera className="w-8 h-8" />,
    color: "bg-purple-500",
    bgColor: "bg-purple-500/20",
    slug: "photography"
  },
  {
    name: "Music & DJs",
    icon: <Music className="w-8 h-8" />,
    color: "bg-eventgo-orange",
    bgColor: "bg-orange-500/20",
    slug: "music"
  },
  {
    name: "Catering",
    icon: <CakeSlice className="w-8 h-8" />,
    color: "bg-emerald-500",
    bgColor: "bg-emerald-500/20",
    slug: "catering"
  },
  {
    name: "Transporation",
    icon: <Coins className="w-8 h-8" />,
    color: "bg-amber-500",
    bgColor: "bg-amber-500/20",
    slug: "transportation"
  },
  {
    name: "Event Design",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-eventgo-pink",
    bgColor: "bg-pink-500/20",
    slug: "decoration"
  },
  {
    name: "Decoration",
    icon: <Sparkles className="w-8 h-8" />,
    color: "bg-indigo-500",
    bgColor: "bg-indigo-500/20",
    slug: "decoration"
  },
  {
    name: "Venue",
    icon: <Tent className="w-8 h-8" />,
    color: "bg-emerald-500",
    bgColor: "bg-emerald-500/20",
    slug: "wedding-venues"
  },
  {
    name: "Rentals",
    icon: <PartyPopper className="w-8 h-8" />,
    color: "bg-amber-500",
    bgColor: "bg-amber-500/20",
    slug: "planning"
  }
];

const CategoryBrowser = () => {
  return (
    <section className="py-16 px-6 bg-black/30">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Browse by Category</h2>
          <p className="text-muted-foreground">Find the perfect vendors for your specific event needs</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={`/category/${category.slug}`}
              className="category-card cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
              </div>
              <h3 className="font-medium text-sm">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBrowser;
