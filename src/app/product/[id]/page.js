import data from "@/app/utils.js/data";
import Image from "next/image";
import React from "react";

const product = data;
export default function ProductPage() {
  return (
    <div className={'min-h-screen'}>
      <Image src={product.image} alt={product.name} height={130} width={160} />
    </div>
  );
}
