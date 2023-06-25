import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import more from "../public/more-vertical.svg";

export default function ProductItem({ product }) {
  return (
    <div  
      style={{
        boxShadow:
          "0 2px 2px 0 rgba(255, 255, 255, 0.08), 0 0 2px 0 rgba(255, 255, 255, 0.16)",
        height: "90%",
        width: "90%",
        maxWidth: "160px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end",
        overflow: "hidden",
        backgroundColor: "white",
        margin:"0px",
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
            loading="lazy"
            height={110}
            width={120}
            className="object-contain pointer-events-none"
            
          />
        </div>
      </Link>

      <div
        style={{
          width: "100%",
          minHeight: "60px",
          maxHeight:"60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          backgroundColor:"black",
          justifyContent: "start",
          gap: "5px",
          padding: "3px 10px",
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
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            gap: "3px",
            height: "100%",
          }}
        >
          <h5 style={{fontWeight:"300",overflow: "hidden", whiteSpace: "nowrap",textOverflow: "ellipsis",width:"100%" }}>
            {product.title}
          </h5>
          
          <p
            style={{
              marginBottom: "2px",
              fontWeight: "200",
              textAlign:"end",
              fontSize: "12px",
              padding:"5px",
            }}
          >
            R{product.price}
          </p>
        </div>
      </div>
    </div>
    
  );
}
