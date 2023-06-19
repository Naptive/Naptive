import Image from 'next/image'
import Link from 'next/link'
import React from "react";
import styles from './page.module.css'
import logo from 'public/Naptive.svg'
import search from 'public/search.svg'
import more from "public/more-vertical.svg";
import ProductItem from '../../components/Productitem'
import data from './utils.js/data'



 
export default async function Home(inter) {

  return (
    
    <main className={styles.main} >
      <nav className={styles.nav}>
             <div className={styles.inner}>
                  <div className={styles.logo}>

                     <Image
                     className={styles.LOG}
                     src={logo}
                     alt="Picture of the author"
                     />
                  
                  </div>
                          <div className={styles.NavLinks}>
                            <Link href='/Contact' className={styles.link}>
                              Contact
                            </Link>
                            <Link href='/Contact' className={styles.link}>
                              Pricing
                            </Link>
                            <Link href='/Contact' className={styles.link}>
                              Team
                            </Link>
                         </div>

                  <div className={styles.icons}>
                    <button className={styles.B}>
                    <Image
                     className={styles.SearchIcon}
                     src={search}
                     alt="Picture of the author"
                     /> 
                    </button>

                    <Link href='/SignUp' className={styles.SignUp}><span>Sign Up</span></Link>
                  </div>
                    
             </div>
      </nav>
        
        <div className={styles.CatWrap}>
               <div className={styles.cat}><Link href='/Contact'>Electronic</Link></div>
               <div className={styles.cat}><Link href='/Contact'>Health</Link></div>
               <div className={styles.cat}><Link href='/Contact'>Fashion</Link></div>
               <div className={styles.cat}><Link href='/Contact'>Fitness</Link></div>
               <div className={styles.moreCat}><Link className={styles.moreImg} href='/Contact'><Image className={styles.Img} src={more}/></Link></div>

             
        </div>
           
           <div className={styles.under}> <div className={styles.filters}></div></div>

          <div className={styles.Products}>
            {data.products.map((products) => (
            <ProductItem  product={products} key={products.slug}></ProductItem>
           ))}
           </div>
           
       
    </main>
  )
}
