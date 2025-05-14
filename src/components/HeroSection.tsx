import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/coconut.jpg')",
          opacity: 0.7 
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className={`max-w-2xl transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Premium Coconut Products for Global Markets
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Voyago International: Your trusted partner for high-quality coconut exports worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-10 rounded-full bg-white opacity-70"></div>
        <span className="text-white text-sm mt-2">Scroll Down</span>
      </div>
    </section>
  );
};

export default HeroSection;