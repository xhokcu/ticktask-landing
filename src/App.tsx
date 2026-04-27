import Hero from "./components/Hero";
import Features from "./components/Features";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <div className="divider" />
      <Features />
      <div className="divider" />
      <TechStack />
      <Footer />
    </div>
  );
}
