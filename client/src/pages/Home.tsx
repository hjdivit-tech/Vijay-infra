import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import HomeAutomation from "@/components/sections/HomeAutomation";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <HomeAutomation />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
