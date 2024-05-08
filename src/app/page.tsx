import React from "react";
import { useGetBanners } from "@/service/query/useGetBanners";
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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { nanoid } from "nanoid";
import { ProductCard } from "@/components/ui/product-card";
import banner4 from "@/assets/images/banner4.png";
import banner5 from "@/assets/images/banner5.png";
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
            <CategoryCard key={nanoid()} title={e.title} image={e.image} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="flex gap-5 py-5">
          <div className="first carousel">
            <div className="w-[650px] ">
              <div className="flex items-center gap-7 pb-6">
                <h3 className="font-medium text-[24px]">Top Flash</h3>
                <p className="text-[24px] font-thin">Deals</p>
              </div>
            </div>
            <div className="w-[650px]">
              <Carousel>
                <CarouselContent>
                  {productData.results.map((e) => (
                    <CarouselItem>
                      <div
                        key={nanoid()}
                        className="w-[650px] flex items-start gap-4 bg-white p-5"
                      >
                        <img
                          className="w-[245px] h-[245px] object-cover object-center"
                          src={e.image}
                          alt="img"
                        />
                        <div className="w-[355px]">
                          <p>
                            Category id:&nbsp;
                            <span className="text-bold">{e.category}</span>
                          </p>
                          <p className="text-[#0066C0] font-medium text-[16px]">
                            {e.title}
                          </p>
                          <div className="flex items-center py-4">
                            <p className="text-[18px] font-medium">
                              {e.price}$&nbsp;
                            </p>
                            <span className="line-through text-[#A4A4A4] text-[14px]">
                              {e.price}$
                            </span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                          <p className="pt-4 pb-2 font-bold text-[#222222]">
                            Hurry up! Special offer:
                          </p>
                          <div>
                            <div>
                              <span>New:</span>
                              <span>{e.is_new ? "Yes" : "No"}</span>
                              <span>{e.is_new}</span>
                            </div>
                            <div>
                              <span>Avialable: </span>
                              <span>{e.is_available ? "Yes" : "No"}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-4">
                            <div className=" bg-[#F0F1F3] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                              <div className="flex flex-col items-center justify-center">
                                <p className="text-[#222222]">420</p>
                                <p className="text-[12px] text-[#999999]">
                                  DAYS
                                </p>
                              </div>
                            </div>
                            <div className=" bg-[#F0F1F3] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                              <div className="flex flex-col items-center justify-center">
                                <p className="text-[#222222]">17</p>
                                <p className="text-[12px] text-[#999999]">
                                  HRS
                                </p>
                              </div>
                            </div>
                            <div className=" bg-[#F0F1F3] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                              <div className="flex flex-col items-center justify-center">
                                <p className="text-[#222222]">36</p>
                                <p className="text-[12px] text-[#999999]">
                                  MINS
                                </p>
                              </div>
                            </div>
                            <div className=" bg-[#F0F1F3] rounded-full w-[60px] h-[60px] flex items-center justify-center">
                              <div className="flex flex-col items-center justify-center">
                                <p className="text-[#222222]">12</p>
                                <p className="text-[12px] text-[#999999]">
                                  SEC
                                </p>
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
          <div className="second carousel">
            <div className="bg-[#F5F6F9]">
              <p className="text-[24px] font-medium pb-6">
                Recent <span className="text-[24px] font-thin">Products</span>
              </p>
              <div className="w-[740px] bg-[#F5F6F9]  gap-4 ">
                <Carousel>
                  <CarouselContent>
                    {productData.results.map((e) => (
                      <CarouselItem className="basis-1/3">
                        <ProductCard {...e} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex items-center justify-between py-8">
          <Image width={690}  src={banner4} alt="banner" />
          <Image width={690} src={banner5} alt="banner" />
        </div>
      </div>
    </>
  );
}
