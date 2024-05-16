import { NextPage } from "next";
import React from "react";
import { getProductsVariants } from "@/service/query/useGetProductVariants";
import { SingleCategoryCard } from "@/components/ui/single-card";
import Link from "next/link";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { nanoid } from "nanoid";
const Products: NextPage<{ params: { id: string } }> = async ({ params }) => {
  const data = await getProductsVariants(params.id);
  console.log(data);

  return (
    <div>
      <section className="pb-10 pt-[160px] bg-white">
        <div className="container">
          {data.results.length > 1 ? (
            <h1 className="text-center py-5 text-blue-500 font-medium text-xl">
              PRODUCTS
            </h1>
          ) : (
            ""
          )}
          <div className="wrapper gap-3 flex flex-wrap justify-between items-start py-10 w-[80%] mx-auto">
            {data.results.length > 1 ? (
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
