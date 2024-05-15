import { NextPage } from "next";
import React from "react";
import { getProductsVariants } from "@/service/query/useGetProductVariants";

const Products: NextPage<{ params: { id: string } }> = async ({ params }) => {
  const data = await getProductsVariants(params.id);
  console.log(data);

  return (
    <div>
      <section className="pb-10 pt-[160px] bg-white">
        <div className="container">
          {data.results.map((e) => (
            <p>{e.title}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
