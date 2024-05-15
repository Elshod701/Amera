import React from "react";
import { nanoid } from "nanoid";

import { GrMenu } from "react-icons/gr";
import delivery from "@/assets/icons/delivery.svg";
import help from "@/assets/icons/delivery.svg";
import payment from "@/assets/icons/delivery.svg";
import shop from "@/assets/icons/delivery.svg";
import service from "@/assets/icons/delivery.svg";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { ProductCard } from "@/components/ui/product-card";
import { SubCard } from "@/components/ui/sub-card";
import { Advert } from "@/components/ui/advert";
import { SimpleSlider } from "@/components/ui/carousel-banner";
import CategoryCard from "@/components/ui/category-card";

import { useGetProducts } from "@/service/query/useGetProducts";
import { useGetSub } from "@/service/query/useGetSub";
import { useGetSubVariant } from "@/service/query/useGetProductVariants";
import { useGetBanners } from "@/service/query/useGetBanners";
import { useGetCategories } from "@/service/query/useGetCategories";
import { useGetBrands } from "@/service/query/useGetBrands";

import subbanner from "@/assets/images/sub-banner-1.png";
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import banner3 from "@/assets/images/banner3.png";
import banner4 from "@/assets/images/banner4.png";
import banner5 from "@/assets/images/banner5.png";
import banner6 from "@/assets/images/banner6.png";
import banner7 from "@/assets/images/banner7.png";

