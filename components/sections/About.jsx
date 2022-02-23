import { Container, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import portrait from "../../public/portrait1bw.JPG";

const About = () => {
  return (
    <Container sx={{ width: 700, padding: 5 }}>
      <Typography variant="h2">About me</Typography>
            <Typography variant="p">
<Box sx={{ width: 200 }}>
        <Image alt="a portrait of me" src={portrait} />
      </Box>

        I've always enjoyed a challenge. As a professional musician, I played in
        a circus band and travelled from Istanbul to Singapore by bicycle. These
        days, my challenge is developing React apps using Vim in my terminal!
        <br />
        As a former jazz musician who discovered a passion for coding, I enjoy
        delving into complex topics like music theory and JavaScript. My current
        goal is to find a Web Developer position remote or in Berlin, my adopted
        hometown.
        <br />
        With years working in small groups and dedicating myself to practice, I
        know how to work on a team and also how to maintain discipline and focus
        in remote work. I've built landing pages for colleagues' musical
        projects, built my own Rest APIs from scratch, and developed single page
        applications with React. I'm looking to take on more responsibility and
        looking forward to becoming part of a cutting-edge team.
        <br />
        In my spare time, I raise 2 children, bake bread, and still manage to
        play music now and again. <br />
      </Typography>
      <Button color="secondary" variant="outlined" sx={{ padding: 2 }}>
        Download Resume
      </Button>
    </Container>
  );
};

export default About;
