
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/ui/ContactForm";
import { Building, Building2, Hotel, ArrowRight, Check } from "lucide-react";

// Service data
const services = {
  residential: {
    title: "Residential Real Estate",
    subtitle: "Find your dream home with us",
    description: "Choosing between buying and renting a property is one of the most important decisions you'll make. At Babut Estate Services, we specialize in providing expert guidance to help you navigate this choice with confidence. Whether you're looking for the stability of home ownership or the flexibility of renting, we ensure every solution aligns with your lifestyle, needs, and long-term goals.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    icon: <Building className="h-6 w-6 text-primary" />,
    benefits: [
      {
        title: "Personalized Property Consultation",
        description: "Every client's situation is unique, which is why we offer tailored property consultations to help you determine whether buying or renting is the right option. We take the time to understand your financial goals, lifestyle preferences, and future plans. Our expert advisors guide you through market trends, investment potential, and costs associated with each option, empowering you with all the information you need."
      },
      {
        title: "Access to Exclusive Listings",
        description: "Whether you're buying or renting, having access to the right properties makes all the difference. Our extensive network provides you with exclusive listings—from dream homes to flexible rental spaces—across prime locations. With our team by your side, you'll find properties that perfectly match your budget and criteria, all while saving time and effort in your search."
      },
      {
        title: "End-to-End Support",
        description: "Navigating the process of buying or renting can be complex, but we're here to make it seamless. From helping you secure financing for a purchase to negotiating lease terms for a rental, we handle every detail with precision and care. Our dedicated support ensures that you can make informed decisions without the stress, whether you're signing a rental agreement or closing on a new home."
      },
      {
        title: "Aligning with Your Long-Term Vision",
        description: "The decision to buy or rent goes beyond the present; it's about creating a future that aligns with your aspirations. We work with you to evaluate how each choice fits into your long-term plans, providing financial and lifestyle insights to ensure your property journey supports your goals."
      }
    ]
  },
  commercial: {
    title: "Commercial Real Estate",
    subtitle: "Strategic spaces for your business",
    description: "Commercial real estate represents not just a physical space, but a strategic business decision that can significantly impact your success. At Babut Estate Services, we understand the unique challenges and opportunities in the commercial property market. Our expert team specializes in finding, acquiring, and optimizing commercial spaces that align perfectly with your business objectives, budget constraints, and future growth plans.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    icon: <Building2 className="h-6 w-6 text-primary" />,
    benefits: [
      {
        title: "Strategic Location Analysis",
        description: "The right location can make or break a business. Our team conducts in-depth market analysis to identify locations that will maximize foot traffic, visibility, and accessibility for your specific business type. We consider factors like demographic profiles, competitor proximity, zoning laws, and future development plans to ensure your commercial property investment is positioned for success."
      },
      {
        title: "Investment Property Evaluation",
        description: "For investors looking to diversify their portfolios, commercial real estate offers unique advantages. We help you evaluate potential investment properties based on current returns, appreciation potential, tenant quality, and market stability. Our comprehensive analysis includes financial projections, risk assessment, and exit strategy planning to guide your investment decisions."
      },
      {
        title: "Lease Negotiation & Management",
        description: "Navigating complex commercial leases requires expertise. Our specialists represent your interests in negotiating favorable terms, including rent structures, tenant improvement allowances, maintenance responsibilities, and renewal options. Once established, we can provide ongoing lease management services to ensure compliance and handle any issues that arise."
      },
      {
        title: "Property Development Consultation",
        description: "From ground-up construction to major renovations, our development expertise helps you maximize the potential of commercial properties. We guide you through feasibility studies, zoning approvals, contractor selection, and project management to transform your vision into a physical space that meets your operational needs and financial goals."
      }
    ]
  },
  "pre-construction": {
    title: "Pre-Construction Developments",
    subtitle: "Tomorrow's properties, today's investment",
    description: "Investing in pre-construction developments offers a unique opportunity to secure tomorrow's prime real estate at today's prices. At Babut Estate Services, we provide exclusive access to upcoming developments before they hit the public market. Our pre-construction services help you navigate this specialized investment strategy with confidence, ensuring you can capitalize on the potential for significant appreciation and customization options that only early investors enjoy.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    icon: <Hotel className="h-6 w-6 text-primary" />,
    benefits: [
      {
        title: "Early Access Advantage",
        description: "Through our established developer relationships, we provide you with privileged early access to pre-construction projects. This allows you to select premium units with the best views, layouts, and locations before they're available to the general public. Our clients often secure properties at initial release prices, which can be significantly lower than final market values."
      },
      {
        title: "Developer Credibility Assessment",
        description: "Not all developers deliver equal quality and reliability. Our team conducts thorough due diligence on each project's developer, examining their track record for quality construction, on-time delivery, financial stability, and after-sales service. This critical evaluation helps protect your investment and ensures you partner with reputable builders who stand behind their work."
      },
      {
        title: "Customization Opportunities",
        description: "Pre-construction investments often allow for personalization options unavailable in resale properties. We help you navigate the selection process for finishes, layouts, and upgrades to create a space that perfectly matches your preferences or target rental demographic. Our advice focuses on selections that maximize both livability and future resale value."
      },
      {
        title: "Extended Deposit Structure",
        description: "Pre-construction purchases typically offer the advantage of staggered deposit schedules spread throughout the construction period. This allows you to build equity gradually while giving you time to plan your finances. We help you understand the payment timeline and strategize your investment approach to maximize cash flow advantages."
      }
    ]
  }
};

export default function ServicePage() {
  const { serviceId = "" } = useParams<{ serviceId: string }>();
  const service = services[serviceId as keyof typeof services];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  
  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="heading-lg text-estate-950 mb-4">Service Not Found</h1>
          <p className="text-estate-600 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-estate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
                {service.icon}
                <span>Our Services</span>
              </div>
              <h1 className="heading-xl text-estate-950 mb-6">{service.title}</h1>
              <p className="text-lg text-estate-700 mb-8">{service.description}</p>
              <Link to="#contact-form" className="btn-primary">
                Get Started
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-estate-950 mb-4">Our Approach</h2>
            <p className="text-estate-600 max-w-2xl mx-auto">
              We provide comprehensive solutions tailored to your specific needs and goals.
            </p>
          </div>
          
          <div className="space-y-16">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-reverse" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-estate-900">{benefit.title}</h3>
                  </div>
                  <p className="text-estate-600">{benefit.description}</p>
                </div>
                
                <div className="rounded-xl overflow-hidden h-64 lg:h-80">
                  <img 
                    src={`https://images.unsplash.com/photo-${1550000000000 + index * 10000}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`} 
                    alt={benefit.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-estate-50" id="contact-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="heading-lg text-estate-950 mb-4">Get in Touch</h2>
            <p className="text-estate-600">
              Fill out this form to learn more about our {service.title.toLowerCase()} services
              and how we can help you achieve your real estate goals.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <ContactForm defaultService={serviceId === "commercial" ? "Commercial Real Estate" : (serviceId === "pre-construction" ? "Pre-Construction" : "Residential Real Estate")} />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
