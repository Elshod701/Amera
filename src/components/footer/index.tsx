"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import footer_img from "@/assets/images/footer.png";
import Image from "next/image";
const Footer = () => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="bg-[#394150]">
        <Button
          onClick={scroll}
          className="text-center w-[100%] bg-[#4D5669] hover:bg-[#686f82] rounded-none py-[30px]"
        >
          Back to Top
        </Button>
        <div className="container px-5 xl:px-10">
          <div className="footer-wrapper flex flex-wrap gap-10 items-start text-white py-[10px] justify-between w-[100%]  lg:gap-0 lg:w-[80%] lg:py-[70px]">
            <ul className="flex items-start flex-col">
              <h2 className="text-base font-medium mb-6">Company Info</h2>
              <div className="flex flex-col gap-3 text-[#DDDDD4]">
                <li className="text-sm hover:text-[#FCB700] hover:cursor-pointer hover:underline">
                  About us
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Contact us
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Careers{" "}
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Business With Us
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Find a Store t
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Press & Talen
                </li>
              </div>
            </ul>
            <ul className="flex items-start flex-col">
              <h2 className="text-base font-medium mb-6">Let Us Help You</h2>
              <div className="flex flex-col gap-3 text-[#DDDDD4]">
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Orders{" "}
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Downloads{" "}
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Addresses{" "}
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Account
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Lost password
                </li>
              </div>
            </ul>
            <ul className="flex items-start flex-col">
              <h2 className="text-base font-medium mb-6">Quick Links</h2>
              <div className="flex flex-col gap-3 text-[#DDDDD4]">
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Special Offers
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Gift Cards
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  F21 Red
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Privacy Policy
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Teams of Use
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Portfolio
                </li>
              </div>
            </ul>
            <ul className="flex items-start flex-col">
              <h2 className="text-base font-medium mb-6">Company Info</h2>
              <div className="flex flex-col gap-3 text-[#DDDDD4]">
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  About us
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Contact us
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Careers{" "}
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Business With Us
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Find a Store t
                </li>
                <li className="text-sm hover:text-[#FCB700]  hover:cursor-pointer hover:underline">
                  Press & Talen
                </li>
              </div>
            </ul>
          </div>
        </div>
      </footer>

      <div className="footer-bottom bg-[#202935] py-[10px] flex items-center justify-between md:py-[30px]">
        <div className="container">
          <div className="flex items-center justify-between flex-col gap-2  xl:flex-row xl:gap-0">
            <div className="flex items-center flex-col gap-2 xl:flex-row xl:gap-0">
              <p className="text-[#9DA3AF] text-center gap-0 text-[14px] sm:text-[18px]">
                Copyright © 2019 amera Theme by Lionthemes &nbsp; | &nbsp;
              </p>
              <div className="flex gap-4 ">
                <Link
                  href="#"
                  className="text-white text-base hover:underline hover:text-[#FCB700] hidden sm:text-[14px] sm:block md:text-[18px]"
                >
                  Site map
                </Link>
                <Link
                  href="#"
                  className="text-white text-base hover:underline hover:text-[#FCB700] hidden sm:text-[14px] sm:block md:text-[18px]"
                >
                  Search Terms
                </Link>
                <Link
                  href="#"
                  className="text-white text-base hover:underline hover:text-[#FCB700] hidden sm:text-[14px] sm:block md:text-[18px]"
                >
                  Advanced Search
                </Link>
                <Link
                  href="#"
                  className="text-white text-base hover:underline hover:text-[#FCB700] hidden sm:text-[14px] sm:block md:text-[18px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="images hidden items-center gap-2 pt-2 xl:pt-0 sm:flex ">
              <Image src={footer_img} alt="Picture of the author" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
