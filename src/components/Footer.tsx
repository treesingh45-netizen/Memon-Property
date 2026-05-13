import { Building2, Facebook, Instagram, Twitter, Linkedin, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-sm text-gray-400">
          
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-lg font-bold tracking-tight text-white">
                MEMON <span className="text-primary">PROPERTY</span> DEALER
              </span>
            </a>
            <p className="font-medium text-primary/90">Real Estate Builder & Developers</p>
            <p className="leading-relaxed">
              Your trusted partner in real estate since 2005. We deliver quality construction, renovation, and property services at reasonable prices.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="flex w-10 h-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                <Facebook size={18} />
              </a>
              <a href="#" className="flex w-10 h-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                <Instagram size={18} />
              </a>
              <a href="#" className="flex w-10 h-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                <Twitter size={18} />
              </a>
              <a href="#" className="flex w-10 h-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Projects', 'About Us', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                    <ChevronRight size={14} />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Our Services</h3>
            <ul className="space-y-3">
              {['Sales', 'Purchase', 'Construction', 'Renovation', 'Marketing'].map((service) => (
                <li key={service}>
                  <a href="#services" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <ChevronRight size={14} />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:03022888901" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>0302-2888901</span>
                </a>
              </li>
              <li>
                <a href="tel:03352888901" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>0335-2888901</span>
                </a>
              </li>
              <li>
                <a href="mailto:memonpropertydealerkarachi@gmail.com" className="flex items-start gap-3 hover:text-primary transition-colors">
                  <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="break-all">memonpropertydealerkarachi@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>Federal 'B' Area, Karachi, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Memon Property Dealer. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
