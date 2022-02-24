import { Grid, Typography, Box } from '@mui/material'
import ProjectCard from '../../components/UI/ProjectCard';
import meetApp from '../../public/meet-app.png'


const projectArr = [
  {
    title: 'Meet App',
    img: '/meet-app.png',
    alt: 'An image of meet app',
    description: 'A progressive web app built with React.Users can access events via Google Calender API to search for web developer workshops across the globe, and also view data related to their search.Users sign in with GoogleAuth0'
  },
{
    title: 'Pre-Code-Flix',
  img: '/movie-app.png',
    alt: 'A screenshot of the app',
    description: "This is a 'IMDB style' movie app. Users create an account, log in, and interact with a database of early Hollywood cinema.The front end is built with React, React-Router and React-Bootstrap.The back-end is built with Node, Passport, and MongoDB, Login with username: 'testUser', password: 'password' "  },{
    title: 'Mancala',
      img: '/mancala.png',
    alt: 'a screenshot of the app',
    description: "This project is a two player strategy game made with React. It's based on the board game Mancala. It's one of my favorite board games, and the challenge here was to recreate the experience using react. The gameplay relies heavily on useReducer and useContext. Aside from styling the board, writing the gameplay algorithm was the focus of this app, and an enjoyable challenge."
  }


]

const Projects = () => {
  return (
    <Box >
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12}>
      <Typography variant="h2" sx={{fontFamily:'Noto Sans Mono'}}>My Projects</Typography>  
      </Grid>
      {projectArr.map((project) => (
        <Grid item md={4} key={project.title}>
        <ProjectCard
          key={project.title}
          title={project.title} 
          img={project.img}
          description={project.description}
          gitUrl={project.gitUrl}
          liveUrl={project.liveUrl}
          />
</Grid>
      ))}  
    </Grid>
</Box>
  )
}

export default Projects;
