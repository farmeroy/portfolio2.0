import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import ContactForm from "../components/sections/Contact";
import { Grid, Fab } from "@mui/material";
import ScrollToTopBtn from "../components/UI/ScrollToTopBtn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Home(props) {
  return (
    <div id="back-to-top-anchor">
      <Head>
        <title>Raffaele Cataldo - Developer</title>
        <meta
          name="description"
          content="My awesome portfolio website built using NextJS and MUI"
        />
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
        </Grid>
        <Grid item xs={1} lg={2} />
        <ScrollToTopBtn {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollToTopBtn>
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
