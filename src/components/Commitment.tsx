import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "./Container";
import { commitmentData } from "../constant";
import Button from "./Button";
import Vanilla from "../icons/Vanilla";

// Enregistrer ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Commitment() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

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

      // Animation des éléments de liste avec stagger
      gsap.fromTo(
        ".commitment-item",
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation du bouton
      gsap.fromTo(
        ".commitment-button",
        {
          scale: 0.8,
          opacity: 0,
          y: 30,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 65%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de l'image
      gsap.fromTo(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.9,
          rotationY: 15,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );

      // Animation de la bordure sur les grands écrans
      gsap.fromTo(
        ".border-left",
        {
          scaleY: 0,
          opacity: 0,
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 60%",
            end: "bottom 20%",
            // toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="engagement"
      ref={sectionRef}
      className="mb-12 lg:mb-20 xl:mb-24"
    >
      <Container>
        {/* Titre et décoration */}
        <div className="flex flex-col items-center justify-center">
          <h2 ref={titleRef} className="text-5xl font-bold">
            Nos <span className="text-primary">engagements</span>
          </h2>
          <div className="flex items-center gap-2">
            <span className="decoration-line flex h-0.5 w-20 md:w-[100px] bg-black"></span>
            <Vanilla className="vanilla-icon w-[50px] md:w-20" />
            <span className="decoration-line flex h-0.5 w-20 md:w-[100px] bg-black"></span>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full mt-8">
          {/* Partie gauche - Liste et bouton */}
          <div
            ref={contentRef}
            className="flex flex-col gap-12 w-full md:w-1/2"
          >
            <div className="flex flex-col gap-4">
              {commitmentData.map((items, i) => (
                <div
                  key={i}
                  className="commitment-item flex items-center gap-4"
                >
                  <img
                    src="/images/vanilla_list.png"
                    alt="vanilla"
                    className="w-5 md:w-10"
                  />
                  <p className="text-[#121213]">{items}</p>
                </div>
              ))}
            </div>
            <div className="commitment-button">
              <Button label="Découvrez JMExport" />
            </div>
          </div>

          {/* Partie droite - Image */}
          <div className="border-left flex justify-end 2xl:border-l 2xl:border-l-[#4a4a4a] w-full md:w-1/2">
            <img
              ref={imageRef}
              src="/images/commitment-pics.webp"
              alt="Commitment pics"
              className="w-[600px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
