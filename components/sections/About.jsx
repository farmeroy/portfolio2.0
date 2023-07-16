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
            I&apos;m a passionate web developer based in Northern California,
            specializing in NextJS with TypeScript and experienced in working on
            large-scale React codebases. My focus revolves around creating
            intuitive UI components, tackling complex forms, and designing
            robust database models and APIs to deliver exceptional user
            experiences.
            <br />
            <br />
            Previously a jazz violinist perpetually on tour, I came to web
            development during the pandemic, when I found myself with all
            together too much time on my hands. I discovered a creative and
            intellectual outlet in programming, building websites for artists in
            my community. Witnessing the impact of my work, I became deeply
            committed to leveraging the power of the web to positively change
            the world.
            <br />
            <br />
            <br />
            <br />
            I believe in the power of the web to change the world, and I&apos;m
            excited to make an impact, and currently volunteer time to the
            Radical Engineers project. Most recently working on a survey app for
            workplace accessibility startup Sick in the City.
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
            If you&apos;re seeking a developer who brings creativity,
            dedication, and a fresh perspective to your tech company&apos;s
            mission, let&apos;s connect on LinkedIn. I&apos;m always open to
            discussing .vimrc, music theory, or anything related to software and
            web development. Let&apos;s make an impact together!
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
