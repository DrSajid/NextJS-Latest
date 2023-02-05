import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {/* <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority /> */}
        <div>
          <h1>Hello world</h1>
        </div>
        {/* <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div> */}
      </div>
      <div>
        <ul>
          <Link href="./name">
            <li>
              <h2>Name Page</h2>
            </li>
          </Link>
          <Link href="./name/address">
            <li>
              <h2>Address Page</h2>
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
}
