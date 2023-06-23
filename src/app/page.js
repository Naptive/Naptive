import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import ProductItem from "../../components/Productitem";
import data from "./utils.js/data";
import RootLayout from "./layout";

export default function Home(inter) {
  return (
    <main className={styles.main}>
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

      <div className={styles.under}>
        {" "}
        <div className={styles.filters}></div>
      </div>

      <div className={styles.Products}>
        {data.products.map((products) => (
          <ProductItem product={products} key={products.id}></ProductItem>
        ))}
      </div>
    </main>
  );
}
