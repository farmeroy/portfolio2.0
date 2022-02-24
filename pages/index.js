import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import ContactForm from "../components/sections/Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raffaele Cataldo - Developer</title>
        <meta name="description" content="built by Raffaele Cataldo" />
        <link rel="icon" href="/R.svg" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <Hero />
        </div>
        <About />
        <Projects />
        <ContactForm />
        {"  "}
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image
            src="/R.svg"
            alt="Raffaele Cataldo Logo"
            width={140}
            height={32}
          />
        </span>
      </footer>
    </div>
  );
}
