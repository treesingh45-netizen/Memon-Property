import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Homeowner, Gulshan-e-Iqbal',
    initials: 'AK',
    text: 'Memon Property Dealer helped us find our dream home at an incredible price. Their team was professional, transparent, and guided us through every step of the process. Highly recommended!'
  },
  {
    id: 2,
    name: 'Fatima Malik',
    role: 'Business Owner, Federal B Area',
    initials: 'FM',
    text: 'We hired them for our commercial space renovation and the results exceeded our expectations. The quality of work was outstanding and they completed the project on time and within budget.'
  },
  {
    id: 3,
    name: 'Imran Siddiqui',
    role: 'Property Investor, DHA',
    initials: 'IS',
    text: 'I\'ve been working with Memon Property Dealer for my investment properties for over 5 years. Their market knowledge and honest advice have helped me make profitable decisions every time.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
          <div className="flex justify-center mt-4 mb-4">
            <div className="h-1 w-20 rounded-full bg-primary"></div>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Trusted by Hundreds of Satisfied Property Owners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border p-6 shadow-sm h-full group hover:-translate-y-2 hover:shadow-lg hover:border-primary transition-all duration-300">
              
              <Quote className="w-10 h-10 text-primary/30 -mb-2" />
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {t.text}
              </p>
              
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
