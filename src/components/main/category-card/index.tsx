import React from "react";
import { useGetCategories } from "@/service/query/useGetCategories";
import dynamic from "next/dynamic";

const CategoryCard = dynamic(() => import("@/components/ui/category-card"), {
  ssr: false,
});

export default async function CategoryCardSection() {
  const categoryData = await useGetCategories();

  return (
    <div className="flex items-center flex-wrap justify-around gap-3 pt-4 xl:gap-0 xl:pt-0">
      {categoryData.results.slice(0, 8).map((e) => (
        <CategoryCard {...e} />
      ))}
    </div>
  );
}
