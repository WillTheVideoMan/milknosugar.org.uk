import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/milknosugar.png"
        width={300}
        height={300}
        alt="Milk No Sugar Logo"
      />
    </main>
  );
}
