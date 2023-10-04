import * as React from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import styles from "../../styles/Home.module.css";
import smoothScrollHandler from "../../utility/scroll-handler";

const Hero = () => {
  const goToPortfolioHandler = () => {
    smoothScrollHandler("Portfolio");
  };
  return (
    <Box component="div" sx={{ minHeight: "70vh" }}>
      <Typography
        variant="h2"
        component="div"
        color="secondary"
        sx={{ marginTop: "30vh" }}
        gutterBottom
      >
        Raffaele Cataldo
      </Typography>
      <div style={{ padding: 2 }}>
        <Typography fontSize={18} className={styles.code}>
          I&apos;m a full stack developer working primarily with React and
          TypeScript.
          <br />
          <br />
          Currently I&apos;m excited about using Rust to build performant,
          stable, and scalable systems.
          <br />
          <br />I love ambitious goals, a bit of adventure, and close
          companions.
        </Typography>
        <br />
        <br />
      </div>
      <div>
        <Button
          onClick={() => goToPortfolioHandler()}
          variant="contained"
          color="secondary"
          disableElevation
          sx={{ padding: 2 }}
        >
          Check Out my Portfolio
        </Button>
        {"   "}
        <Link
          underline="none"
          href="https://github.com/farmeroy"
          rel="noreferrer"
          target="_blank"
        >
          <Button variant="outlined" color="secondary" sx={{ padding: 2 }}>
            Check out my GitHub
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default Hero;
