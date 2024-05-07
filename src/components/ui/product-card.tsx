import React from "react";
interface Props {
  image: string;
  title: string;
  price: string;
  id: number;
}

export const ProductCard: React.FC<Props> = ({ image, title, price, id }) => {
  return (
    <div className="w-[224px] h-[360px] bg-white ">
      <img
        src={image}
        alt="image"
        className="w-full h-[223px] mx-auto block object-cover object-center"
      />
      <div className="content p-3">
        <span className="text-gray-500">ID:{id}</span>
        <p className="text-[#0066C0] font-medium text-[16px]">{title}</p>
        <p className="text-[#222222] font-bold text=xl mt-10">{price} $</p>
      </div>
    </div>
  );
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};
