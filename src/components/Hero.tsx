import Button from "./Button";
import Container from "./Container";

function Hero() {
  return (
    <div
      id="hero"
      style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
      className="bg-cover bg-center relative text-white rounded-b-4xl lg:rounded-b-[80px] overflow-hidden"
    >
      <div className="absolute inset-0 bg-secondary/50 "></div>
      <Container className="min-h-screen flex justify-center flex-col gap-8 pb-5 ">
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold  ">
          Vanilla and Spices — <br className="hidden lg:block" /> The Taste of
          Madagascar
        </h1>
        <p className="lg:w-2/3 ">
          Bienvenue chez JM EXPORT, exportateur de vanille et d’épices de
          Madagascar. Nous sommes spécialisés dans la collecte, la préparation,
          le conditionnement et l’exportation de produits naturels de haute
          qualité. <br />
          Notre mission est de partager avec le monde entier le goût authentique
          et les richesses aromatiques de Madagascar, tout en soutenant une
          production éthique et durable.
        </p>
        <Button label="Découvrez JMExport" />
      </Container>
    </div>
  );
}

export default Hero;
