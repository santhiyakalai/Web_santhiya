import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CertificationsSection from '../components/CertificationsSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = 'Voyago International - Premium Coconut Products';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      
      {/* CTA Banner */}
      <section className="bg-green-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Import Premium Coconut Products?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join our growing list of satisfied clients worldwide. Contact us today to discuss your business needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-green-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Request a Quote
              <Mail className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <CertificationsSection />
    </div>
  );
};

export default HomePage;