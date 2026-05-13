import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Karachi Real Estate Market Outlook 2025',
    excerpt: 'Explore the latest trends in Karachi\'s property market, including price movements, emerging areas, and investment opportunities for the year ahead.',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    category: 'Market Analysis'
  },
  {
    id: 2,
    title: '5 Tips for First-Time Property Buyers',
    excerpt: 'Essential advice for first-time home buyers in Pakistan, from budgeting and location selection to legal documentation and inspection checklists.',
    date: 'Dec 28, 2024',
    readTime: '4 min read',
    category: 'Buyer\'s Guide'
  },
  {
    id: 3,
    title: 'Why Renovation Increases Property Value',
    excerpt: 'Discover how strategic renovation projects can significantly boost your property\'s market value, with ROI analysis for common improvement areas.',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    category: 'Investment'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest Insights</h2>
          <div className="flex justify-center mt-4 mb-4">
            <div className="h-1 w-20 rounded-full bg-primary"></div>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Real Estate Market Trends, Tips & Expert Advice
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border p-6 shadow-sm h-full group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary">
              <div className="flex-1 flex flex-col gap-4">
                <span className="inline-flex items-center justify-center rounded-md border border-transparent bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-medium w-fit">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 pt-4 border-t border-border/50 mt-auto">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
