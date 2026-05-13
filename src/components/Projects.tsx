import { MapPin } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Gulshan-e-Iqbal Residency',
    location: 'Gulshan-e-Iqbal, Block 13, Karachi',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Residential',
    status: 'Completed',
    statusLine: 'bg-green-600',
    description: 'A modern residential complex featuring beautiful 2 & 3 bedroom apartments with state-of-the-art amenities and beautiful landscaping.'
  },
  {
    id: 2,
    title: 'Federal B Area Business Center',
    location: 'Federal B Area, Block 14, Karachi',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Commercial',
    status: 'Completed',
    statusLine: 'bg-green-600',
    description: 'Premium commercial spaces designed for modern businesses. Features flexible floor plans, ample parking, and high-speed elevators.'
  },
  {
    id: 3,
    title: 'DHA Luxury Renovation',
    location: 'DHA Phase 6, Karachi',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Renovation',
    status: 'Completed',
    statusLine: 'bg-green-600',
    description: 'Complete interior and exterior renovation of a 500 sq yard bungalow, transforming it into a modern luxury residence.'
  },
  {
    id: 4,
    title: 'North Nazimabad Towers',
    location: 'North Nazimabad, Block A, Karachi',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Under Construction',
    status: 'Under Construction',
    statusLine: 'bg-primary text-primary-foreground',
    description: 'An upcoming mixed-use development combining residential apartments with commercial spaces and a rooftop garden.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Projects</h2>
          <div className="flex justify-center mt-4 mb-4">
            <div className="h-1 w-20 rounded-full bg-primary"></div>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Showcasing Our Expertise in Real Estate Development & Construction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-card text-card-foreground flex flex-col rounded-xl border border-border shadow-sm overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary">
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-semibold bg-white/90 text-foreground backdrop-blur-sm shadow-sm">
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-semibold shadow-sm ${project.statusLine}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 shrink-0 text-primary" />
                  <span>{project.location}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
