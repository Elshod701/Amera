import { useGetProducts } from "@/service/query/useGetProducts";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { nanoid } from "nanoid";
import Link from "next/link";
import dynamic from "next/dynamic";

const ProductCard = dynamic(() => import("@/components/ui/product-card"), {
  ssr: false,
});

export default async function SecondCarouselPart() {
  const productData = await useGetProducts();

  return (
    <div>
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
                    <Link href={`/shop-single/${e.id}`}>
                      <ProductCard {...e} />
                    </Link>
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
  );
}
