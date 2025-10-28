import Hero from "./components/Hero";
import Products from "./components/Products";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <div className="h-screen"></div>
    </>
  );
}

export default App;
