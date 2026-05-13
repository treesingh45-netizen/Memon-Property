import { Phone, Mail, Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="flex flex-col">
      {/* Top Banner */}
      <div className="bg-foreground text-white hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:03022888901" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>0302-2888901</span>
            </a>
            <a href="tel:03352888901" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>0335-2888901</span>
            </a>
          </div>
          <a href="mailto:memonpropertydealerkarachi@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={14} />
            <span>memonpropertydealerkarachi@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
              MEMON <span className="text-primary">PROPERTY</span> DEALER
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border p-4 shadow-lg absolute w-full">
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
