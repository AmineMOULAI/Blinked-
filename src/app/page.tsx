import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Metrics } from "./components/Metrics";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Metrics />
      <Testimonials />
      <Footer />
    </main>
  );
}