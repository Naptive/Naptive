"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/Naptive.svg";
import search from "../public/search.svg";
import user from "../public/user.svg";
import Navlink from "./navlink";

export default function Nav(useRouter) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 627);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header
      style={{
        width: "100vw",
        height: isMobile ? "54px" : "64px",
        padding: isMobile ? "0px 5px" : "0px 32px",
        position: "fixed",
        top: "0px",
        display: "flex",
        alignItems: "center",
        boxShadow: "inset 0 -1px #333",
        backdropFilter: "blur(1px)",
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0, 0, 0, 0.638)",
      }}
    >
      <nav
        style={{
          width: "40%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <Link href={"/"}>
            <Image
              style={{
                width: isMobile ? "115px" : "130px",
                height: isMobile ? "15.91px" : "18px",
                marginLeft: isMobile ? "10px" : "0px",
              }}
              src={logo}
              loading="eager"
              priority
              alt="Picture of the author"
            />
          </Link>
        </div>
      </nav>

      {!isMobile && (
        <nav
          style={{
            position: "fixed",
            right: "15em",
            width: "min-content",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "20px",
          }}
        >
          <Link
            className="text-[14.3px] font-light text-stone-400 antialiased hover:text-white"
            href={"/"}
          >
            <p>Home</p>
          </Link>
          <Link
            className="text-[14.3px] font-light text-stone-400 antialiased hover:text-white"
            href={"/Cart"}
          >
            <p>Cart</p>
          </Link>
          <Link
            className="text-[14.3px] font-light text-stone-400 antialiased hover:text-white"
            href={"/Help"}
          >
            <p>Help</p>
          </Link>
        </nav>
      )}

      <nav
        style={{
          width: "60%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {" "}
        <Link href={"/Help"}>
          <Image
            className="mr-1 h-auto max-w-[19px]"
            src={"/Help.svg"}
            alt="Help icon"
            priority
            loading="eager"
            width={19}
            height={19}
          />
        </Link>
        <Link href={"/Cart"}>
          <Image
            className="mr-1 h-auto max-w-[18px]"
            src={"/Cart.svg"}
            alt="Picture of the author"
            priority
            loading="eager"
            width={18}
            height={18}
          />
        </Link>
        <Image
          style={{ maxWidth: "24px", height: "auto" }}
          src={search}
          alt="Picture of the author"
          priority
          loading="eager"
        />
        <Link href={"/auth/Login"} legacyBehavior>
          <div className="cursor-pointer">
            <Image
              src={user}
              className="ml-5 h-10 w-auto"
              alt="Account icon"
              priority
            />
          </div>
        </Link>
      </nav>
    </header>
  );
}
