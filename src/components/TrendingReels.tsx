import { useState, useRef, useEffect } from "react";
import { Play, Pause, Heart, MessageCircle, Share2, MoreVertical, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import ReactPlayer from "react-player/lazy";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

// Interface definitions
interface User {
  id: number;
  username: string;
  fullName: string;
  avatar: string;
  followers: number;
  following: number;
  bio: string;
  verified: boolean;
}

interface Comment {
  id: number;
  userId: number;
  username: string;
  avatar: string;
  text: string;
  timestamp: string;
  likes: number;
}

interface Reel {
  id: number;
  userId: number;
  videoUrl: string;
  thumbnail: string;
  caption: string;
  likes: number;
  comments: Comment[];
  shares: number;
  timestamp: string;
}

// Dummy users data
const users: User[] = [
  {
    id: 1,
    username: "groove_team",
    fullName: "Groove Team",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    followers: 15400,
    following: 320,
    bio: "Creating memorable experiences through music and events. Booking inquiries: groove@example.com",
    verified: true
  },
  {
    id: 2,
    username: "night_dj_masters",
    fullName: "Night DJ Masters",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    followers: 42300,
    following: 562,
    bio: "Professional DJ services for all types of events. Let's make your night unforgettable!",
    verified: true
  },
  {
    id: 3,
    username: "taste_creators",
    fullName: "Taste Creators Catering",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    followers: 8900,
    following: 734,
    bio: "Premium catering for premium events. From intimate gatherings to grand celebrations.",
    verified: false
  },
  {
    id: 4,
    username: "party_source",
    fullName: "Party Source Events",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    followers: 27500,
    following: 412,
    bio: "Your one-stop shop for event planning, decoration, and coordination. Let's party!",
    verified: true
  }
];

// Dummy reels data with more reliable video sources
const reels: Reel[] = [
  {
    id: 1,
    userId: 1,
    videoUrl: "https://youtube.com/shorts/OeDkcWbEGd4?si=mZ8DDBy2OPQ8Vy4X",
    thumbnail: "",
    caption: "Experience the magic of our latest night at Club Events! The energy was absolutely incredible. #eventplanning #nightlife #dj #clubbing",
    likes: 1241,
    comments: [
      {
        id: 101,
        userId: 2,
        username: "night_dj_masters",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        text: "This looks amazing! Would love to collaborate sometime.",
        timestamp: "2h ago",
        likes: 24
      },
      {
        id: 102,
        userId: 4,
        username: "party_source",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        text: "The lighting setup is perfect! Who did you work with?",
        timestamp: "1h ago",
        likes: 8
      },
      {
        id: 103,
        userId: 3,
        username: "taste_creators",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "We catered this event and it was a blast! Thanks for having us.",
        timestamp: "45m ago",
        likes: 17
      }
    ],
    shares: 87,
    timestamp: "8h ago"
  },
  {
    id: 2,
    userId: 2,
    videoUrl: "https://youtube.com/shorts/X5wlkWqdNf8?si=o6sY1hGZwsAxGJ_t",
    thumbnail: "",
    caption: "When the beat drops and everyone goes wild! Tag a friend you'd bring to our next event. 🎧 #musicfestival #dj #electronicmusic",
    likes: 2743,
    comments: [
      {
        id: 201,
        userId: 1,
        username: "groove_team",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Your set was fire last weekend! Everyone was asking about you.",
        timestamp: "3h ago",
        likes: 45
      },
      {
        id: 202,
        userId: 4,
        username: "party_source",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        text: "Can't wait for the next event! 🔥",
        timestamp: "2h ago",
        likes: 12
      }
    ],
    shares: 132,
    timestamp: "1d ago"
  },
  {
    id: 3,
    userId: 3,
    videoUrl: "https://youtube.com/shorts/_4x_Nj1r9n4?si=PUILvke5uFaKqAHs",
    thumbnail: "",
    caption: "Our signature hors d'oeuvres are a hit at every corporate event we cater! Book us for your next company gathering. #foodie #catering #corporateevents",
    likes: 883,
    comments: [
      {
        id: 301,
        userId: 4,
        username: "party_source",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        text: "Your food presentation is always impeccable! Our clients love working with you.",
        timestamp: "5h ago",
        likes: 19
      },
      {
        id: 302,
        userId: 1,
        username: "groove_team",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Those look delicious! We need to book you for our next corporate client.",
        timestamp: "4h ago",
        likes: 7
      }
    ],
    shares: 62,
    timestamp: "2d ago"
  },
  {
    id: 4,
    userId: 4,
    videoUrl: "https://youtube.com/shorts/lW3LuO0AiwE?si=3AY6urIt-Yv8XTyI",
    thumbnail: "",
    caption: "From concept to reality - this underwater themed party was amazing! See how we transformed this venue with lighting, props, and creative design. #eventdesign #themeparty #eventplanner",
    likes: 1567,
    comments: [
      {
        id: 401,
        userId: 3,
        username: "taste_creators",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "The themed food we created for this was so fun! Great concept.",
        timestamp: "6h ago",
        likes: 31
      },
      {
        id: 402,
        userId: 2,
        username: "night_dj_masters",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        text: "That lighting design was spectacular! The blue underwater effect was perfect.",
        timestamp: "5h ago",
        likes: 23
      },
      {
        id: 403,
        userId: 1,
        username: "groove_team",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "We had a blast providing music for this event! The theme matched our ocean-inspired playlist perfectly.",
        timestamp: "4h ago",
        likes: 15
      }
    ],
    shares: 104,
    timestamp: "3d ago"
  }
];

// ReelPlayer Component
const ReelPlayer = ({ 
  reel, 
  isActive, 
  onLike, 
  onComment, 
  onShare, 
  onUserClick 
}: { 
  reel: Reel, 
  isActive: boolean, 
  onLike: () => void, 
  onComment: () => void, 
  onShare: () => void, 
  onUserClick: () => void 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (isActive) {
      setIsPlaying(true);
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(false);
    }
  }, [isActive]);

  const handleLike = () => {
    setHasLiked(!hasLiked);
    onLike();
    
    if (!hasLiked) {
      toast.success("Added to your liked posts");
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  const handleMouseMove = () => {
    setShowControls(true);
    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const user = users.find(u => u.id === reel.userId) || users[0];

  return (
    <div 
      className="reel-container relative aspect-[9/16] md:aspect-[9/16] overflow-hidden bg-black rounded-xl shadow-xl"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 z-10" onClick={handleVideoClick}>
        <ReactPlayer
          ref={playerRef}
          url={reel.videoUrl}
          width="100%"
          height="100%"
          playing={isPlaying && isActive}
          loop={true}
          volume={0.5}
          muted={false}
          playsinline={true}
          light={!playerReady ? reel.thumbnail : false}
          onReady={() => setPlayerReady(true)}
          onError={(e) => console.error("Player error:", e)}
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1,
                controls: 0,
                showinfo: 0,
                rel: 0
              }
            },
            file: {
              attributes: {
                poster: reel.thumbnail,
                controlsList: "nodownload",
              },
            },
          }}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-20 pointer-events-none"></div>

      {showControls && (
        <Button 
          variant="ghost" 
          size="icon" 
          className={`absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 z-30 transition-opacity ${!isPlaying ? 'opacity-90' : 'opacity-50'}`}
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 fill-white text-white" />
          ) : (
            <Play className="w-8 h-8 fill-white text-white ml-1" />
          )}
        </Button>
      )}

      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-30">
        <div 
          className="flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer" 
          onClick={onUserClick} 
          role="button"
        >
          <Avatar className="border-2 border-primary h-10 w-10">
            <img src={user.avatar} alt={user.username} className="object-cover" />
          </Avatar>
          <div className="text-white">
            <div className="flex items-center">
              <p className="font-medium text-sm">{user.username}</p>
              {user.verified && (
                <span className="ml-1 text-xs bg-blue-500 rounded-full p-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </div>
            <p className="text-xs text-white/70">{reel.timestamp}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>

      <div className="absolute bottom-20 left-4 right-12 z-30">
        <p className="text-white/90 text-sm line-clamp-2">{reel.caption}</p>
      </div>

      <div className="absolute right-4 bottom-24 flex flex-col space-y-6 z-30">
        <Button 
          variant="ghost" 
          size="icon" 
          className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
          onClick={handleLike}
        >
          <Heart className={`w-5 h-5 ${hasLiked ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`} />
          <span className="text-white text-xs absolute -bottom-5">{hasLiked ? reel.likes + 1 : reel.likes}</span>
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
          onClick={onComment}
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-white text-xs absolute -bottom-5">{reel.comments.length}</span>
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
          onClick={onShare}
        >
          <Share2 className="w-5 h-5 text-white" />
          <span className="text-white text-xs absolute -bottom-5">{reel.shares}</span>
        </Button>
      </div>
    </div>
  );
};

