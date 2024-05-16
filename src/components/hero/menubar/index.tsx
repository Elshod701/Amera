import { useGetCategories } from "@/service/query/useGetCategories";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { nanoid } from "nanoid";
import React from "react";
import Link from "next/link";

export default async function HerMenubar() {
  const categoryData = await useGetCategories();

  return (
    <div id="cat_bar" className="overflow-y-scroll h-[425px] ">
      {categoryData.results.map((category) => (
        <>
          <Menubar key={nanoid()} className="flex rounded-none w-full">
            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-3 w-[400px]">
                <img
                  src={category.image}
                  className="w-[30px] h-[30px] object-cover object-center"
                  alt="cat_img"
                />
                <p> {category.title}</p>
              </MenubarTrigger>

              <MenubarContent className="ml-[300px] z-[8888]">
                <MenubarItem className="w-[600px] h-[300px] flex items-start gap-3">
                  <img
                    key={nanoid()}
                    className="w-[300px] h-[300px] object-center object-cover"
                    src={category.image}
                    alt="cat_img"
                  />
                  <div>
                    <p className="text-bold pb-3">Sub-categories:</p>
                    {category.children.map((e) => (
                      <Link href={`/products/${e.id}`}>
                        <p className="hover:text-yellow-400 cursor-pointer text-[16px] pb-2">
                          {e.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </>
      ))}
    </div>
  );
}
