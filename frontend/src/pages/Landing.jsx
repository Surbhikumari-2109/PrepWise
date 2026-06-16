import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Stats from "../components/Stats";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      {/* <Stats /> */}

      <section id="about">
        <Features />
      </section>

      <Footer />
    </div>
  );
};

export default Landing;