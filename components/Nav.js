"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/Naptive.svg";
import search from "../public/search.svg";

import ActiveLink from "./ActiveLink";

export default function Nav() {
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
        backdropFilter: "blur(2px)",
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
          <Image
            style={{
              width: isMobile ? "115px" : "130px",
              height: isMobile ? "15.91px" : "18px",
              marginLeft: isMobile ? "10px" : "0px",
            }}
            src={logo}
            alt="Picture of the author"
          />
        </div>
      </nav>

      {!isMobile && (
        <nav
          style={{
            position: "fixed",
            right: "15em",
            width: "min-content",
            height: "64px",
            fontWeight: "300",
            fontSize: "14.5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "20px",
            color: "#b0b0b0",
          }}
        >
          <ActiveLink>Home</ActiveLink>
          <ActiveLink>About</ActiveLink>
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
        <Image
          style={{ maxWidth: "18px", height: "auto", marginLeft: "25px" }}
          src={search}
          alt="Picture of the author"
        />

        <button
          style={{
            minWidth: "90px",
            height: "34px",
            fontSize: "14px",
            fontWeight: 400,
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "8px",
            marginLeft: "18px",
            marginRight: "10px",
          }}
        >
          Sign Up
        </button>
      </nav>
    </header>
  );
}
