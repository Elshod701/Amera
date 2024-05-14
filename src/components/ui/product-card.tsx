import React from "react";
interface Props {
  image: string;
  title: string;
  price: string;
  id: number;
}

export const ProductCard: React.FC<Props> = ({ image, title, price, id }) => {
  return (
    <div className=" bg-white w-full py-3 sm:h-[360px] sm:w-[300px] md:w-[270px] lg:w-[340px] xl:w-[240px]">
      <img
        src={image}
        alt="image"
        className="w-full h-[223px] mx-auto block object-contain object-center"
      />
      <div className="content p-3 mt-0 sm:mt-6 ">
        <p className="text-[#0066C0] font-medium text-[16px] text-center">
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </p>
        <p className="text-[#222222] font-bold text=xl mt-2 text-center">
          {price} $
        </p>
      </div>
    </div>
  );
};
