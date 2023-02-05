import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Name() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {/* <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority /> */}
        <h1>Name</h1>
        {/* <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div> */}
      </div>
      <div>
        <Link href="./">
          <h2>Home Page</h2>
        </Link>
      </div>
    </main>
  );
}
