import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";

interface Props {
  id: number;
  title: string;
  image: string;
}

const CategoryCard: React.FC<Props> = ({ title, image, id }) => {
  return (
    <div
      key={nanoid()}
      className="flex items-center justify-between px-6 bg-white border border-[#EEEEEE] w-[455px] h-[190px] p-3 xl:w-[350px] xl:h-[130px]"
    >
      <p className="hover:text-yellow-500 cursor-pointer">{title}</p>
      <img
        src={image}
        alt="img"
        className="xl:w-[107px] h-[107px] object-cover object-center w-[170px]"
      />
    </div>
  );
};

export default CategoryCard;
