import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Award, Users, Clock, Globe, Leaf, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = 'About Us - Voyago International';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

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
  
  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Voyago International was established with a vision to export premium coconut products to global markets.'
    },
    {
      year: '2011',
      title: 'First Major Export',
      description: 'Secured our first major contract to export semi-husked coconuts to European markets.'
    },
    {
      year: '2014',
      title: 'Product Expansion',
      description: 'Expanded our product range to include coconut oil and desiccated coconut products.'
    },
    {
      year: '2016',
      title: 'ISO Certification',
      description: 'Achieved ISO 22000 certification for our production facilities and processes.'
    },
    {
      year: '2019',
      title: 'Global Reach',
      description: 'Expanded our export network to over 30 countries across 5 continents.'
    },
    {
      year: '2022',
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive sustainability program focusing on eco-friendly packaging and carbon footprint reduction.'
    },
    {
      year: '2024',
      title: 'Digital Transformation',
      description: 'Implemented advanced supply chain management systems and digital platforms for better service.'
    }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-green-700" />,
      title: 'Quality',
      description: 'We maintain rigorous quality standards at every stage of our operations, from sourcing to delivery.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-700" />,
      title: 'Sustainability',
      description: 'Our business practices focus on environmental responsibility and supporting local communities.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-700" />,
      title: 'Partnership',
      description: 'We build lasting relationships with customers, suppliers, and stakeholders based on mutual trust.'
    },
    {
      icon: <Globe className="h-8 w-8 text-green-700" />,
      title: 'Global Perspective',
      description: 'Understanding diverse market needs and adapting our products and services accordingly.'
    },
    {
      icon: <Target className="h-8 w-8 text-green-700" />,
      title: 'Innovation',
      description: 'Continuously improving our products, processes, and services to meet evolving market demands.'
    }
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="pt-36 pb-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Voyago International</h1>
            <p className="text-xl text-green-100 mb-4">
              A leading exporter of premium coconut products with over 15 years of industry experience.
            </p>
            <p className="text-green-200">
              Quality. Sustainability. Global Excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2008, Voyago International began as a small family business with a passion for 
                Sri Lanka's premium coconut products and a vision to share them with the world.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over the years, we have grown into a leading exporter of high-quality coconut products, 
                serving markets across Europe, Middle East, Asia, and North America. Our journey has been 
                defined by our commitment to quality, innovation, and sustainable business practices.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we work directly with over 500 coconut farmers, supporting local communities while 
                ensuring the highest quality products for our international clients. Our state-of-the-art 
                processing facilities combine traditional knowledge with modern technology to deliver 
                exceptional products that meet international standards.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5560516/pexels-photo-5560516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Founder" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">Rajith Perera</p>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Coconut plantation" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-700 text-white p-6 rounded-lg shadow-lg md:max-w-xs">
                <p className="text-2xl font-bold mb-2">15+</p>
                <p>Years of experience in the coconut export industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the globally recognized leader in premium coconut products, setting industry standards
                for quality, sustainability, and innovation while supporting the communities that make
                our success possible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional coconut products to international markets while maintaining 
                ethical business practices, supporting sustainable agriculture, and creating value
                for our customers, partners, employees, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The key milestones that have shaped Voyago International over the years.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } transition-all duration-1000 delay-${index * 100} transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="mb-1 text-green-800 font-bold text-lg">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-green-700 text-white shadow-lg z-10">
                    <Clock className="h-6 w-6" />
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our business and relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving Voyago International's success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Rajith Perera',
                position: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/5560516/pexels-photo-5560516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                name: 'Sarah Mendis',
                position: 'Chief Operations Officer',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                name: 'Anwar Khan',
                position: 'Export Director',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              },
              {
                name: 'Meena Patel',
                position: 'Quality Assurance Manager',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Voyago International</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Join our growing network of satisfied clients worldwide. Let's discuss how our premium
            coconut products can benefit your business.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-green-800 hover:bg-gray-100 px-8 py-4 rounded-md font-medium transition-colors text-lg"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;