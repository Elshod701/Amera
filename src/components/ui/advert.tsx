import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  desc: string;
}

const Advert: React.FC<Props> = ({ title, desc, src }) => {
  return (
    <div className="flex items-center gap-4  w-[280px] justify-center border-r border[#EEEEEE]">
      <Image
        src={src}
        width={40}
        alt="image"
        height={40}
        className="aspect-auto"
      />
      <div>
        <h3 className="text-base font-medium text-black">{title}</h3>
        <p className="text-xs font-normal text-black">{desc}</p>
      </div>
    </div>
  );
};
export default Advert;
