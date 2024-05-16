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

export const SingleCategoryCard: React.FC<Props> = ({
  images,
  title,
  price,
  id,
}) => {
  return (
    <div className="SimpleCard w-[250px] h-[380px] relative border border-gray-200 rounded-sm">
      <div className="img">
        <img
          className="mx-auto w-[245px] h-[245px] object-cover object-fit "
          src={images[0].image}
          alt="image"
        />
      </div>
      <div className="content text-center mt-[30px]">
        <p className="text-blue-500 text-lg">{title}</p>
        <p className="text-">{price}</p>
      </div>

      <div className="HoverCard w-[250px] h-[380px] bg-white absolute hidden top-0 left-0 cursor-pointer overflow-hidden hover:shadow-xl rounded-sm">
        <img
          className="mx-auto w-[245px] h-[245px] object-cover object-fit"
          src={images[1].image ? images[1].image : images[0].image}
          alt="image"
        />
        <div className="btn-content text-center mt-[20px] flex-col flex gap-3 items-center">
          <button className="btn px-10 py-2 rounded-lg bg-red-500 text-white">
            Add to favourites
          </button>
          <button className="btn px-10 py-2 rounded-lg bg-yellow-400 text-black">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
