"use client";
import CategoryCard from "@/components/ui/category-card";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

const LikeCard = dynamic(() => import("@/components/ui/like-card"), {
  ssr: false,
});
export default function page() {
  const { likeItem } = useSelector((state: any) => state.like);

  return (
    <div className="container pt-[160px]">
      <div className="py-10">
        <h1 className="text-center pb-5 font-medium text-2xl text-blue-500 ">
          YOUR FAVOURITE ITEMS
        </h1>
        {likeItem.map((item: any) => (
          <LikeCard {...item} />
        ))}
      </div>
    </div>
  );
}
