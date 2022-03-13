import "../styles/globals.css";
import Link from "next/link";
import styles from "../styles/nav.module.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <h1 className={styles.h1}>PokéAPI</h1>
        </Link>
        <Link href="/form">
          <h2 className={styles.h2}>Create Pokémon</h2>
        </Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
