import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCatalog />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
