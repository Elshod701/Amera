import { useGetBanners } from "@/service/query/useGetBanners";
import React from "react";
import { SimpleSlider } from "@/components/ui/carousel-banner";
import { GrMenu } from "react-icons/gr";
import { useGetCategories } from "@/service/query/useGetCategories";
import { Advert } from "@/components/ui/advert";
import delivery from "@/assets/icons/delivery.svg";
import help from "@/assets/icons/delivery.svg";
import payment from "@/assets/icons/delivery.svg";
import shop from "@/assets/icons/delivery.svg";
import service from "@/assets/icons/delivery.svg";
import Image from "next/image";
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import banner3 from "@/assets/images/banner3.png";
import CategoryCard from "@/components/ui/category-card";
import { useGetProducts } from "@/service/query/useGetProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default async function Home() {
  const data = await useGetBanners();
  const categoryData = await useGetCategories();
  const productData = await useGetProducts();
  return (
    <>
      <div className="container">
        <div className="flex items-start justify-between  h-[500px] py-5">
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
      </div>

      <div className="container">
        <div className="flex items-center justify-between bg-white py-7  mt-5 mb-10">
          <Advert
            src={delivery}
            title="Free Delivery"
            desc="For all oders over $120"
          />
          <Advert
            src={payment}
            title="Safe Payment"
            desc="100% secure payment"
          />
          <Advert
            src={shop}
            title="Shop With Confidence"
            desc="If goods have problems"
          />
          <Advert
            src={help}
            title="24/7 Help Center"
            desc="Dedicated 24/7 support"
          />
          <Advert
            src={service}
            title="Friendly Services"
            desc="30 day satisfaction guarantee"
          />
        </div>
      </div>

      <div className="container">
        <div className="flex items-center justify-between pb-6">
          <Image src={banner2} alt="image" width={460} height={200} />
          <Image src={banner3} alt="image" width={460} height={200} />
          <Image src={banner1} alt="image" width={460} height={2 - 0} />
        </div>
      </div>

      <div className="container">
        <div className="flex gap-3 pb-6">
          <h2 className="text-[24px] font-medium">Top Categories</h2>
          <p className="text-[24px] font-light">Of The Month</p>
        </div>

        <div className="flex items-center flex-wrap justify-between pb-6 ">
          {categoryData.results.slice(0, 8).map((e) => (
            <CategoryCard title={e.title} image={e.image} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="w-[740px]">
          <Carousel>
            <CarouselContent>
              {productData.results.map((e) => (
                <CarouselItem>
                  <div className="w-[740px] flex items-center bg-red-500 p-5">
                    <img
                      className="w-[315px] h-[315px] object-cover object-center"
                      src={e.image}
                      alt="img"
                    />
                    <div className="bg-green-300 w-[325px]">
                      <p>{e.category}</p>
                      <p>{e.title}</p>
                      <div className="flex items-end ">
                        <p className="text-[18px] font-medium">{e.price}</p>
                        <span className="line-through text-[#A4A4A4] text-[14px]">
                          {e.price}
                        </span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque ducimus eum excepturi esse cum expedita obcaecati.
                      </p>
                      <p>Hurry up! Special offer:</p>
                      <div>
                        <div>
                          <span>New:</span> <span>{e.is_new}</span>
                        </div>
                        <div>
                          <span>Avialable: </span> <span>{e.is_available}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
