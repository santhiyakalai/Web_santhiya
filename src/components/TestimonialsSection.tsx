import React, { useRef, useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Michael Johnson',
      position: 'Import Manager',
      company: 'Global Foods Ltd',
      content: 'We\'ve been importing semi-husked coconuts from Voyago International for over 3 years now. Their consistent quality and reliable shipping have made them our preferred supplier.',
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Sarah Williams',
      position: 'Procurement Director',
      company: 'Organic Markets Inc',
      content: 'The virgin coconut oil from Voyago is exceptional. Our customers love the quality, and we appreciate their transparent business practices and ethical sourcing.',
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'David Chen',
      position: 'CEO',
      company: 'Pacific Distributors',
      content: 'Voyago International has been our trusted partner for coconut products for years. Their product range is impressive, and their customer service is outstanding.',
      rating: 4,
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Emma Rodriguez',
      position: 'Supply Chain Manager',
      company: 'Tropical Goods Co',
      content: 'We\'ve tried many suppliers, but Voyago delivers the best quality coconut water consistently. Their communication and flexibility with orders have made our business relationship seamless.',
      rating: 5,
      imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
      setCurrentIndex(Math.min(testimonials.length - 1, currentIndex + 1));
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to serve businesses worldwide with our premium coconut products. 
            Here's what some of our clients have to say about their experience with Voyago International.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Mobile and Tablet Carousel */}
        <div className="lg:hidden relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="snap-center flex-shrink-0 w-4/5 sm:w-2/3"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-3">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition-colors"
              aria-label="Previous testimonial"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? 'bg-green-700' : 'bg-gray-300'
                }`}
              />
            ))}
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition-colors"
              aria-label="Next testimonial"
              disabled={currentIndex === testimonials.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;