// ReelComments Component
const ReelComments = ({ reel, onClose }: { reel: Reel, onClose: () => void }) => {
  const [comment, setComment] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      toast.success("Comment posted!");
      setComment("");
    }
  };

  const user = users.find(u => u.id === reel.userId) || users[0];

  return (
    <div className="h-full flex flex-col">
      <DialogHeader className="p-4 border-b flex items-center justify-between">
        <DialogTitle className="font-medium">Comments</DialogTitle>
        <DialogClose asChild>
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
      </DialogHeader>
      
      <div className="p-4 border-b">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <img src={user.avatar} alt={user.username} className="object-cover" />
          </Avatar>
          <div>
            <div className="flex items-center">
              <p className="font-medium text-sm">{user.username}</p>
              {user.verified && (
                <span className="ml-1 text-xs bg-blue-500 text-white rounded-full p-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </div>
            <p className="text-sm mt-1">{reel.caption}</p>
            <p className="text-xs text-muted-foreground mt-1">{reel.timestamp}</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {reel.comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <img src={comment.avatar} alt={comment.username} className="object-cover" />
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center">
                <p className="font-medium text-sm">{comment.username}</p>
                <span className="mx-2 text-xs text-muted-foreground">•</span>
                <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
              </div>
              <p className="text-sm mt-1">{comment.text}</p>
              <div className="flex items-center gap-4 mt-2">
                <button className="text-xs text-muted-foreground hover:text-foreground">Like</button>
                <button className="text-xs text-muted-foreground hover:text-foreground">Reply</button>
                <div className="flex items-center">
                  <Heart className="h-3 w-3 mr-1" />
                  <span className="text-xs">{comment.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t mt-auto">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 bg-muted/50 px-3 py-2 text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button 
            type="submit" 
            variant="ghost" 
            size="sm" 
            disabled={!comment.trim()}
            className={`${!comment.trim() ? 'text-muted-foreground' : 'text-primary'}`}
          >
            Post
          </Button>
        </form>
      </div>
    </div>
  );
};

// UserProfile component
const UserProfile = ({ user, onClose }: { user: User, onClose: () => void }) => {
  const userReels = reels.filter(reel => reel.userId === user.id);
  
  return (
    <div className="h-full flex flex-col">
      <DialogHeader className="p-4 border-b flex items-center justify-between">
        <DialogTitle className="font-medium">{user.username}</DialogTitle>
        <DialogClose asChild>
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
      </DialogHeader>
      
      <div className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20 border-2 border-primary">
            <img src={user.avatar} alt={user.username} className="object-cover" />
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center">
              <h2 className="text-lg font-bold">{user.fullName}</h2>
              {user.verified && (
                <span className="ml-1 text-xs bg-blue-500 text-white rounded-full p-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
            
            <div className="flex gap-4 mt-3">
              <div>
                <p className="font-bold">{userReels.length}</p>
                <p className="text-xs text-muted-foreground">Posts</p>
              </div>
              <div>
                <p className="font-bold">{user.followers.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div>
                <p className="font-bold">{user.following.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="mt-4 text-sm">{user.bio}</p>
        
        <div className="mt-6 flex gap-2">
          <Button 
            className="flex-1"
            onClick={() => toast.success(`Following ${user.username}`)}
          >
            Follow
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => toast.success(`Message sent to ${user.username}`)}
          >
            Message
          </Button>
        </div>
      </div>
      
      <div className="p-4 border-t">
        <h4 className="font-medium mb-4">Recent Posts</h4>
        <div className="grid grid-cols-3 gap-1">
          {userReels.map(reel => (
            <div key={reel.id} className="aspect-square relative overflow-hidden rounded-sm">
              <img 
                src={reel.thumbnail} 
                alt={`Post by ${user.username}`} 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 text-white text-xs">
                  <Heart className="h-3 w-3 fill-white" />
                  <span>{reel.likes}</span>
                  <MessageCircle className="h-3 w-3 ml-2" />
                  <span>{reel.comments.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrendingReels = () => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const isMobile = useIsMobile();
  
  const handleLike = (reelId: number) => {
    console.log(`Liked reel ${reelId}`);
  };

  const handleComment = (reel: Reel) => {
    setSelectedReel(reel);
    setIsCommentsOpen(true);
  };

  const handleShare = (reelId: number) => {
    toast.success("Reel shared successfully!");
    console.log(`Shared reel ${reelId}`);
  };

  const handleUserClick = (userId: number) => {
    const user = users.find(u => u.id === userId);
    if (user) {
      setSelectedUser(user);
      setIsProfileOpen(true);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-background/90 to-background/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Trending Reels</h2>
            <p className="text-muted-foreground text-sm">Get inspired by what's popular right now</p>
          </div>
          <Button variant="link" className="text-primary font-medium">
            View all
          </Button>
        </div>
        
        <div className="flex justify-center">
          <div className={`w-full max-w-md mx-auto relative ${isMobile ? '' : 'px-12'}`}>
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              orientation="horizontal"
              className="w-full"
              onSelect={(api) => {
                if (api) {
                  setActiveReelIndex(api.selectedScrollSnap());
                }
              }}
            >
              <CarouselContent>
                {reels.map((reel, index) => (
                  <CarouselItem key={reel.id} className="flex justify-center">
                    <div className="w-full max-w-md relative bg-black rounded-xl overflow-hidden aspect-[9/16] shadow-2xl">
                      <ReelPlayer
                        reel={reel}
                        isActive={activeReelIndex === index}
                        onLike={() => handleLike(reel.id)}
                        onComment={() => handleComment(reel)}
                        onShare={() => handleShare(reel.id)}
                        onUserClick={() => handleUserClick(reel.userId)}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md hover:bg-black/50" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-md hover:bg-black/50" />
            </Carousel>
            
            <div className="flex justify-center gap-2 mt-4">
              {reels.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${activeReelIndex === index ? 'bg-primary w-4' : 'bg-muted'}`}
                  onClick={() => setActiveReelIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={isCommentsOpen} onOpenChange={setIsCommentsOpen}>
        <DialogContent className="sm:max-w-md h-[80vh]">
          {selectedReel && <ReelComments reel={selectedReel} onClose={() => setIsCommentsOpen(false)} />}
        </DialogContent>
      </Dialog>
      
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-md h-[80vh]">
          {selectedUser && <UserProfile user={selectedUser} onClose={() => setIsProfileOpen(false)} />}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TrendingReels;
