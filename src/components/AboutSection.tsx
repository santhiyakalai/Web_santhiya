import React, { useRef, useEffect, useState } from 'react';
import { Award, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const advantages = [
    {
      icon: <Shield className="h-8 w-8 text-green-700" />,
      title: 'Quality Assured',
      description: 'All our products meet stringent international quality standards and certifications.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-700" />,
      title: 'Global Reach',
      description: 'We export to over 30 countries across 5 continents with reliable shipping partners.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-700" />,
      title: 'Sustainable Practices',
      description: 'Environmentally responsible sourcing and production with minimal carbon footprint.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-700" />,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to quality, timely delivery, and customer satisfaction.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Voyago International</h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 15 years of experience in the coconut industry, Voyago International has established 
              itself as a leading exporter of premium coconut products.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our commitment to quality, sustainability, and customer satisfaction has made us the preferred 
              choice for importers and distributors around the world.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We work directly with farmers and producers to ensure that our products meet international 
              standards while supporting local communities and sustainable farming practices.
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

          <div 
            className={`relative transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;