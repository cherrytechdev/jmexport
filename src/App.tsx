import Hero from "./components/Hero";
import Header from "./layout/Header";
import AboutUs from "./components/section/AboutUs";
import Commitment from "./components/section/Commitment";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="h-screen"></div>
      <AboutUs/>
      <Commitment/>
      <Footer/>
    </>
  );
}

export default App;
