import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-foreground relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/20">
              <Mail className="w-7 h-7 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest property listings, market insights, and exclusive deals in Karachi.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full h-12 rounded-md bg-white/90 border-0 px-4 text-black placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 h-12 rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors shrink-0"
            >
              <Send className="w-4 h-4 mr-1" />
              Subscribe
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
}
