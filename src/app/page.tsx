import React from "react";
import { nanoid } from "nanoid";
import { GrMenu } from "react-icons/gr";
import Image from "next/image";
import { useGetSub } from "@/service/query/useGetSub";
import { getProductsVariants } from "@/service/query/useGetProductVariants";
import { useGetBrands } from "@/service/query/useGetBrands";
import subbanner from "@/assets/images/sub-banner-1.png";
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import banner3 from "@/assets/images/banner3.png";
import banner4 from "@/assets/images/banner4.png";
import banner5 from "@/assets/images/banner5.png";
import banner6 from "@/assets/images/banner6.png";
import banner7 from "@/assets/images/banner7.png";
import delivery from "@/assets/icons/delivery.svg";
import help from "@/assets/icons/delivery.svg";
import payment from "@/assets/icons/delivery.svg";
import shop from "@/assets/icons/delivery.svg";
import service from "@/assets/icons/delivery.svg";
import HeroSlider from "@/components/hero/slider";
import HerMenubar from "@/components/hero/menubar";
import dynamic from "next/dynamic";

const CategoryCardSection = dynamic(
  () => import("@/components/main/category-card"),
  {
    ssr: false,
  }
);
const FirstCarouselPart = dynamic(
  () => import("@/components/main/carousel-section/first-part"),
  {
    ssr: false,
  }
);
const SecondCarouselPart = dynamic(
  () => import("@/components/main/carousel-section/second-part"),
  {
    ssr: false,
  }
);
const SubCard = dynamic(() => import("@/components/ui/sub-card"), {
  ssr: false,
});
const Advert = dynamic(() => import("@/components/ui/advert"), {
  ssr: false,
});

export default async function Home() {
  const subData = await useGetSub();
  const brandData = await useGetBrands();
  const sub = subData.results[0].id;
  const variant_data = await getProductsVariants(sub);

  return (
    <>
      <div className="container pt-[80px] lg:pt-[159px]  px-7 xl:px-10">
        <div className="wrapper py-5">
          <div className="flex items-start justify-between  h-[500px] ">
            <div className="text w-[300px] h-[480px] bg-white hidden xl:inline-block">
              <div className="flex items-center gap-3 font-semibold py-2 px-4 border-b-2 border-[#F5F5F5]">
                <GrMenu />
                <span>CATEGORIES</span>
              </div>
              <HerMenubar />
            </div>
            <HeroSlider />
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

      <div className="container px-5 xl:px-10">
        <div className="flex items-center justify-around gap-3 pb-6 flex-wrap">
          <Image src={banner1} alt="image" width={460} height={200} />
          <Image src={banner2} alt="image" width={460} height={200} />
          <Image src={banner3} alt="image" width={460} height={200} />
        </div>
      </div>

      <div className="container px-5 xl:px-10 ">
        <div className="wrapper py-5">
          <div className="flex gap-3">
            <h2 className="text-[18px] font-medium xl:text-[24px]">
              Top Categories
            </h2>
            <p className="text-[18px] font-light xl:text-[24px]">
              Of The Month
            </p>
          </div>

          <CategoryCardSection />
        </div>
      </div>

      <div className="container px-5 xl:px-10 ">
        <div className="flex gap-5 py-5 flex-col xl:flex-row">
          <FirstCarouselPart />
          <SecondCarouselPart />
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

      <div className="container  px-5 xl:px-10">
        <div className="flex items-center pt-10 pb-5 flex-wrap  gap-3 justify-center xl:justify-between xl:gap-0">
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
