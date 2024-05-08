import { useGetSubVariant } from "@/service/query/useGetProductVariants";
import { nanoid } from "nanoid";
import React from "react";
interface Props {
  images: {
    image: string;
    image_id: number;
  }[];
  title: string;
  id: number;
}

export const SubCard: React.FC<Props> = ({ images, title }) => {
  console.log(images);

  return (
    <>
      <div key={nanoid()} className="w-[287px] h-[158px]">
        <img src={images[0].image} alt="img" />
        <div className="content p-4">
          <p>ID: </p>
          <p>{title}</p>
          <p>Price: </p>
        </div>
      </div>
    </>
  );
};
