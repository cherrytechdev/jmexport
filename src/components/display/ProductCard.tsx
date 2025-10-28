export type ProductCardPros = {
  name: string;
  imgSrc: string;
  description: string;
};

function ProductCard(props: ProductCardPros) {
  const { name, imgSrc, description } = props;
  return (
    <div className="w-full p-8 flex flex-col gap-5 border border-primary ">
      <h4 className="text-lg md:text-xl font-medium"> {name} </h4>
      <img
        src={imgSrc}
        alt="vanilla and spice image"
        className="w-full h-[220px] object-cover object-center "
      />
      <p className="font-light"> {description} </p>
    </div>
  );
}

export default ProductCard;
