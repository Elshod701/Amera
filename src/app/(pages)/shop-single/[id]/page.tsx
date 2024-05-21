import { NextPage } from "next";
import React from "react";
import { getSingle } from "@/service/query/useGetSingle";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SingleProduct: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  const data = await getSingle(params.id);
  return (
    <div>
      <section className="pb-10 pt-[160px] bg-white">
        <div className="container">
          <div className="flex items-center gap-2 py-5">
            <Link href="/" className="hover:text-yellow-500">
              <p>Home</p>
            </Link>
            <span>/</span>
            <p className="text-gray-400 cursor-pointer">{data.title}</p>
          </div>

          <div className="about-product flex items-start gap-5 justify-around">
            <div className="images w-[650px] pt-[70px] h-auto">
              <Carousel>
                <CarouselContent>
                  {data.images.length === 1 ? (
                    <CarouselItem>
                      <img
                        className="w-[450px] mx-auto"
                        src={data.images[0].image}
                        alt="img1"
                      />
                    </CarouselItem>
                  ) : (
                    <>
                      {data.images.map((e) => (
                        <CarouselItem>
                          <img
                            className="w-[450px] mx-auto"
                            src={e.image}
                            alt="img1"
                          />
                        </CarouselItem>
                      ))}
                    </>
                  )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="content w-[600px] right-[100px]">
              <h1 className="text-4xl pb-5">{data.title}</h1>
              <p className="font-semibold text-2xl py-5">$ {data.price} </p>
              <div
                className="text=base pb-5"
                dangerouslySetInnerHTML={{ __html: data.other_detail }}
              ></div>
              <div className="flex flex-col items-start gap-3">
                <button className="bg-yellow-500 hover:bg-yellow-600 py-2 px-[70px] font-medium rounded-[30px] flex items-center gap-3">
                  <FaCartArrowDown className="text-xl " /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
