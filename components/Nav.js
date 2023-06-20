import Link from "next/link";
import  Image  from "../next.config";
import { Router } from "next/router";

 const router = new Router();
 console.log(router);


export default function Nav() {
  return (
    <><nav>
          <div className={styles.logo}>
              <Image className={styles.LOG} src={logo} alt="Naptive logo" />
          </div>
      </nav><nav>
              <div className={styles.NavLinks}>
                  <Link href='/Contact' className={styles.link}>
                      Contact
                  </Link>
                  <Link href='/Pricing' className={styles.link}>
                      Pricing
                  </Link>
                  <Link href='/Team' className={styles.link}>
                      Team
                  </Link>
              </div>
          </nav></>
  );
}
