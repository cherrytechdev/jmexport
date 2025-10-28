import { useState } from "react";
import Vanilla from "../icons/Vanilla";
import Container from "./Container";
import { productData } from "../constant";
import ProductCard from "./display/ProductCard";

function Products() {
  const [activeProduct, setActiveProduct] = useState<"vanilla" | "spices">(
    "vanilla"
  );

  return (
    <Container id="product" className="py-10 flex flex-col gap-8 md:gap-14">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-5xl font-bold ">
          Nos <span className="text-primary">Produits</span>
        </h2>
        <div className="flex items-center gap-2 ">
          <span className="flex h-0.5 w-20 md:w-[100px] bg-black "></span>
          <Vanilla className="w-[50px] md:w-20 " />
          <span className="flex h-0.5 w-20 md:w-[100px] bg-black "></span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-3 ">
        <h3
          onClick={() => setActiveProduct("vanilla")}
          className={`font-medium text-xl lg:text-3xl cursor-pointer border-primary transition-all duration-300 ${
            activeProduct === "vanilla" && "text-primary border-b"
          }  `}
        >
          Vanille de Madagascar
        </h3>
        <h3
          onClick={() => setActiveProduct("spices")}
          className={`font-medium text-xl lg:text-3xl cursor-pointer border-primary transition-all duration-300 ${
            activeProduct === "spices" && "text-primary border-b"
          }  `}
        >
          Nos Épices de Madagascar
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productData[activeProduct].map((product, id) => (
          <ProductCard
            key={id}
            name={product.name}
            imgSrc={product.imgSrc}
            description={product.description}
          />
        ))}
      </div>
    </Container>
  );
}

export default Products;
