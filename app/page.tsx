import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
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
import { faq } from "./data/home";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NULIX",
  url: "https://nulix.io",
  logo: "https://platform.nulix.io/favicon.ico",
  email: "hello@nulix.hr",
  description: "OTA update platform for embedded Linux devices.",
};

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NULIX",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux",
  url: "https://nulix.io",
  description:
    "Atomic A/B updates, delta images and staged rollouts for Yocto, Buildroot and Debian fleets.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier for evaluation and small fleets.",
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organization, softwareApplication, faqPage]} />
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
