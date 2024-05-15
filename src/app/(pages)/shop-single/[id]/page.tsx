import { NextPage } from "next";
import React from "react";
import { getSingle } from "@/service/query/useGetSingle";

const SingleProduct: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  // const data = await getSingle(params.id);
  console.log(params.id);

  return (
    <div>
      <section className="py-[100px]">
        <div className="container">
          <h1>SHOP SINGLE</h1>
          {/* <h1>{data.title}</h1> */}
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
