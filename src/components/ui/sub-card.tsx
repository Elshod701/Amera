import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";
interface Props {
  id: number;
  is_available: boolean;
  title: string;
  description: string;
  category: string;
  images: {
    image: string;
    order: number;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: number;
  price_with_discount: string;
  quantity: number;
  userCount: number;
  userPrice: number;
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
