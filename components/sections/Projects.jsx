import { Grid, Typography, Box } from '@mui/material'
import ProjectCard from '../../components/UI/ProjectCard';


const projectArr = [
  {
    title: 'Meet App',
    img: '/meet-app.png',
    alt: 'An image of meet app',
    description: 'A fullstack, progressive web app built with React and AWS Lambda. Users can access events via Google Calender API to search for web developer workshops across the globe, and also view data related to their search.Users sign in with GoogleAuth0'
  },
{
    title: 'Pre-Code-Flix',
  img: '/movie-app.png',
    alt: 'A screenshot of the app',
    description: "This is a 'IMDB style' movie app. .The front end is built with React, React-Router and React-Bootstrap.The back-end is built with Node, Passport, and MongoDB, Login with username: 'testUser', password: 'password' "  },{
    title: 'Mancala',
      img: '/mancala.png',
    alt: 'a screenshot of the app',
    description: "This project is a two player strategy game made with React.  The game's logic takes advantage of the useContext hook. Aside from styling the board, writing the gameplay algorithm was the focus of this app, and an enjoyable challenge."
  }


]

const Projects = () => {
  return (
    <Box component='div' sx={{marginBottom:12}}>
    <Grid container spacing={2} rowSpacing={4} alignItems="stretch">
      <Grid item xs={12}>
      <Typography variant="h2" >My Projects</Typography>  
      </Grid>
      {projectArr.map((project) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={project.title}>
        <ProjectCard
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
