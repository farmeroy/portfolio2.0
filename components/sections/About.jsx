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
            Previously a jazz violinist perpetually on tour, I came to web
            development during the pandemic, discovering a creative and
            intellectual outlet in programming while building websites for
            artists in my community. Witnessing the impact of that work, I
            poured my heart into building and learning about web applications.
            <br />
            <br />
            With years of collaborating in diverse ensembles and dedicating
            myself to practice, I know how to work on a team and also how to
            maintain discipline and focus in remote work.
            <br />
            <br />
            I love learning new things and having new experiences. Currently,
            that means digging into Rust, furthering my knowledge of databases,
            and working towards a BSc of Computer Science through the Open
            University.
            <br />
            <br />
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
