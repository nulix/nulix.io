import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

const description =
  "Custom hardware design, PCB layout, firmware, and embedded Linux development (Yocto, Buildroot, Docker) services from NULIX.";

export const metadata: Metadata = {
  title: "Engineering Services",
  description,
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Engineering Services – NULIX",
    description,
    url: "/services/",
  },
};

const services = [
  {
    title: "Custom Hardware Design",
    desc: "Schematic capture, PCB layout, DFM/DFT, prototyping, and manufacturing support for your embedded product.",
  },
  {
    title: "Firmware Development",
    desc: "Bare-metal, RTOS, and low-level driver development for MCUs and SoCs with a focus on security and reliability.",
  },
  {
    title: "Embedded Linux Development",
    desc: "Yocto Project, Buildroot, device trees, kernel customization, Docker, and full system integration for your target hardware.",
  },
  {
    title: "OTA & Fleet Management",
    desc: "End-to-end integration of the NULIX OTA platform with atomic A/B updates, delta images, staged rollouts, and automatic rollback.",
  },
];

const serviceList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.desc,
      provider: {
        "@type": "Organization",
        name: "NULIX",
        url: "https://nulix.io",
      },
      areaServed: "Worldwide",
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceList} />
      <Header />
      <main className="wrap" style={{ paddingTop: 64, paddingBottom: 96 }}>
        <h1 className="section-title" style={{ marginBottom: 16 }}>Engineering Services</h1>
        <p className="lead" style={{ marginBottom: 48 }}>From hardware to firmware to over-the-air updates, we help you ship reliable embedded products.</p>
        <div className="grid-2">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3 style={{ marginBottom: 10 }}>{s.title}</h3>
              <p className="muted">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="panel cta" style={{ marginTop: 64 }}>
          <h2>Have a project in mind?</h2>
          <p>Tell us about your hardware, target OS, and goals. We'll help you get from prototype to production.</p>
          <div className="btn-row">
            <a href="/#demo" className="btn btn-primary">Get in touch</a>
            <a href="/#features" className="btn btn-ghost">See the OTA platform</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
