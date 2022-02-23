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
    img: meetApp,
    alt: 'A screenshot of the app',
    description: "This is a 'IMDB style' movie app. Users create an account, log in, and interact with a database of early Hollywood cinema.The front end is built with React, React-Router and React-Bootstrap.The back-end is built with Node, Passport, and MongoDB, Login with username: 'testUser', password: 'password' "  },{
    title: 'Meet App',
    img: meetApp,
    alt: 'An image of meet app',
    description: 'A progressive web app built with React.Users can access events via Google Calender API to search for web developer workshops across the globe, and also view data related to their search.Users sign in with GoogleAuth0'
  }


]

const Projects = () => {
  return (
    <Box sx={{padding:8}}>
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
