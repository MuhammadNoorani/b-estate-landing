
import { Phone, Calendar } from "lucide-react";
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
        
        <div className="flex flex-col justify-between">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-estate-900">Find Your Ideal Property</h3>
            <p className="text-estate-600 mb-6">
              Browse the best Residential, Commercial, and Pre-Construction listings across Canada. Our team is ready to help you find your perfect space.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Phone className="h-6 w-6 text-primary mb-4" />
                <h4 className="text-lg font-medium mb-2">Call Us</h4>
                <p className="text-estate-600">Have questions? Call us directly:</p>
                <a href="tel:+12345678900" className="text-primary font-medium">+ 123 45 67 89</a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Calendar className="h-6 w-6 text-primary mb-4" />
                <h4 className="text-lg font-medium mb-2">Book a Call</h4>
                <p className="text-estate-600">Ready to make your step in real estate?</p>
                <a href="#" className="btn-primary inline-flex mt-2 text-sm px-4 py-2">Book Now</a>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden h-72 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115773.58437001048!2d51.46246225!3d25.28540425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1650451034186!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Doha, Qatar"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
