import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function LikeCount() {
  const { likeCount } = useSelector((state: any) => state.like);
  const { data } = useSession();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Link href={"/like"} className="group">
        <div className="flex flex-col items-center relative ">
          <CiHeart className="text-4xl" />
          <p className="text-[14px] hover:text-yellow-500">
            Favorites
          </p>
          {likeCount ? (
            <span className="absolute top-[-10px] right-[5px] w-[20px] h-[20px] bg-red-500 rounded-full text-white font-bold flex items-center justify-center text-[14px]">
              {likeCount}
            </span>
          ) : null}
        </div>
      </Link>
    </>
  );
}
