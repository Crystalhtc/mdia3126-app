import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <font style={{
          fontSize:50
        }}>Welcome to my app!</font>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
