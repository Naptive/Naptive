'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import more from "../public/more-vertical.svg";
import Rating from "./Ratings";

export default async function ProductItem({ product }, inter) {
  return (
    <div  
    className={inter}
      style={{
        minHeight: "136px",
        width: "90%",
        maxWidth:"233px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end",
        overflow: "hidden",
        backgroundColor: "white",
        marginLeft: "auto",
        marginRight: "auto",
        
      }}
    >
      <Link href={`/product/${product.id}`} passHref>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "185px",
            minWidth: "100%",
            
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            loading="eager"
            height={110}
            width={120}
            className="object-contain pointer-events-none active:bg-transparent"
            
          />
        </div>
      </Link>

      <div
        style={{
          width: "100%",
          minHeight: "70px",
          maxHeight:"70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          backgroundColor:"black",
          justifyContent: "start",
          gap: "5px",
          
        }}
      >
        <Link href={`/product/${product.title}`} passHref>
          <div style={{ cursor: "pointer" }}>
            <p
              style={{
                whiteSpace: "nowrap",
                width: "100px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {product.name}
            </p>
          </div>
        </Link>

        <div
          className="px-2 py-2 min-h-full flex flex-col gap-1"
        >
          <h5 style={{fontWeight:"300",overflow: "hidden", whiteSpace: "nowrap",textOverflow: "ellipsis",width:"100%" }}>
            {product.title}
          </h5>
          <div className="min-w-full flex justify-between">
            <div className="w-2/4 sm:w-2/3 flex">
              <Rating />
              <Rating />
              <Rating />
              <Rating />
              <Rating />

            </div>
          <div
            className="w-2/4 sm:w-1/3 text-[15px] font-extralight"
          > <p className="w-full text-end">
            R{product.price}
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
