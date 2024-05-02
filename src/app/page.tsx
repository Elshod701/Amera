import { useGetBanners } from "@/service/query/useGetBanners";
import React from "react";
import { SimpleSlider } from "@/components/ui/carousel";
import Image from "next/image";
export default async function Home() {
  const data = await useGetBanners();
  return (
    <div className="flex items-start justify-between container bg-slate-400 h-[500px] py-5">
      <div className="text w-[300px] h-[100%] bg-red-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum iste
        ipsa id natus commodi nulla a, suscipit sequi aperiam libero dolores,
        nihil perspiciatis fuga nemo quas veritatis? Voluptate, placeat sint.
      </div>
      <div className=" w-[950px] h-[100%] rounded-lg">
        <SimpleSlider>
          {data.results.map((banner) => (
            <div className="w-[700px] h-[460px] relative rounded-lg">
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
