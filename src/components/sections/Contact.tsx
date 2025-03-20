
import ContactForm from "../ui/ContactForm";

export default function Contact() {
  return (
    <section className="section-padding bg-estate-50" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-lg text-estate-950 mb-4">Contact Us</h2>
          <p className="text-estate-600 mb-8 max-w-2xl mx-auto">
            Fill out this form, and let's get in touch. We're here to answer any questions you may have about our services.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
