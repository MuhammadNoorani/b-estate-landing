
import { Clock, Target, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="section-padding" id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="heading-lg text-estate-950 mb-6">About our Company</h2>
          <p className="text-estate-600 mb-6">
            Let's get acquainted! We're not your average real estate agency. Babut Estate Services is a team of dedicated 
            professionals who live and breathe property management, investment, and seamless transactions. Our mission 
            is to turn your real estate goals into reality, one deal at a time! Whether you're buying, selling, 
            or managing properties, we bring expertise, innovation, and a client-first approach to make the process 
            smooth and stress-free.
          </p>
          
          <div className="space-y-6 mt-8">
            <div className="flex">
              <div className="mr-4 mt-1">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Our History</h3>
                <p className="text-estate-600">
                  Founded with a vision to transform the real estate experience, we've grown from a small team to 
                  a trusted name in property services across Canada.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
                <p className="text-estate-600">
                  At Babut Estate Services, our mission is to provide seamless, client-focused real estate solutions. 
                  We are dedicated to helping individuals, families, and investors navigate the real estate market with 
                  confidence. Through expert guidance, innovative technology, and personalized service, we strive to 
                  make every transaction smooth, successful, and rewarding.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Our Vision</h3>
                <p className="text-estate-600">
                  We envision a future where real estate is simplified, accessible, and stress-free for everyone. 
                  Babut Estate Services aims to be a leader in the industry by leveraging modern technology, 
                  fostering strong client relationships, and maintaining the highest standards of integrity. 
                  Our goal is to create a real estate experience that is not only efficient but also 
                  empowering for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80" 
              alt="Team meeting" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-8 -right-8 w-64 p-6 rounded-xl bg-white shadow-xl">
            <div className="flex flex-col space-y-1 mb-2">
              <span className="text-5xl font-bold text-primary">Quality</span>
              <span className="text-lg font-medium text-estate-700">Service & Excellence</span>
            </div>
            <p className="text-estate-600 text-sm">
              Our commitment to excellence ensures your real estate journey exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
