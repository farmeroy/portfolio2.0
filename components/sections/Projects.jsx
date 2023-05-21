import { Link, Button, Grid, Typography, Box } from "@mui/material";
import ProjectCard from "../../components/UI/ProjectCard";

const projectArr = [
  {
    title: "Synth App",
    img: "/synth-app-1.png",
    alt: "A screen shot of synth app sequener",
    description:
      "A Synthesizer/Sequencer application built with React/TypeScript, Next.js, Tone.js, using Recoil for state management. The user can create a pallet of notes and play music! This is the beginning of a larger, full-stack project",
    gitUrl: "https://github.com/farmeroy/synth-app",
    liveUrl: "https://synth-app.vercel.app/",
    caseStudy: "synth-app",
  },
  {
    title: "Pre-Code-Flix",
    img: "/movie-app.png",
    alt: "A screenshot of the app",
    description:
      "This is a full-stack 'IMDB style' movie app. The front end is built with React, React-Router and React-Bootstrap. The back-end is built with Node, Passport, and MongoDB, Login with username: 'testUser', password: 'password' ",
    gitUrl: "https://github.com/farmeroy/Movie-App-Client",
    liveUrl: "https://pre-code-flix.netlify.app",
    caseStudy: "pre-code-flix",
  },
  {
    title: "Mancala",
    img: "/mancala.png",
    alt: "a screenshot of the app",
    description:
      "This project is a two player strategy game made with React.  The game's logic takes advantage of the useContext hook. Aside from styling the board, writing the gameplay algorithm was the focus of this app, and an enjoyable challenge.",
    gitUrl: "https://github.com/farmeroy/mancala",
    liveUrl: "https://farmeroy.github.io/mancala/",
  },
  {
    title: "Meet App",
    img: "/meet-app.png",
    alt: "An image of meet app",
    description:
      "A full-stack, progressive web app built with React and AWS Lambda. Users can access events via Google Calender API to search for web developer workshops across the globe, and also view data related to their search.Users sign in with GoogleAuth0",
    gitUrl: "https://github.com/farmeroy/meet-app",
    liveUrl: "https://farmeroy.github.io/meet-app",
    caseStudy: "meet-app",
  },
  {
    title: "Goodnight Circus Landing Page",
    img: "/goodnight.png",
    alt: "a band playing music",
    description:
      "This is a landing page made for a Berlin based music group. It was developed with vanilla HTML/CSS and a bit of javascript to handle the scrolling and menu bar.",
    gitUrl: null,
    liveUrl: "http://goodnightcircus.com",
  },
  {
    title: "Chat-App",
    img: "/chat-app.png",
    alt: "an image of an iphone screen using the app",
    description:
      "This is a mobile chat app. It was developed with React-Native, Expo, and Gifted Chat. The messages and images are stored in Firebase. Users can can send text messages, images, and their location to all other users in the room.",
    gitUrl: "https://github.com/farmeroy/chat-app",
  },
  {
    title: "Synthesizer Web App",
    img: "/noise-machine.png",
    alt: "screen shot of the web app interface",
    description:
      "This project uses the JavaScript Web Audio API, vanilla JavaScript, and object oriented programming to construct a musical web app. You can play with large chords with multiple voicings.",
    gitUrl: "https://github.com/farmeroy/Noise-Machine",
    liveUrl: "https://farmeroy.github.io/Noise-Machine",
  },
];

const Projects = () => {
  return (
    <Box id="Portfolio" component="div" sx={{ marginBottom: 12 }}>
      <Grid container spacing={2} rowSpacing={4} alignItems="stretch">
        <Grid item xs={12}>
          <Typography variant="h2">My Projects</Typography>
        </Grid>
        {projectArr.map((project) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={project.title}>
            <ProjectCard
              title={project.title}
              img={project.img}
              description={project.description}
              gitUrl={project.gitUrl}
              liveUrl={project.liveUrl}
              caseStudy={project.caseStudy}
            />
          </Grid>
        ))}
        <Grid item xs={1} md={5}></Grid>
        <Grid item xs={10} md={4}>
          <Link
            underline="none"
            href="https://github.com/farmeroy"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="contained" color="secondary" sx={{ padding: 2 }}>
              See all on GitHub
            </Button>
          </Link>
        </Grid>
        {/* <Grid item xs={10} md={2}> */}
        {/* <Link underline='none' href='https://github.com/farmeroy/portfolio2.0' rel="noreferrer" target="_blank"> */}
        {/*   <Button variant="outlined" color="secondary" sx={{padding:2}}>Source code for this website</Button> */}
        {/* </Link> */}

        {/* </Grid> */}
      </Grid>
    </Box>
  );
};

export default Projects;
