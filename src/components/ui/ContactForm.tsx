
import { useState } from "react";
import { toast } from "sonner";

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService = "Buy Property" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    service: defaultService,
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Form submitted successfully!");
      // Reset form after successful submission
      setFormData({
        service: defaultService,
        name: "",
        phone: "",
        email: "",
        message: ""
      });
      setLoading(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-estate-700 mb-1">
            Service<span className="text-secondary">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-estate-200 focus:ring-2 focus:ring-primary/30 focus:border-primary transition duration-150 outline-none bg-white"
            required
          >
            <option value="Buy Property">Buy Property</option>
            <option value="Sell Property">Sell Property</option>
            <option value="Rent Property">Rent Property</option>
            <option value="List Property">List Property</option>
            <option value="Property Valuation">Property Valuation</option>
            <option value="Commercial Real Estate">Commercial Real Estate</option>
            <option value="Residential Real Estate">Residential Real Estate</option>
            <option value="Pre-Construction">Pre-Construction</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-estate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-estate-200 focus:ring-2 focus:ring-primary/30 focus:border-primary transition duration-150 outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-estate-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+123 456 789 00"
              className="w-full px-4 py-3 rounded-lg border border-estate-200 focus:ring-2 focus:ring-primary/30 focus:border-primary transition duration-150 outline-none"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-estate-700 mb-1">
            Email Address<span className="text-secondary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-estate-200 focus:ring-2 focus:ring-primary/30 focus:border-primary transition duration-150 outline-none"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-estate-700 mb-1">
            Your Message<span className="text-secondary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Explain it in details..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-estate-200 focus:ring-2 focus:ring-primary/30 focus:border-primary transition duration-150 outline-none resize-none"
            required
          ></textarea>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary flex items-center justify-center py-4 text-base"
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
