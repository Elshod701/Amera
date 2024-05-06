import { useGetBanners } from "@/service/query/useGetBanners";
import React from "react";
import { SimpleSlider } from "@/components/ui/carousel";
import { GrMenu } from "react-icons/gr";
import { useGetCategories } from "@/service/query/useGetCategories";
export default async function Home() {
  const data = await useGetBanners();
  const categoryData = await useGetCategories();

  return (
    <div className="flex items-start justify-between container h-[500px] py-5">
      <div className="text w-[300px] h-[100%] bg-white">
        <div className="flex items-center gap-3 font-semibold py-2 px-4 border-b-2 border-[#F5F5F5]">
          <GrMenu />
          <span>CATEGORIES</span>
        </div>

        <div className="overflow-y-scroll h-[395px]">
          {categoryData.results.map((category) => (
            <div
              className="flex items-center gap-3 py-2 px-4 border-b-2 border-[#F5F5F5]"
              key={category.id}
            >
              <img className="w-[30px]" src={category.image} alt="image" />
              <span> {category.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-[1050px] h-[100%] rounded-lg">
        <SimpleSlider>
          {data.results.map((banner) => (
            <div
              className="w-[1050px] h-[460px] relative rounded-lg"
              key={banner.id}
            >
              <img
                src={banner.image}
                alt="image"
                className="h-[100%] object-cover w-[1100px] rounded-lg"
              />
              <p className="absolute top-[100px] w-[400px] left-[5%] text-white font-black text-[54px]">
                {banner.title}
              </p>
            </div>
          ))}
        </SimpleSlider>
      </div>
    </div>
  );
}
