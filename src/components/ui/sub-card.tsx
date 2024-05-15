import { nanoid } from "nanoid";
import Link from "next/link";
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

export const SubCard: React.FC<Props> = ({ images, title, price, id }) => {
  return (
    <>
      <div
        key={nanoid()}
        className="w-[367px] h-[138px] flex items-center bg-white justify-around xl:justify-normal"
      >
        <img
          className="w-[100px] h-[100px] xl:w-[120px] xl:h-[120px] object-cover object-center"
          src={images[0].image}
          alt="img"
        />
        <div className="content p-4">
          <Link href={`/shop-single/${id}`}>
            <p className="text-[#0066C0] hover:text-yellow-400">{title}</p>{" "}
          </Link>
          <p>Price: {price} UZS </p>
        </div>
      </div>
    </>
  );
};
