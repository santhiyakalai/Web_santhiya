import React, { useRef, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 'semi-husked',
      title: 'Semi-Husked Coconuts',
      description: 'Premium quality semi-husked coconuts from the finest plantations, perfect for export.',
      imageUrl: 'https://images.pexels.com/photos/5945746/pexels-photo-5945746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'coconut-oil',
      title: 'Virgin Coconut Oil',
      description: 'Pure, cold-pressed virgin coconut oil with natural fragrance and nutritional benefits.',
      imageUrl: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'desiccated-coconut',
      title: 'Desiccated Coconut',
      description: 'Finely grated dried coconut meat, ideal for culinary applications and baking.',
      imageUrl: 'images/pexels-samerdaboul-1652001.jpg'
    },
    {
      id: 'coconut-water',
      title: 'Natural Coconut Water',
      description: 'Refreshing and hydrating natural coconut water packed with electrolytes and nutrients.',
      imageUrl: 'https://images.pexels.com/photos/12287138/pexels-photo-12287138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality coconut products sourced from sustainable plantations and processed to international standards.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-1000 delay-${index * 100} transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div 
            className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide"
            ref={containerRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="snap-center flex-shrink-0 w-4/5"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-3">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;