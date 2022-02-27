import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import ContactForm from "../components/sections/Contact";
import {Grid} from '@mui/material';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Raffaele Cataldo - Developer</title>
        <meta name="description" content="built by Raffaele Cataldo" />
        <link rel="icon" href="/R.svg" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Navbar />
      <Grid container>
      <Grid item xs={1} xl={2} />
      <Grid item xs={10} xl={8}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <Hero />
        </div>
        <About />
        <Projects />
        <ContactForm />
        {"  "}
      </main>
      </Grid >
      <Grid item xs={1} lg={2} />
      </Grid>

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
