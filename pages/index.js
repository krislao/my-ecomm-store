import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Space Jelly</a> store
        </h1>

        <p className={styles.description}>
          Get started by selecting our products
        </p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href="#">
              <Image
                src="/spacejelly-tshirt.jpg"
                alt="Space Jelly Tshirt"
                width={250}
                height={250}
                layout="responsive"
              />
              <h3>Space Jelly Tshirt</h3>
              <p>
                Bring Cosmo the space Jellyfish to your wardrobe with this high
                quality tshirt.
              </p>
              <p>$50</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="#">
              <Image
                src="/spacejelly-stickers.jpg"
                alt="Space Jelly Stickers"
                width={250}
                height={250}
                layout="responsive"
              />
              <h3>Space Jelly Stickers</h3>
              <p>
                Add some flare to your laptop with a sticker of Cosmo the Space
                Jellyfish.
              </p>
              <p>$25.00</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href="#">
              <Image
                src="/spacejelly-combo.jpg"
                alt="Space Jelly Combo"
                width={250}
                height={250}
                layout="responsive"
              />

              <h3>Space Jelly Combo</h3>
              <p>
                Show your love for Cosmo with a tshirt and sticker combo pack!
              </p>
              <p>$60</p>
            </a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
