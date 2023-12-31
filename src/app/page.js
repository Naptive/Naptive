import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import ProductItem from "../../components/Productitem";
import data from "./utils.js/data";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
export default function Home() {
  return (
    <main className="flex bg-transparent justify-center md:justify-normal">
      <div className={styles.CatWrap}>
        <div className={styles.cat}>
          <Link href="/Contact">Electronic</Link>
        </div>
        <div className={styles.cat}>
          <Link href="/Contact">Health</Link>
        </div>
        <div className={styles.cat}>
          <Link href="/Contact">Fashion</Link>
        </div>
        <div className={styles.cat}>
          <Link href="/Contact">Fitness</Link>
        </div>
        <div className={styles.moreCat}></div>
      </div>

      <div className="w-1/3 h-screen flex items-center hidden justify-center px-4 pt-[7.9em] md:block">
        {" "}
        <div className="w-full h-[25em] bg-black ">lorem why did</div>
      </div>

      
      <div className="w-3/3 md:w-2/3 h-screen mx-[5px] grid grid-flow-row auto-rows-min auto-cols-max grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  overflow-scroll [&::-webkit-scrollbar]:hidden gap-y-4 pt-[8em] ">
        {data.products.map((products) => (
          
          <ProductItem product={products} key={products.id}></ProductItem>
          
        ))}
      </div>
      
    </main>
  );
};


