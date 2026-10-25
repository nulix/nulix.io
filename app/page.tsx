import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Security from "./components/sections/Security";
import Integration from "./components/sections/Integration";
import Pricing from "./components/sections/Pricing";
import Comparison from "./components/sections/Comparison";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <Integration />
        <Pricing />
        <Comparison />
        <Contact />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
