import React from "react";
import CategoryCard from "@/components/ui/category-card";
import { nanoid } from "nanoid";
import { useGetCategories } from "@/service/query/useGetCategories";

export default async function CategoryCardSection() {
  const categoryData = await useGetCategories();

  return (
    <div className="flex items-center flex-wrap justify-around gap-3 pt-4 xl:gap-0 xl:pt-0">
      {categoryData.results.slice(0, 8).map((e) => (
        <CategoryCard key={nanoid()} title={e.title} image={e.image} />
      ))}
    </div>
  );
}
