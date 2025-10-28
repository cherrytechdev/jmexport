import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Header from "./layout/Header";
import AboutUs from "./components/section/AboutUs";
import Commitment from "./components/section/Commitment";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Contact />
      <div className="h-screen"></div>
      <AboutUs/>
      <Commitment/>
      <Footer/>
    </>
  );
}

export default App;
