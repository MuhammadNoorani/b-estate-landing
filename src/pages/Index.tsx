
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
