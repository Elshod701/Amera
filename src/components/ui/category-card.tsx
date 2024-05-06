import React from "react";

interface Props {
  title: string;
  image: string;
}

const CategoryCard: React.FC<Props> = ({ title, image }) => {
  return (
    <div className="w-[350px] h-[130px] flex items-center justify-between px-6 bg-white border border-[#EEEEEE]">
      <p className="hover:text-yellow-500 cursor-pointer">{title}</p>
      <img
        src={image}
        alt="img"
        className="w-[107px] h-[107px] object-cover object-center"
      />
    </div>
  );
};

export default CategoryCard;
