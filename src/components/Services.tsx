import { DollarSign, Home, HardHat, Paintbrush, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: DollarSign,
    title: 'Sales',
    description: 'Expert property sales services with extensive market knowledge. We help you find the perfect buyer at the best market price.',
    badge: 'Best Market Rates'
  },
  {
    icon: Home,
    title: 'Purchase',
    description: 'Find your dream property with our expert guidance. We offer the best properties at reasonable prices across Karachi.',
    badge: 'Verified Properties'
  },
  {
    icon: HardHat,
    title: 'Construction',
    description: 'Professional construction services with expert staff and quality materials. From foundation to finishing, we deliver excellence.',
    badge: 'Expert Staff'
  },
  {
    icon: Paintbrush,
    title: 'Renovation',
    description: 'Transform your existing property with our renovation experts. Modern designs and quality workmanship at reasonable prices.',
    badge: 'Modern Designs'
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Strategic property marketing to maximize your property\'s visibility and value. Professional photography, listings, and campaigns.',
    badge: 'Maximum Visibility'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <div className="flex justify-center mt-4 mb-4">
            <div className="h-1 w-20 rounded-full bg-primary"></div>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive Real Estate Solutions with Reasonable Price & Best Quality
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border py-6 px-6 shadow-sm h-full group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary text-center items-center">
                
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground border-b border-border/50 pb-4 w-full">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 pt-2">
                  {service.description}
                </p>
                
                <span className="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium mt-auto">
                  {service.badge}
                </span>

              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 md:mt-16 text-lg md:text-xl font-semibold text-primary">
          Reasonable Price with Best Quality & Expert Staff
        </p>

      </div>
    </section>
  );
}
