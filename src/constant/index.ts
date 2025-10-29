import type { HeaderLinks, LinkType, ProductDataTypes } from "../../Types";

export const headerData: HeaderLinks[] = [
  [
    {
      label: "Accueil",
      href: "#hero",
    },
    {
      label: "Nos Produits",
      href: "#product",
    },
  ],
  [
    {
      label: "À propos de nous",
      href: "#about",
    },
    {
      label: "Nos engagements",
      href: "#engagement",
    },
  ],
];

export const headerData2: LinkType[] = [
  {
    label: "Accueil",
    href: "#hero",
  },
  {
    label: "Nos Produits",
    href: "#product",
  },
  {
    label: "À propos de nous",
    href: "#about",
  },
  {
    label: "Nos engagements",
    href: "#engagement",
  },
];

export const footerDataLink = [
  {
    label: "Accueil",
    href: "#hero",
  },
  {
    label: "Nos Produits",
    href: "#product",
  },
  {
    label: "À propos de nous",
    href: "#about",
  },
  {
    label: "Nos engagements",
    href: "#engagement",
  },
  {
    label: "Contactez nous",
    href: "#contact",
  },
];

export const footerDataAdress = [
  "Villa Miranda, Secteur N°10, Maherifody , (206) Antalaha , MAADAGASCAR",
  "contact@jmexport.mg",
  "+261 32 95 068 27",
  "jmexport.mg",
];

export const aboutUsData = [
  "Promouvoir la qualité et la diversité des produits malgaches",
  "Soutenir les communautés rurales",
  "Offrir un service professionnel et transparent à nos partenaires",
];

export const commitmentData = [
  "Sélection rigoureuse des matières premières",
  "Contrôle qualité à chaque étape",
  "Emballage soigné et respect des normes d’exportation",
  "Traçabilité complète et livraison internationale rapide",
];
export const productData: ProductDataTypes = {
  vanilla: [
    {
      name: "Vanille Noire Gourmet",
      imgSrc: "/images/product/vanilla-1.webp",
      description:
        "Gousses souples Brillantes et riches en vanilline,  Parfaites pour  la gastronomie.",
    },
    {
      name: "Vanille TK (Tout-venant)",
      imgSrc: "/images/product/vanilla-2.webp",
      description: " Gousses plus sèches Idéales pour l’extraction.",
    },
    {
      name: "Vanille Rouge US",
      imgSrc: "/images/product/vanilla-3.webp",
      description: " Qualité export adaptée au marché américain.",
    },
    {
      name: "Vanille Rouge EU",
      imgSrc: "/images/product/vanilla-4.webp",
      description: "Conforme aux normes européennes avec traçabilité garantie.",
    },
    {
      name: "Vanille Cuts",
      imgSrc: "/images/product/vanilla-5.webp",
      description:
        "Morceaux de gousses destinés à l’industrie agroalimentaire.",
    },
  ],
  spices: [
    {
      name: "Poivre Sauvage (Tsiperifery)",
      imgSrc: "/images/product/spice-5.webp",
      description: "Rare et aromatique, au parfum boisé et citronné.",
    },
    {
      name: "Poivre Noir",
      imgSrc: "/images/product/spice-4.webp",
      description:
        "Goût intense, parfait pour assaisonner les plats du quotidien.",
    },
    {
      name: "Baie Rose",
      imgSrc: "/images/product/spice-1.webp",
      description:
        "Légèrement sucrée et poivrée, idéale pour les sauces et les grillades",
    },
    {
      name: "Ail Séché",
      imgSrc: "/images/product/spice-7.webp",
      description:
        "Pur et savoureux, utilisé dans la cuisine traditionnelle et moderne.",
    },
    {
      name: "Curcuma",
      imgSrc: "/images/product/spice-6.webp",
      description:
        "D’un jaune éclatant, aux vertus antioxydantes et parfum doux.",
    },
    {
      name: "Gingembre",
      imgSrc: "/images/product/spice-3.webp",
      description: "Racine piquante et aromatique, fraîche ou séchée",
    },
    {
      name: "Combava",
      imgSrc: "/images/product/spice-2.webp",
      description:
        "Zeste parfumé et feuilles aromatiques, typiques de Madagascar.",
    },
    {
      name: "Coriandre",
      imgSrc: "/images/product/spice-8.webp",
      description: "Graines et feuilles, au goût frais et citronné.",
    },
  ],
};
