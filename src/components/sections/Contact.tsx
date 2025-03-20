
import { Phone } from "lucide-react";
import ContactForm from "../ui/ContactForm";

export default function Contact() {
  return (
    <section className="section-padding bg-estate-50" id="contact">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="heading-lg text-estate-950 mb-4">Contact Us</h2>
          <p className="text-estate-600 mb-8">
            Fill out this form, and let's get in touch. We're here to answer any questions you may have about our services.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <ContactForm />
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-estate-900">Find Your Ideal Property</h3>
            <p className="text-estate-600 mb-6">
              Browse the best Residential, Commercial, and Pre-Construction listings across Canada. Our team is ready to help you find your perfect space.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Phone className="h-6 w-6 text-primary mb-4" />
              <h4 className="text-lg font-medium mb-2">Call Us</h4>
              <p className="text-estate-600">Have questions? Call us directly:</p>
              <a href="tel:+123456789" className="text-primary font-medium">+ 123 45 67 89</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
