import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";
import Container from "./Container";

function Hero() {
  const heroRef = useRef(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // Créer une timeline pour séquencer les animations
      const tl = gsap.timeline({ delay: 0.3 });
      timelineRef.current = tl;

      // Animation du fond
      tl.fromTo(
        heroRef.current,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      // Animation du overlay
      tl.fromTo(
        ".hero-overlay",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=1"
      );

      // Animation séquentielle du titre
      tl.fromTo(
        ".hero-title",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Animation du paragraphe
      tl.fromTo(
        ".hero-description",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Animation du bouton
      tl.fromTo(
        ".hero-button",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      id="hero"
      style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
      className="bg-cover bg-center relative text-white rounded-b-4xl lg:rounded-b-[80px] overflow-hidden"
    >
      <div className="hero-overlay absolute inset-0 bg-secondary/50"></div>
      <Container className="min-h-screen flex justify-center flex-col gap-8 pb-5">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-[52px] font-semibold">
          <span className="block overflow-hidden">
            <span className="block">Vanilla and Spices —</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">The Taste of Madagascar</span>
          </span>
        </h1>
        <p className="hero-description lg:w-2/3">
          Bienvenue chez JM EXPORT, exportateur de vanille et d'épices de
          Madagascar. Nous sommes spécialisés dans la collecte, la préparation,
          le conditionnement et l'exportation de produits naturels de haute
          qualité. <br />
          Notre mission est de partager avec le monde entier le goût authentique
          et les richesses aromatiques de Madagascar, tout en soutenant une
          production éthique et durable.
        </p>
        <div className="hero-button">
          <Button label="Découvrez JMExport" />
        </div>
      </Container>
    </div>
  );
}

export default Hero;
