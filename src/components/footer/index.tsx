import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import footer_img from "@/assets/images/footer.png";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#394150]">
        <Button className="text-center w-[100%] bg-[#4D5669] hover:bg-[#686f82] rounded-none py-[30px]">
          Back to Top
        </Button>
        <div className="container">
          <div className="footer-wrapper flex items-start text-white py-[70px] justify-between w-[80%] ">
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
      <div className="footer-bottom bg-[#202935] py-[30px] flex items-center justify-between">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-[#9DA3AF]">
              Copyright © 2019 amera Theme by Lionthemes &nbsp; | &nbsp;
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-white text-base hover:underline hover:text-[#FCB700]"
              >
                Site map
              </Link>
              <Link
                href="#"
                className="text-white text-base hover:underline hover:text-[#FCB700]"
              >
                Search Terms
              </Link>
              <Link
                href="#"
                className="text-white text-base hover:underline hover:text-[#FCB700]"
              >
                Advanced Search
              </Link>
              <Link
                href="#"
                className="text-white text-base hover:underline hover:text-[#FCB700]"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="images flex items-center gap-2">
            <Image src={footer_img} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
