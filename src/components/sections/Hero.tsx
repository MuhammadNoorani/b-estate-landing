
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,hsl(0,0%,97%),hsl(210,40%,98%))]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-1/2 bg-gradient-to-r from-transparent to-primary/5" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-element" style={{ "--delay": 0 } as React.CSSProperties}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
              <span>B-ESTATES</span>
            </div>
            <h1 className="heading-xl text-estate-950 mb-6">
              Buy, Sell & Lease Residential, Commercial & Pre-Construction
            </h1>
            <p className="text-lg text-estate-700 mb-8 max-w-xl">
              Buy, Sell & Lease Residential, Commercial & Pre-Construction Properties in Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact-us" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn-outline flex items-center group">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="relative fade-in-element" style={{ "--delay": 2 } as React.CSSProperties}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Luxury real estate" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-xl overflow-hidden shadow-xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                alt="Modern interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
