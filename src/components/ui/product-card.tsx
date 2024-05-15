import React from "react";
interface Props {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    order: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: string;
  price_with_discount: string;
  quantity: number;
}

export const ProductCard: React.FC<Props> = (product: Props) => {
  return (
    <div className=" bg-white w-full py-3 sm:h-[360px] sm:w-[300px] md:w-[270px] lg:w-[340px] xl:w-[240px]">
      <img
        src={product.images[0].image}
        alt="image"
        className="w-full h-[223px] mx-auto block object-contain object-center"
      />
      <div className="content p-3 mt-0 sm:mt-6 ">
        <p className="text-[#0066C0] font-medium text-[16px] text-center hover:text-yellow-400">
          {product?.title.length > 20
            ? product?.title.slice(0, 20) + "..."
            : product?.title}
        </p>
        <p className="text-[#222222] font-bold text=xl mt-2 text-center">
          {product?.price} $
        </p>
      </div>
    </div>
  );
};
