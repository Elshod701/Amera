import { removeLikeItem } from "@/redux/reducers/like-reducer";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  id: number;
  title: string;
  price: number;
  is_available: boolean;
  description: string;
  category: string;
  product: number;
  attribute_value: [];
  images: {
    order: number;
    image: string;
  }[];
  userCount: number;
  userPrice: number;
  other_detail: string;
  price_with_discount: string;
  quantity: number;
}
const LikeCard: React.FC<Props> = ({ images, title, price, id }) => {
  const dispatch = useDispatch();

  const removeItem = (id: number) => {
    dispatch(removeLikeItem({ id }));
    console.log(true);
  };

  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  return (
    <div className="SimpleCard pt-5 w-[200px] h-[290px] md:w-[250px] md:h-[380px] relative border border-gray-200 rounded-sm">
      <div className="img">
        <img
          className="mx-auto w-[190px] h-[190px] md:w-[245px] md:h-[245px] object-cover object-fit "
          src={images[0].image}
          alt="image"
        />
      </div>
      <div className="content text-center mt-[30px]">
        <p className="text-blue-500 text-lg">{title}</p>
        <p className="text-">{price}</p>
      </div>

      <div className="HoverCard pt-5 w-[250px] h-[380px] bg-white absolute hidden top-0 left-0 cursor-pointer overflow-hidden hover:shadow-xl rounded-sm">
        <img
          className="mx-auto w-[190px] h-[190px] md:w-[245px] md:h-[245px] object-cover object-fit "
          src={images[1].image}
          alt="image"
        />
        <div className="btn-content text-center mt-[10px] flex-col flex gap-3 items-center">
          <button
            onClick={() => removeItem(id)}
            className="btn px-10 py-2 rounded-lg bg-red-600 text-white"
          >
            Remove Item
          </button>
          <button className="btn px-10 py-2 rounded-lg bg-yellow-400 text-black">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeCard;
