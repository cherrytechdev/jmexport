import type { ProductCardPros } from "../src/components/display/ProductCard";

export type LinkType = {
  label: string;
  href: string;
};

export type HeaderLinks = LinkType[];

export interface ProductDataTypes {
  vanilla: ProductCardPros[];
  spices: ProductCardPros[];
}
