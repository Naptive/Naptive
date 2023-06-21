import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import more from "../public/more-vertical.svg";

export default function ProductItem({ product }) {
  return (
    <div
      style={{
        boxShadow: "0 2px 2px 0 rgba(255, 255, 255, 0.08), 0 0 2px 0 rgba(255, 255, 255, 0.16)",
        height: "90%",
        width: "90%",
        maxWidth: "160px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "black"
      }}
    >
      <Link href={`/product/${product.slug}`} passHref>
        <div style={{ 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center',
          height: '100%',
          width: '100%',
           }}>
          <Image
            src={product.image}
            alt={product.name}
            priority
            height={130}
            width={160}
            objectFit="cover"
            
            style={{}}
          />
        </div>
      </Link>

      <div
        style={{
          width: "100%",
          height: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <Link href={`/product/${product.slug}`} passHref>
          <div style={{ cursor: 'pointer' }}>
            <p style={{
              whiteSpace: 'nowrap',
              width: '100px',
            overflow: 'hidden',
            textOverflow: 'ellipsis', 
            }}>{product.name}</p>
          </div>
        </Link>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p style={{ 
            
            marginBottom: "2px", 
            fontWeight: "100",
            
            
            }}>
            {product.brand}</p>
          <p style={{ marginBottom: "2px", fontWeight: "200" }}>
            R{product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
