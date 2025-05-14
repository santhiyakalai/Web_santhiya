import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, Truck, PieChart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
  specifications: string[];
  applications: string[];
}

const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    // Update document title when component mounts
    document.title = 'Our Products - Voyago International';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Check for hash in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setSelectedProduct(id);
      
      // Scroll to product section after a small delay
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  const products: Product[] = [
    {
      id: 'semi-husked',
      title: 'Semi-Husked Coconuts',
      imageUrl: 'https://images.pexels.com/photos/5945746/pexels-photo-5945746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      shortDescription: 'Premium quality semi-husked coconuts sourced from select plantations.',
      longDescription: 'Our semi-husked coconuts are carefully selected from premium plantations, ensuring the highest quality and freshness. The partial husk retention provides extended shelf life while making it easier to handle and process. Each coconut is inspected for quality, size, and maturity before packing and export.',
      specifications: [
        'Variety: King Coconut / Ceylon Coconut',
        'Size: Medium to Large (15-20 cm diameter)',
        'Weight: 600-800 grams per nut',
        'Husk Retention: 30-40%',
        'Water Content: High',
        'Shelf Life: 2-3 weeks under optimal conditions',
        'Packaging: Mesh bags or crates of 10, 25, or 50 nuts'
      ],
      applications: [
        'Direct consumption of coconut water and meat',
        'Extraction of coconut milk and cream',
        'Production of desiccated coconut',
        'Culinary uses in restaurants and food service',
        'Retail sale in supermarkets and specialty stores'
      ]
    },
    {
      id: 'coconut-oil',
      title: 'Virgin Coconut Oil',
      imageUrl: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      shortDescription: 'Premium cold-pressed virgin coconut oil with natural aroma and flavor.',
      longDescription: 'Our virgin coconut oil is produced using a cold-pressing method that preserves all the natural nutrients, aroma, and flavor of fresh coconuts. The oil is extracted from fresh coconut meat without the use of chemicals or high heat, resulting in a product of exceptional quality and purity.',
      specifications: [
        'Type: Cold-pressed Virgin Coconut Oil',
        'Color: Crystal clear',
        'Aroma: Distinctive fresh coconut scent',
        'Free Fatty Acid: <0.2%',
        'Moisture Content: <0.1%',
        'Packaging: 200ml, 500ml, 1L glass bottles or 5L, 20L food-grade containers',
        'Shelf Life: 24 months in proper storage conditions'
      ],
      applications: [
        'Culinary applications (cooking, baking, salad dressings)',
        'Cosmetic and personal care products',
        'Hair and skin moisturizing',
        'Massage oil',
        'Health supplements',
        'Food processing industry'
      ]
    },
    {
      id: 'desiccated-coconut',
      title: 'Desiccated Coconut',
      imageUrl: 'images/pexels-samerdaboul-1652001.jpg',
      shortDescription: 'Fine, medium, and coarse grades of premium desiccated coconut.',
      longDescription: 'Our desiccated coconut is produced from carefully selected mature coconuts. The white kernel is separated, washed, blanched, disintegrated, dried, and sifted to achieve the desired particle size. The entire process maintains strict hygiene standards to ensure a high-quality product with extended shelf life.',
      specifications: [
        'Color: Pure white',
        'Moisture: <3%',
        'Fat content: 65-68%',
        'Cuts available: Fine, Medium, Coarse, Chips, Threads',
        'Packaging: 25kg food-grade multi-wall kraft paper bags with PE liner',
        'Shelf Life: 12 months in proper storage conditions'
      ],
      applications: [
        'Bakery products (cakes, cookies, pastries)',
        'Confectionery industry',
        'Breakfast cereals and granola bars',
        'Savory dishes and curries',
        'Ice cream toppings',
        'Food processing and ingredient manufacturing'
      ]
    },
    {
      id: 'coconut-water',
      title: 'Natural Coconut Water',
      imageUrl: 'https://images.pexels.com/photos/12287138/pexels-photo-12287138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      shortDescription: 'Pure, refreshing coconut water packed with natural electrolytes.',
      longDescription: 'Our natural coconut water is harvested from young, green coconuts at the perfect stage of maturity to ensure optimal flavor and nutritional content. It is carefully extracted, filtered, and packaged using pasteurization techniques that preserve its natural taste and nutritional properties without additives or preservatives.',
      specifications: [
        'Source: Young green coconuts',
        'Processing: Flash pasteurized to preserve nutrients',
        'Sugar content: All natural, no added sugar',
        'Additives: None, 100% pure coconut water',
        'Packaging: 330ml, 500ml, 1L Tetra Pak or glass bottles',
        'Shelf Life: 12 months unopened, 3-5 days refrigerated after opening'
      ],
      applications: [
        'Natural sports and hydration drink',
        'Healthy beverage alternative',
        'Mixer for cocktails and smoothies',
        'Culinary ingredient in sauces and desserts',
        'Post-workout recovery drink',
        'Retail sale in supermarkets and convenience stores'
      ]
    }
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="pt-32 pb-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Coconut Products</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover our extensive range of high-quality coconut products, sourced ethically and processed to international standards.
          </p>
        </div>
      </section>

      {/* Products navigation */}
      <section className="py-10 bg-gray-100 sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className={`px-6 py-3 rounded-full transition-colors ${
                  selectedProduct === product.id
                    ? 'bg-green-700 text-white'
                    : 'bg-white text-gray-800 hover:bg-green-100'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProduct(product.id);
                  const element = document.getElementById(product.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {product.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual product sections */}
      {products.map((product) => (
        <section 
          key={product.id} 
          id={product.id}
          className={`py-20 ${
            products.indexOf(product) % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product image */}
              <div className={`order-1 ${products.indexOf(product) % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Product details */}
              <div className={`order-2 ${products.indexOf(product) % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h2>
                <p className="text-xl text-gray-700 mb-6">
                  {product.shortDescription}
                </p>
                <p className="text-gray-600 mb-8">
                  {product.longDescription}
                </p>
                
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <FileText className="h-5 w-5 text-green-700 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800">Specifications</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-700 mr-2">•</span>
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-3">
                    <PieChart className="h-5 w-5 text-green-700 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800">Applications</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.applications.map((app, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-700 mr-2">•</span>
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Request Pricing and Samples
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Shipping section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Truck className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold">Shipping & Logistics</h2>
              </div>
              <p className="text-lg text-green-100 mb-6">
                We offer comprehensive international shipping solutions for our coconut products, ensuring they reach your destination safely and efficiently.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>FCL (Full Container Load) and LCL (Less than Container Load) options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Air freight available for smaller, urgent orders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Comprehensive documentation including phytosanitary certificates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Tracking and real-time updates on shipment status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Export to all major global markets including Europe, Middle East, Asia, and North America</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-green-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get Shipping Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-8 w-8 mr-3" />
                <h2 className="text-3xl font-bold">Quality Assurance</h2>
              </div>
              <p className="text-lg text-green-100 mb-6">
                We maintain strict quality control processes at every stage from sourcing to delivery, ensuring our products meet international standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>ISO 22000 certified production facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Regular laboratory testing for contaminants and quality parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Temperature-controlled storage and shipping where required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Batch tracking system for full product traceability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Dedicated quality assurance team with industry experience</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-green-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Request Quality Certificates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Place an Order?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Whether you're interested in a sample or a full container load, our team is ready to assist you with competitive pricing and flexible terms.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-md font-medium transition-colors text-lg"
          >
            Contact Us for Quotation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;