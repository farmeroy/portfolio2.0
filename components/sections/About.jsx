import { Link, Typography, Button, Box, Grid } from "@mui/material";
import Image from "next/image";

const About = () => {
  return (
    <Box id="About" sx={{ marginBottom: 12 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h2">About Me</Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant="p">
            I&apos;ve always enjoyed a challenge. As a professional musician, I
            played in a circus band and travelled from Istanbul to Singapore by
            bicycle. These days, my challenge is developing React apps using Vim
            in my terminal!
            <br />
            <br />
            With years working in small groups and dedicating myself to
            practice, I know how to work on a team and also how to maintain
            discipline and focus in remote work. I&apos;ve built landing pages
            for colleagues&apos; musical projects, built my own Rest APIs from
            scratch, and developed single page applications with React. I&apos;m
            currently developing UI for{" "}
            <Link
              href="https://www.withencore.com/"
              target="_blank"
              rel="noreferrer"
              color="secondary"
            >
              Encore
            </Link>
            , a company helping creators manage their finances.
            <br />
            <br />I love learning new things and having new experiences. If you
            want to chat about your .vimrc, music theory, or anything related to
            software and web development, send me a message or contact me on
            LinkedIn.
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box sx={{ position: "relative", "object-fit": "contain" }}>
            <Image
              alt="a portrait of me"
              width={360}
              height={360}
              src="/static/media/portrait1bw.JPG"
            />
          </Box>
        </Grid>
        <Grid item md={4} />
        <Grid item xs={10} sm={2} md={3}>
          <Button color="secondary" variant="contained" sx={{ padding: 2 }}>
            <Link
              underline="none"
              href="/RaffaeleCataldoCV.pdf"
              target="_blank"
            >
              Download Resume
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