export default async function Home() {
  const data = await useGetBanners();
  const categoryData = await useGetCategories();
  const productData = await useGetProducts();
  const subData = await useGetSub();
  const brandData = await useGetBrands();
  const sub = subData.results[0].id;
  const variant_data = await useGetSubVariant(sub);

  return (
    <>
      <div className="container pt-[80px] lg:pt-[159px]">
        <div className="wrapper py-5">
          <div className="flex items-start justify-between  h-[500px] ">
            <div className="text w-[300px] h-[480px] bg-white hidden xl:inline-block">
              <div className="flex items-center gap-3 font-semibold py-2 px-4 border-b-2 border-[#F5F5F5]">
                <GrMenu />
                <span>CATEGORIES</span>
              </div>

              <div id="cat_bar" className="overflow-y-scroll h-[425px] ">
                {categoryData.results.map((category) => (
                  <>
                    <Menubar className="flex rounded-none w-full">
                      <MenubarMenu>
                        <MenubarTrigger className="flex items-center gap-3 w-[400px]">
                          <img
                            src={category.image}
                            className="w-[30px] h-[30px] object-cover object-center"
                            alt="cat_img"
                          />
                          <p> {category.title}</p>
                        </MenubarTrigger>

                        <MenubarContent className="ml-[300px] z-[6666]">
                          <MenubarItem className="w-[600px] h-[300px]">
                            <img
                              key={nanoid()}
                              className="w-[300px] h-[300px] object-center object-cover"
                              src={category.image}
                              alt="cat_img"
                            />
                            1 <span>{category.title}</span>
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </>
                ))}
              </div>
            </div>
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
          </div>
        </div>
      </div>

      <div className="container px-1 lg:px-[40px] ">
        <div className="flex flex-wrap items-center justify-center  bg-white  mt-5 mb-10 gap-2 xl:gap-0 md:justify-start">
          <div className="py-7">
            <Advert
              src={delivery}
              title="Free Delivery"
              desc="For all oders over $120"
            />
          </div>
          <div className="py-7">
            <Advert
              src={payment}
              title="Safe Payment"
              desc="100% secure payment"
            />
          </div>
          <div className="py-7">
            <Advert
              src={shop}
              title="Shop With Confidence"
              desc="If goods have problems"
            />
          </div>
          <div className="py-7">
            <Advert
              src={help}
              title="24/7 Help Center"
              desc="Dedicated 24/7 support"
            />
          </div>
          <div className="py-7">
            <Advert
              src={service}
              title="Friendly Services"
              desc="30 day satisfaction guarantee"
            />
          </div>
        </div>
      </div>

      <div className="container  px-5 xl:px-10">
        <div className="flex items-center justify-around gap-3 pb-6 flex-wrap">
          <Image src={banner1} alt="image" width={460} height={200} />
          <Image src={banner2} alt="image" width={460} height={200} />
          <Image src={banner3} alt="image" width={460} height={200} />
        </div>
      </div>

      <div className="container px-5 xl:px-10 ">
        <div className="wrapper  py-5">
          <div className="flex gap-3">
            <h2 className="text-[18px] font-medium xl:text-[24px]">
              Top Categories
            </h2>
            <p className="text-[18px] font-light xl:text-[24px]">
              Of The Month
            </p>
          </div>

          <div className="flex items-center flex-wrap justify-around gap-3 pt-4 xl:gap-0 xl:pt-0">
            {categoryData.results.slice(0, 8).map((e) => (
              <CategoryCard key={nanoid()} title={e.title} image={e.image} />
            ))}
          </div>
        </div>
      </div>

      <div className="container px-5 xl:px-10 ">
        <div className="flex gap-5 py-5 flex-col xl:flex-row">
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
                          src={e.image}
                          alt="img"
                        />
                        <div className="w-[250px] sm:w-[400px] xl:w-[330px]">
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

                          <p className="pb-2 font-bold text-[#222222]">
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

          <div className="second carousel w-full xl:w-[700px]">
            <div className="bg-[#F5F6F9]">
              <p className="text-[24px] font-medium pb-6">
                Recent <span className="text-[24px] font-thin">Products</span>
              </p>
              <div className="w-full xl:w-[720px] bg-[#F5F6F9] gap-2">
                <Carousel>
                  <CarouselContent>
                    {productData.results.map((e) => (
                      <CarouselItem
                        className="sm:basis-1/2 md:basis-1/3"
                        key={nanoid()}
                      >
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

      <div className="container px-5 xl:px-10 ">
        <div className="flex items-center justify-center xl:justify-center gap-6 py-8 flex-wrap">
          <Image width={690} src={banner4} alt="banner" />
          <Image width={690} src={banner5} alt="banner" />
        </div>
      </div>

      <div className="container  px-5 xl:px-10 ">
        <div className="wrapper py-5 ">
          <div className="title flex items-center gap-2 py-2">
            <p className="text-2xl font-medium">{subData.results[0].title}</p>
            <p className="text-2xl">Products</p>
          </div>
          <div className="flex justify-around  lg:justify-normal">
            <div className="hidden lg:block">
              <Image height={385} width={280} src={subbanner} alt="ok" />
            </div>
            <div className="flex items-center flex-wrap justify-around w-[90%]  gap-3 xl:gap-0 ">
              {variant_data.results.slice(0, 6).map((e) => (
                <SubCard key={nanoid()} {...e} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container  px-5 xl:px-10 ">
        <div className="wrapper py-5 ">
          <div className="title flex items-center gap-2 py-2">
            <p className="text-2xl font-medium">{subData.results[0].title}</p>
            <p className="text-2xl">Products</p>
          </div>
          <div className="flex justify-around  lg:justify-normal">
            <div className="flex items-center flex-wrap justify-around w-[90%]  gap-3 xl:gap-0 ">
              {variant_data.results.slice(0, 6).map((e) => (
                <SubCard key={nanoid()} {...e} />
              ))}
            </div>
            <div className="hidden lg:block">
              <Image height={385} width={280} src={banner6} alt="ok" />
            </div>
          </div>
        </div>
      </div>

      <div className="container  px-5 xl:px-10 ">
        <div className="wrapper py-5 ">
          <div className="title flex items-center gap-2 py-2">
            <p className="text-2xl font-medium">{subData.results[0].title}</p>
            <p className="text-2xl">Products</p>
          </div>
          <div className="flex justify-around  lg:justify-normal">
            <div className="hidden lg:block">
              <Image height={385} width={280} src={banner7} alt="ok" />
            </div>
            <div className="flex items-center flex-wrap justify-around w-[90%]  gap-3 xl:gap-0 ">
              {variant_data.results.slice(0, 6).map((e) => (
                <SubCard key={nanoid()} {...e} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container  px-5 xl:px-10  ">
        8
        <div className="flex items-center pt-10 pb-5 flex-wrap  gap-3 justify-center xl:justify-normal xl:gap-0">
          <Image src={banner1} alt="image" width={460} height={200} />
          <Image src={banner2} alt="image" width={460} height={200} />
          <Image src={banner3} alt="image" width={460} height={200} />
        </div>
      </div>

      <div className="container px-5 xl:px-10  ">
        <div className="wrapper py-5 pb-10">
          <div className="title">
            <h2 className="text-2xl font-medium">Brands</h2>
            <div className="flex items-center gap-5 flex-wrap justify-around">
              {brandData.results.slice(0, 14).map((e) => (
                <div
                  key={nanoid()}
                  className="w-[170px] h-[170px] flex  items-center justify-center rounded-2xl shadow-lg bg-white"
                >
                  <img
                    className="block mx-auto w-[120px] h-[120px] object-contain object-center rounded-3xl "
                    src={e.image}
                    alt="brand"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
