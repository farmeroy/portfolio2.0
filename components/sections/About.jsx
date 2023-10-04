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
            I enjoy creating intuitive user experiences, refactoring complicated
            code, and solving problems of every shape and dimension.
            <br />
            <br />
            Before becoming a software developer I was a jazz violinist and
            absolutely thrive on small teams where we take turns leading and
            supporting: that is essentially what improvised music is, to me that
            is the essence of the creative process, no matter what the medium.
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
