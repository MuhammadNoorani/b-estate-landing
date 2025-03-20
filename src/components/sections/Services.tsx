
import { Building, Building2, Hotel } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-estate-100">
      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-estate-900">{title}</h3>
      <p className="text-estate-600">{description}</p>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Residential Real Estate",
      description: "Find your dream home, sell your property, or discover the perfect rental with our expert guidance.",
      icon: <Building className="h-6 w-6 text-primary" />
    },
    {
      title: "Commercial Real Estate",
      description: "Expand your business with the right location, invest in commercial properties, or lease spaces with our assistance.",
      icon: <Building2 className="h-6 w-6 text-primary" />
    },
    {
      title: "Pre-Construction Developments",
      description: "Be the first to invest in upcoming properties and secure the best units in new developments.",
      icon: <Hotel className="h-6 w-6 text-primary" />
    }
  ];
  
  return (
    <section className="section-padding bg-estate-50" id="services">
      <div className="text-center mb-16">
        <h2 className="heading-lg text-estate-950 mb-4">Real Estate Services</h2>
        <p className="text-estate-600 max-w-2xl mx-auto">
          Comprehensive solutions for all your real estate needs, delivered by our experienced team of professionals.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
