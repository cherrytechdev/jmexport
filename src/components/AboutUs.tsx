import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "./Container";
import { aboutUsData } from "../constant";
import VanillaWhite from "../icons/VanillaWhite";

// Enregistrer ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      // Animation du titre
      gsap.fromTo(
        titleRef.current,
        {
          y: 80,
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
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des lignes décoratives
      gsap.fromTo(
        ".decoration-line",
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 75%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de l'icône vanilla
      gsap.fromTo(
        ".vanilla-icon",
        {
          scale: 0,
          rotation: -180,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 75%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation séquentielle des blocs de contenu
      const contentBlocks = gsap.utils.toArray(".content-block");

      contentBlocks.forEach((block: unknown, index) => {
        gsap.fromTo(
          block as Element,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block as Element,
              start: "top 80%",
              end: "bottom 20%",
              // toggleActions: "play none none reverse",
            },
            delay: index * 0.2, // Délai progressif pour chaque bloc
          }
        );
      });

      // Animation des images avec effet de scale
      gsap.fromTo(
        ".about-image",
        {
          scale: 0.8,
          opacity: 0,
          rotationY: 10,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation des éléments de liste
      gsap.fromTo(
        ".list-item",
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".mission-section",
            start: "top 75%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de la mission
      gsap.fromTo(
        ".mission-title",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mission-section",
            start: "top 80%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de la citation finale
      gsap.fromTo(
        ".final-quote",
        {
          scale: 0.9,
          opacity: 0,
          y: 40,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".final-quote",
            start: "top 85%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-[#914B2E] rounded-4xl pb-4">
      <Container className="flex flex-col gap-2 text-white font-light">
        {/* Titre et décoration */}
        <div className="flex flex-col items-start">
          <div ref={titleRef} className="flex flex-col items-center w-full">
            <h2 className="text-5xl font-bold text-white text-balance">
              À propos<span className="text-accent"> de nous</span>
            </h2>
            <div className="flex items-center gap-2">
              <span className="decoration-line flex h-0.5 w-20 md:w-[100px] bg-white/50"></span>
              <VanillaWhite className="vanilla-icon w-[50px] md:w-20" />
              <span className="decoration-line flex h-0.5 w-20 md:w-[100px] bg-white/50"></span>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div ref={contentRef} className="flex flex-col gap-8 md:gap-4">
          {/* Premier bloc */}
          <div className="content-block flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="w-full md:w-1/2">
              <p>
                Bienvenue chez JM EXPORT, exportateur de vanille et
                d&apos;épices de Madagascar. Nous sommes spécialisés dans la
                collecte, la préparation, le conditionnement et
                l&apos;exportation de produits naturels de haute qualité.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/aboutUs/aboutUs_1.webp"
                alt="About us pics"
                className="about-image w-[300px] md:w-[555px]"
              />
            </div>
          </div>

          {/* Deuxième bloc (mission) */}
          <div className="content-block mission-section flex flex-col-reverse md:flex-row items-center gap-4 w-full">
            <div className="w-full md:w-1/2">
              <img
                src="/images/aboutUs/aboutUs_2.webp"
                alt="About us pics"
                className="about-image w-[300px] md:w-[555px]"
              />
            </div>
            <div className="flex flex-col gap-8 w-full md:w-1/2">
              <div className="flex items-center gap-4">
                <img
                  src="/images/aboutUs/target_ico.png"
                  alt="Target icon"
                  className="w-[35px] lg:w-[70px]"
                />
                <h6 className="mission-title font-bold text-xl md:text-2xl">
                  Notre mission
                </h6>
              </div>
              {aboutUsData.map((items, i) => (
                <div key={i} className=" flex items-center gap-4">
                  <img
                    src="/images/vanilla_list.png"
                    alt="vanilla"
                    className="w-5 md:w-10"
                  />
                  <p>{items}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Troisième bloc */}
          <div className="content-block flex flex-col md:flex-row items-center gap-4 w-full">
            <div className="w-full md:w-1/2">
              <p>
                Depuis 2012, JM EXPORT a démarré son activité en tant que
                producteur-préparateur de vanille et adhérent à une association.
                Nous mettons en œuvre une démarche qualité rigoureuse conforme
                aux principes HACCP dans notre processus de préparation de la
                vanille et des épices. Notre organisation qualité est bien
                établie et nous sommes certifiés en agriculture biologique par
                Ecocert, UEBT-RA par Ecocert et Commerce équitable par Flocert.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/aboutUs/aboutUs_3.webp"
                alt="About us pics"
                className="about-image w-[300px] md:w-[555px]"
              />
            </div>
          </div>
        </div>

        {/* Citation finale */}
        <div className="flex justify-center">
          <div className="final-quote border border-white rounded-2xl p-4">
            <p className="max-w-[620px]">
              Notre mission est de partager avec le monde entier le goût
              authentique et les richesses aromatiques de Madagascar, tout en
              soutenant une production éthique et durable.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
