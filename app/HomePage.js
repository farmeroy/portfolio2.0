"use client";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import ContactForm from "../components/sections/Contact";
import { Grid, Fab } from "@mui/material";
import ScrollToTopBtn from "../components/UI/ScrollToTopBtn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const HomePage = ({}) => {
  return (
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
  );
};

export default HomePage;
