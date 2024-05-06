import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { GiHeadphones } from "react-icons/gi";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CiStar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav-up h-12 flex items-center justify-between">
          <p className="text-sm">Welcome to Worldwide Electronics Store</p>
          <div>
            <div className="nav-up-list flex w-[355px] justify-between ">
              <p className="pr-[15px] border-r border-black">My account</p>
              <p className="pr-[15px] border-r border-black">Checkout</p>
              <p className="pr-[15px] border-r border-black">Shop</p>
              <p>Wishlist</p>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-middle  w-[100%] border-t border-[#EBEBEB] border-b">
        <div className="container flex items-center justify-between h-[110px]">
          <Link href="/">
            <Image src={logo} width={150} alt="Picture of the author" />
          </Link>

          <div className="flex items-center  gap-10">
            <div className="flex items-center gap-1">
              <GiHeadphones className="text-5xl" />
              <div className="text-sm">
                <p>Hotline Free:</p>
                <a className="font-medium" href="tel:+06-900-6789-00">
                  06-900-6789-00
                </a>
              </div>
            </div>

            <form className="rounded-[30px]  border-[#fcb700] border-[2px] w-[540px] h-[50px] flex items-center">
              <Input />
              <Button
                variant="outline"
                className="rounded-r-[30px] h-[100%] px-10 rounded-l-[0px] bg-[#fcb700] border-none hover:bg-[#ffd051]"
              >
                Search
              </Button>
            </form>

            <div className="icons flex items-center justify-between gap-5">
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
          </div>
        </div>
      </div>

      <div className="nav-bottom h-[55px] flex items-center justify-center ">
        <div className="container">
          <div className="wrapper flex items-center justify-between  h-[100%] ">
            select option
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
