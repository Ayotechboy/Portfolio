import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className=" flex flex-col gap-7">
      <p className=" font-semibold text-2xl">Want to collaborate ?</p>
      <div className=" flex gap-6 flex-col lg:flex-row text-xs font-semibold">
        <Link href={"ayodejibell@gmail.com"}>
          {" "}
          Email : ayodejibell@gmail.com
        </Link>

        <Link href={"https://linkedin.com/in/ayodeji-ayorinde001"}>
          {" "}
          Linkedin : Ayodeji Ayorinde
        </Link>
      </div>
      <div className=" border-[1.5px] border-[#C5BDBD] my-10"></div>
    </section>
  );
};

export default Footer;
