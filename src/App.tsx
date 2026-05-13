import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials';
import MortgageCalculator from './components/MortgageCalculator';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <MortgageCalculator />
        <Blog />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
