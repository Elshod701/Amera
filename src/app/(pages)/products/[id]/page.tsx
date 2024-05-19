import { NextPage } from "next";
import React from "react";
import { getProductsVariants } from "@/service/query/useGetProductVariants";
import Link from "next/link";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";

const SingleCategoryCard = dynamic(
  () => import("@/components/ui/single-card"),
  {
    ssr: false,
  }
);

const Products: NextPage<{ params: { id: string } }> = async ({ params }) => {
  const data = await getProductsVariants(params.id);
  return (
    <div>
      <section className="pb-10 pt-[160px] bg-white">
        <div className="container xl:px-10 px-5 mt-[-80px] lg:mt-0">
          {data.results.length > 1 ? (
            <h1 className="text-center py-5 text-blue-500 font-medium text-xl">
              PRODUCTS
            </h1>
          ) : (
            ""
          )}
          <div className="wrapper gap-2 md:gap-6 xl:gap-3 flex flex-wrap justify-center sm:justify-between items-center xl:items-start py-3 xl:py-10 w-[100%] lg:w-[80%] mx-auto ">
            {data.results.length > 0 ? (
              data.results.map((e) => (
                <SingleCategoryCard key={nanoid()} {...e} />
              ))
            ) : (
              <>
                <div className="flex items-center justify-center flex-col w-[100%] py-[40px]">
                  <p className="text-center font-medium  text-4xl mx-auto">
                    NO ITEMS YET...
                  </p>
                  <Link href="/" className="flex items-center gap-2 mt-[40px]">
                    <span className="text-xl">
                      <BsBoxArrowInLeft />
                    </span>
                    <p className="text-2xl">HOME</p>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
