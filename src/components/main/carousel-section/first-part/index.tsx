import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetProducts } from "@/service/query/useGetProducts";
import Link from "next/link";
import { nanoid } from "nanoid";
export default async function FirstCarouselPart() {
  const productData = await useGetProducts();

  return (
    <div className="first carousel w-full xl:w-[700px]">
      <div className="w-[100%] xl:w-[650px]">
        <div className="flex items-center gap-7 pb-6">
          <h3 className="font-medium text-[24px]">Top Flash</h3>
          <p className="text-[24px] font-thin">Deals</p>
        </div>
      </div>
      <div className="w-[100%]">
        <Carousel>
          <CarouselContent>
            {productData.results.map((e) => (
              <CarouselItem>
                <div
                  key={nanoid()}
                  className="w-[100%] flex items-center gap-4 bg-white p-5 flex-col md:flex-row  justify-center xl:justify-between"
                >
                  <img
                    className="w-[327px] h-[320px] object-contain object-center lg:w-[500px] xl:w-[260px]"
                    src={e.images[0].image}
                    alt="img"
                  />
                  <div className="w-[250px] sm:w-[400px] xl:w-[330px]">
                    <Link href={`/shop-single/${e.id}`}>
                      <p className="text-[#0066C0] font-medium text-[16px] hover:text-yellow-400 hover:underline">
                        {e.title}
                      </p>
                    </Link>
                    <div className="flex items-center py-4">
                      <p className="text-[18px] font-medium">
                        {e.price}$&nbsp;
                      </p>
                      <span className="line-through text-[#A4A4A4] text-[14px]">
                        {e.price}$
                      </span>
                    </div>

                    <p className="pb-2 font-bold text-[#222222]">
                      Hurry up! Special offer:
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <div className=" bg-[#F0F1F3] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                          <p className="text-[#222222]">420</p>
                          <p className="text-[12px] text-[#999999]">DAYS</p>
                        </div>
                      </div>
                      <div className=" bg-[#F0F1F3] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                          <p className="text-[#222222]">17</p>
                          <p className="text-[12px] text-[#999999]">HRS</p>
                        </div>
                      </div>
                      <div className=" bg-[#F0F1F3] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                          <p className="text-[#222222]">36</p>
                          <p className="text-[12px] text-[#999999]">MINS</p>
                        </div>
                      </div>
                      <div className=" bg-[#F0F1F3] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                          <p className="text-[#222222]">12</p>
                          <p className="text-[12px] text-[#999999]">SEC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
