import React from "react";
interface Props {
  image: string;
  title: string;
  price: string;
  id: number;
}

export const SubCard: React.FC<Props> = ({ image, title, price, id }) => {
  return (
    <div className="w-[287px] h-[158px]">
      <img src={image} alt="img" />
      <div className="content p-4">
        <p>ID: {id}</p>
        <p>{title}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};
