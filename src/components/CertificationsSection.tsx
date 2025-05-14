import React, { useRef, useEffect, useState } from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const CertificationsSection: React.FC = () => {
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

  const certifications = [
    {
      id: 'iso',
      title: 'ISO 22000',
      description: 'Food safety management system certification ensuring our products meet international safety standards.'
    },
    {
      id: 'haccp',
      title: 'HACCP Certified',
      description: 'Hazard Analysis Critical Control Point certification for food safety management.'
    },
    {
      id: 'organic',
      title: 'Organic Certified',
      description: 'Our products meet international organic farming and processing standards.'
    },
    {
      id: 'gmp',
      title: 'GMP Certified',
      description: 'Good Manufacturing Practices certification for quality and safety in food processing.'
    }
  ];

  const standards = [
    'Premium quality control at every stage',
    'Sustainable and environmentally friendly practices',
    'Ethical sourcing and fair trade principles',
    'Regular quality audits and inspections',
    'Full traceability from farm to customer',
    'Stringent testing for contaminants'
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quality & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Voyago International, we maintain the highest standards of quality and safety. 
            Our products are backed by internationally recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-green-700 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Our Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id}
                  className={`bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-green-700 transition-all duration-500 delay-${index * 100} transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{cert.title}</h4>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-700 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Quality Standards</h3>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-6">
                We implement rigorous quality control processes at every stage of production,
                from sourcing to packaging and shipping, ensuring our products meet or exceed
                international quality standards.
              </p>
              
              <ul className="space-y-3">
                {standards.map((standard, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start transition-all duration-500 delay-${index * 100} transform ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                    }`}
                  >
                    <CheckCircle className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;