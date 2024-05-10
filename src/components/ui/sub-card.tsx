import { nanoid } from "nanoid";
import React from "react";
interface Props {
  images: {
    image: string;
    image_id: number;
  }[];
  title: string;
  id: number;
  price: string;
}

export const SubCard: React.FC<Props> = ({ images, title, price }) => {
  return (
    <>
      <div
        key={nanoid()}
        className="w-[367px] h-[138px] flex items-center bg-white"
      >
        <img
          className="w-[130px] h-[130px] object-cover object-center"
          src={images[0].image}
          alt="img"
        />
        <div className="content p-4">
          <p className="text-[#0066C0]">{title}</p>
          <p>Price: {price} UZS </p>
        </div>
      </div>
    </>
  );
};
