import React from "react";
import { Marcellus_SC } from "next/font/google";
import Link from "next/link";
const marcellus = Marcellus_SC({ subsets: ["latin"], weight: "400" });
function Header() {
  return (
    <div className=" flex justify-center items-center border-2 border-black w-full h-[8rem] hover:bg-red-100">
      <div className=" text-8xl tracking-widest  font-black font-[marcellus] ">
        <Link href="http://localhost:3004">Astral.ai</Link>
      </div>
    </div>
  );
}

export default Header;
