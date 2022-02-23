import { Grid, Box } from '@mui/material'
import ProjectCard from '../../components/UI/ProjectCard';
import meetApp from '../../public/meet-app.png'


const projectArr = [
  {
    title: 'Meet App',
    img: meetApp,
    alt: 'An image of meet app',
    description: 'A progressive web app built with React.Users can access events via Google Calender API to search for web developer workshops across the globe, and also view data related to their search.Users sign in with GoogleAuth0'
  },
{
    title: 'Meet App',
    img: meetApp,
    alt: 'An image of meet app',
    description: 'A progressive web app built with React.Users can access events via Google Calender API to search for web developer workshops across the globe, and also view data related to their search.Users sign in with GoogleAuth0'
  },{
    title: 'Meet App',
    img: meetApp,
    alt: 'An image of meet app',
    description: 'A progressive web app built with React.Users can access events via Google Calender API to search for web developer workshops across the globe, and also view data related to their search.Users sign in with GoogleAuth0'
  }


]

const Projects = () => {
  return (
    <Box sx={{padding:8}}>
    <Grid container spacing={2}>
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
