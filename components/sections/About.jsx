import { Link, Typography, Button, Box, Grid } from "@mui/material";
import Image from "next/image";
import portrait from "../../public/portrait1bw.JPG";

const About = () => {

  
  return (
    <Box id="About" sx={{ marginBottom: 12 }}>
      <Grid container spacing={4} alignItems='center'>
        <Grid item xs={12}>
          <Typography variant="h2">About me</Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant="p">
            I&apos;ve always enjoyed a challenge. As a professional musician, I
            played in a circus band and travelled from Istanbul to Singapore by
            bicycle. These days, my challenge is developing React apps using Vim
            in my terminal!
            <br />
            As a former jazz musician who discovered a passion for coding, I
            enjoy delving into complex topics like music theory and JavaScript.
            My current goal is to find a Web Developer position remote or in
            Berlin, my adopted hometown.
            <br />
            With years working in small groups and dedicating myself to
            practice, I know how to work on a team and also how to maintain
            discipline and focus in remote work. I&apos;ve built landing pages for
            colleagues&apos; musical projects, built my own Rest APIs from scratch,
            and developed single page applications with React. I&apos;m looking to
            take on more responsibility and looking forward to becoming part of
            a cutting-edge team.
            <br />
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box>
            <Image alt="a portrait of me" src={portrait} />
          </Box>
        </Grid>
        <Grid item md={4} />
        {/* <Grid item xs={10} sm={2} md={3}> */}
        {/*   <Button */}
        {/*     color="secondary" */}
        {/*     disableElevation */}
        {/*     variant="contained" */}
        {/*     sx={{ padding: 2 }} */}
        {/*   > */}
        {/*     Contact Me */}
        {/*   </Button> */}
        {/* </Grid> */}
        <Grid item xs={10} sm={2} md={3}>
          <Button color="secondary" variant="contained" sx={{ padding: 2 }}>
            <Link underline="none" href="/RaffaeleCataldoCV.pdf" target="_blank">Download Resume</Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
