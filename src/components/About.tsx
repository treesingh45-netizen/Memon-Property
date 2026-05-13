import { Calendar, Building, Users, HardHat } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-border">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Memon Property Dealer Team and site work"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Building Trust, Delivering Excellence Since 2005
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Memon Property Dealer has been a trusted name in Karachi's real estate market for nearly two decades. We specialize in property sales, purchase, construction, and renovation services, delivering exceptional results with our expert team.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to reasonable pricing, superior quality, and customer satisfaction has made us one of the most reliable real estate service providers in Federal B Area and across Karachi.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">18+</p>
                  <p className="text-sm text-muted-foreground">Years of Exp.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">120+</p>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                  <HardHat className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Expert Staff</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
