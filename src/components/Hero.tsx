import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-background">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2070&q=80"
        alt="Property construction at sunset"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl space-y-6 flex flex-col items-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary md:text-base">
            Welcome to Memon Property Dealer
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Real Estate Builder <br />
            <span className="text-primary">& Developers</span>
          </h1>
          <p className="max-w-2xl text-base font-medium text-white/80 md:text-lg lg:text-xl">
            In Reasonable Price With Best Quality & Expert Staff
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
            <a 
              href="#services"
              className="inline-flex items-center justify-center gap-2 h-12 bg-primary text-primary-foreground px-8 rounded-md text-base font-semibold shadow-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              View Our Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-12 bg-transparent text-white border-2 border-white px-8 rounded-md text-base font-semibold shadow-lg hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Scroll Down Button */}
        <a 
          href="#services" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
