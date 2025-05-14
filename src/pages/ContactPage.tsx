import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Globe, Truck, FileText } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = 'Contact Us - Voyago International';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero section */}
      <section className="pt-36 pb-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-green-100">
              Get in touch with our team to discuss your business needs, request a quote, or learn more about our premium coconut products.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information and form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our dedicated export team is ready to assist you with any questions about our products, 
                pricing, minimum order quantities, shipping, and documentation.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      123 Export Zone, Colombo 10<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+94112345678" className="hover:text-green-700 transition-colors">
                        +94 11 234 5678
                      </a>
                      <br />
                      <a href="tel:+94777123456" className="hover:text-green-700 transition-colors">
                        +94 777 123 456 (Mobile)
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@voyagointernational.com" className="hover:text-green-700 transition-colors">
                        info@voyagointernational.com
                      </a>
                      <br />
                      <a href="mailto:exports@voyagointernational.com" className="hover:text-green-700 transition-colors">
                        exports@voyagointernational.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (Sri Lanka Time)<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Markets</h3>
                <p className="text-gray-600 mb-4">
                  We export to countries worldwide, with a strong presence in:
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-green-700 mr-2" />
                    <span>European Union</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-green-700 mr-2" />
                    <span>Middle East</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-green-700 mr-2" />
                    <span>North America</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-green-700 mr-2" />
                    <span>Asia Pacific</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Export Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      All shipments include proper export documentation, phytosanitary certificates, and quality certifications.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-green-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      We handle all export procedures and can arrange shipping via sea or air freight.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-700 mb-8">
                Fill out the form below to get in touch with our team. We'll respond to your inquiry as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our main office and export facility in Colombo, Sri Lanka.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden h-[400px]">
              {/* For demonstration, I'm using a placeholder instead of an actual Google Maps embed */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-green-700 mx-auto mb-2" />
                  <p className="text-lg font-semibold text-gray-800">Voyago International Pvt Limited</p>
                  <p className="text-gray-600">123 Export Zone, Colombo 10, Sri Lanka</p>
                  <p className="mt-4 text-sm text-gray-500">
                    Map would be displayed here. For security and privacy reasons, an actual Google Maps embed would require an API key.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our products and export process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: 'What is the minimum order quantity?',
                  answer: 'Minimum order quantities vary by product. For semi-husked coconuts, our minimum order is one 20ft container (approximately 10,000 nuts). For processed products like coconut oil or desiccated coconut, we can accommodate smaller orders. Please contact us for specific product MOQs.'
                },
                {
                  question: 'What are your shipping terms?',
                  answer: 'We offer both FOB (Free On Board) and CIF (Cost, Insurance, and Freight) terms. Our team can help determine the best option for your specific requirements and destination.'
                },
                {
                  question: 'Do you provide samples?',
                  answer: 'Yes, we provide samples of our products for serious business inquiries. Sample costs and shipping will be discussed based on your location and requirements.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept payment via T/T (Telegraphic Transfer), Letter of Credit (L/C), and for established clients, we can discuss other payment arrangements. Our standard terms are 50% advance payment and 50% before shipment.'
                },
                {
                  question: 'How long does shipping take?',
                  answer: 'Shipping times vary depending on the destination. Typically, sea freight takes 2-6 weeks depending on your location. We provide estimated delivery times when confirming your order.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;