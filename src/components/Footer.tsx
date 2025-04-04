import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-muted-foreground text-sm mb-2">Want to join as a vendor?</h3>
          <Link to="/register" className="text-eventgo-teal hover:underline">
            Apply as Flair-my-event Pro
          </Link>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/i_reeshab?igsh=MXF3amZvNWR1cXc3cw==" className="text-muted-foreground hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://x.com/reeshab1504icl1?s=21&t=zc60KcKzjY_FhTlwBHQ_eQ" className="text-muted-foreground hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://www.facebook.com/share/19C23HkwdN/?mibextid=wwXIfr" className="text-muted-foreground hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors">
            <Youtube />
          </a>
        </div>
        
        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Flair-my-event. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/help" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
