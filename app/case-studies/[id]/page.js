"use client";

import styles from "../../../styles/caseStudies.module.css";
import Contact from "../../../components/sections/Contact";
import { Grid, Fab, Typography } from "@mui/material";
import ScrollToTopBtn from "../../../components/UI/ScrollToTopBtn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/navigation";
import {
  getAllCaseStudyIds,
  getCaseStudyData,
} from "../../../lib/case-studies";

async function getStudies() {
  const paths = await getAllCaseStudyIds();
  return {
    paths,
    fallback: false,
  };
}

async function getCaseStudy(id) {
  return await getCaseStudyData();
}

const CaseStudy = async (props) => {
  const { params } = useRouter();
  const caseStudyData = await getCaseStudy(params.id);

  return (
    <>
      <div id="back-to-top-anchor">
        <Grid container>
          <Grid item xs={1} lg={2} />
          <Grid item xs={10} lg={8}>
            <main className={styles.main}>
              <br />
              <Typography variant="h1">{caseStudyData.title}</Typography>
              <Grid item xs={12}>
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
      </div>
    </>
  );
};

//
//
// export async function getStaticPaths() {
//   const paths = getAllCaseStudyIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const caseStudyData = await getCaseStudyData(params.id);
//   return {
//     props: {
//       caseStudyData,
//     },
//   };
// }

export default CaseStudy;
