"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { GiHeadphones } from "react-icons/gi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CiStar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav-up h-6  items-center justify-between hidden sm:flex sm:flex-col lg:flex lg:flex-row lg:h-12">
          <p className="text-sm">Welcome to Worldwide Electronics Store</p>
          <div>
            <div className="nav-up-list flex w-[355px] justify-between ">
              <p className="pr-[15px] border-r border-black ">My account</p>
              <p className="pr-[15px] border-r border-black">Checkout</p>
              <p className="pr-[15px] border-r border-black">Shop</p>
              <p>Wishlist</p>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-bottom w-[100%] border-t border-[#EBEBEB] border-b">
        <div className="container flex items-center justify-between h-[60px] lg:h-[110px] px-[15px] lg:px-[30px]">
          <Link href="/">
            <Image
              src={logo}
              width={150}
              alt="Picture of the author"
              className="w-[120px] lg:w-[150px]"
            />
          </Link>

          <div className="flex items-center  gap-10">
            <div className="items-center gap-1 hidden xl:flex">
              <GiHeadphones className="text-5xl" />
              <div className="text-sm">
                <p>Hotline Free:</p>
                <a className="font-medium" href="tel:+06-900-6789-00">
                  06-900-6789-00
                </a>
              </div>
            </div>

            <form className="rounded-[30px] border-[#fcb700] border-[2px] w-[540px] h-[50px] items-center hidden lg:flex">
              <Input />
              <Button
                variant="outline"
                className="rounded-r-[30px] h-[100%] px-10 rounded-l-[0px] bg-[#fcb700] border-none hover:bg-[#ffd051]"
              >
                Search
              </Button>
            </form>

            <div className="icons items-center justify-between gap-5 hidden lg:flex">
              <div className="flex items-center flex-col">
                <CiUser className="text-4xl" />
                <span className="text-[14px]">Login</span>
              </div>
              <div className="flex items-center flex-col">
                <CiStar className="text-4xl" />
                <span className="text-[14px]">Favorites</span>
              </div>
              <div className="flex items-center flex-col">
                <CiShoppingCart className="text-4xl" />
                <span className="text-[14px]">My Cart</span>
              </div>
            </div>
            <div className="burger inline-block lg:hidden">
              <Drawer direction="left">
                <DrawerTrigger>
                  <GiHamburgerMenu className="text-3xl" />
                </DrawerTrigger>
                <DrawerContent className="py-5 w-[300px] sm:w-[400px] h-screen z-[4455]">
                  <div className="p-3 border border-yellow-400 mx-3">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="outline-none border-none"
                    />
                  </div>
                  <DrawerHeader>
                    <DrawerTitle className="pb-3">
                      <Link href="/">Home</Link>
                    </DrawerTitle>
                    <DrawerTitle className="pb-3">
                      <Link href="/products">Products</Link>
                    </DrawerTitle>
                    <DrawerTitle className="pb-3">
                      <Link href="/category">Categories</Link>
                    </DrawerTitle>
                    <DrawerTitle className="pb-3">
                      <Link href="/cart">Cart</Link>
                    </DrawerTitle>
                    <DrawerTitle className="pb-3">
                      <Link href="/like">Favourites</Link>
                    </DrawerTitle>
                    <DrawerTitle className="pb-3 ">
                      <Link href="/account">Account</Link>
                    </DrawerTitle>
                  </DrawerHeader>
                  <DrawerClose>
                    {/* <Button
                      variant="outline"
                      className="bg-gray-400 text-2xl  text-white mt-[120px] absolute right-3 bottom-[300px] rounded-full w-[50px] h-[50px] md:hidden "
                    >
                      <IoMdArrowBack />
                    </Button> */}
                  </DrawerClose>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
