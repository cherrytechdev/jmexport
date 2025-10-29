import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Vanilla from "../icons/Vanilla";
import Container from "./Container";
import { productData } from "../constant";
import ProductCard from "./display/ProductCard";

// Enregistrer ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Products() {
  const [activeProduct, setActiveProduct] = useState<"vanilla" | "spices">(
    "vanilla"
  );
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      // Animation du titre et de la décoration
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des onglets
      gsap.fromTo(
        tabsRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 85%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des cartes produits avec stagger
      gsap.fromTo(
        ".product-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: {
            amount: 0.4,
            from: "start",
          },
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de réapparition quand on change d'onglet
      const handleProductChange = () => {
        const tl = gsap.timeline();

        // Disparition des cartes actuelles
        tl.to(".product-card", {
          y: -30,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });

        // Réapparition des nouvelles cartes
        tl.to(".product-card", {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.4)",
        });
      };

      // Réanimer à chaque changement d'onglet
      const observer = new MutationObserver(() => {
        handleProductChange();
      });

      if (gridRef.current) {
        observer.observe(gridRef.current, {
          childList: true,
          subtree: true,
        });
      }

      return () => {
        observer.disconnect();
      };
    },
    { scope: sectionRef }
  );

  // Gestion du changement d'onglet avec animation
  const handleTabClick = (product: "vanilla" | "spices") => {
    setActiveProduct(product);
  };

  return (
    <Container
      id="product"
      className="py-10 flex flex-col gap-8 md:gap-14"
      ref={sectionRef}
    >
      {/* Titre et décoration */}
      <div ref={titleRef} className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold">
          Nos <span className="text-primary">Produits</span>
        </h2>
        <div className="flex items-center gap-2">
          <span className="flex h-0.5 w-20 md:w-[100px] bg-black"></span>
          <Vanilla className="w-[50px] md:w-20" />
          <span className="flex h-0.5 w-20 md:w-[100px] bg-black"></span>
        </div>
      </div>

      {/* Onglets */}
      <div
        ref={tabsRef}
        className="flex flex-col md:flex-row items-center justify-between gap-3"
      >
        <h3
          onClick={() => handleTabClick("vanilla")}
          className={`font-medium text-xl lg:text-3xl cursor-pointer border-primary transition-all duration-300 ${
            activeProduct === "vanilla"
              ? "text-primary border-b-2 scale-105"
              : "text-gray-600 hover:text-primary hover:scale-105"
          }`}
        >
          Vanille de Madagascar
        </h3>
        <h3
          onClick={() => handleTabClick("spices")}
          className={`font-medium text-xl lg:text-3xl cursor-pointer border-primary transition-all duration-300 ${
            activeProduct === "spices"
              ? "text-primary border-b-2 scale-105"
              : "text-gray-600 hover:text-primary hover:scale-105"
          }`}
        >
          Nos Épices de Madagascar
        </h3>
      </div>

      {/* Grille des produits */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {productData[activeProduct].map((product, id) => (
          <div key={id} className="product-card">
            <ProductCard
              key={id}
              name={product.name}
              imgSrc={product.imgSrc}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Products;
