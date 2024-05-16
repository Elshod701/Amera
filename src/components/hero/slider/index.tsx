import React from "react";
import { SimpleSlider } from "@/components/ui/carousel-banner";
import { useGetBanners } from "@/service/query/useGetBanners";
import { nanoid } from "nanoid";

export default async function HeroSlider() {
  const data = await useGetBanners();
  return (
    <div className=" w-full h-[100%] rounded-lg xl:w-[1050px]">
      <SimpleSlider>
        {data.results.map((banner) => (
          <div
            className="w-full h-[480px] relative rounded-lg xl:w-[1050px]"
            key={nanoid()}
          >
            <img
              src={banner.image}
              alt="image"
              className="h-[100%] object-cover object-right w-[1100px] rounded-lg"
            />
            <p className="absolute top-[100px] w-[400px] left-[5%] text-white font-black text-[32px] xl:text-[54px]">
              {banner.title}
            </p>
          </div>
        ))}
      </SimpleSlider>
    </div>
  );
}
