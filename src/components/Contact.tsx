import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
          <div className="flex justify-center mt-4 mb-4">
            <div className="h-1 w-20 rounded-full bg-primary"></div>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Contact us for any inquiries about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Information & Map */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <a href="tel:03022888901" className="block">
                <div className="bg-card text-card-foreground flex items-center gap-4 rounded-xl border border-border p-4 shadow-sm group hover:shadow-md hover:border-primary transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="text-sm md:text-base font-semibold text-foreground break-words">
                      0302-2888901, 0335-2888901
                    </p>
                  </div>
                </div>
              </a>

              <a href="mailto:memonpropertydealerkarachi@gmail.com" className="block">
                <div className="bg-card text-card-foreground flex items-center gap-4 rounded-xl border border-border p-4 shadow-sm group hover:shadow-md hover:border-primary transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-sm md:text-base font-semibold text-foreground break-words">
                      memonpropertydealerkarachi@gmail.com
                    </p>
                  </div>
                </div>
              </a>

              <div className="bg-card text-card-foreground flex items-center gap-4 rounded-xl border border-border p-4 shadow-sm group hover:shadow-md hover:border-primary transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">Address</p>
                  <p className="text-sm md:text-base font-semibold text-foreground break-words">
                    Federal 'B' Area, Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="bg-card text-card-foreground flex items-center gap-4 rounded-xl border border-border p-4 shadow-sm group hover:shadow-md hover:border-primary transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">Working Hours</p>
                  <p className="text-sm md:text-base font-semibold text-foreground break-words">
                    Mon-Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-sm h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.318856983794!2d67.0673891!3d24.9212297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f609e3e3b7b%3A0x6bbaaa3442aed871!2sFederal%20B%20Area%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Federal B Area, Karachi"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card text-card-foreground rounded-xl border border-border p-6 md:p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-1">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-1">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium flex items-center gap-1">
                  Service Interest <span className="text-destructive">*</span>
                </label>
                <select
                  id="service"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  <option value="sales">Sales</option>
                  <option value="purchase">Purchase</option>
                  <option value="construction">Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-1">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[120px]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-bold transition-colors shadow-sm h-11 bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
