import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/caseStudies.module.css";
import Navbar from "../../components/Navbar";
import Contact from "../../components/sections/Contact";
import { Grid, Fab, Typography } from "@mui/material";
import ScrollToTopBtn from "../../components/UI/ScrollToTopBtn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GoHomeIconBtn from '../../components/UI/GoHomeIconBtn';

import { getAllCaseStudyIds, getCaseStudyData } from "../../lib/case-studies";

const CaseStudy = ({ caseStudyData }, props) => {
  return (
    <>
      <div id="back-to-top-anchor">
        <Head>
          <title>Raffaele Cataldo - Developer</title>
          <meta
            name="description"
            content="case study"
          />
          <link rel="icon" href="/R.svg" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Navbar />
        <Grid container>
          <Grid item xs={1} lg={2} />
          <Grid item xs={10} lg={8}>
            <main className={styles.main}>
              <br />
              <Typography variant="h1">{caseStudyData.title}</Typography>  
              <Grid item xs={12} >
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{
                    __html: caseStudyData.contentHtml,
                  }}
                />
              </Grid>
              <br />
              <Contact />
              <Grid item xs={10} md={4}></Grid>
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
            <GoHomeIconBtn />
          </span>
        </footer>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllCaseStudyIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseStudyData = await getCaseStudyData(params.id);
  return {
    props: {
      caseStudyData,
    },
  };
}

export default CaseStudy;
