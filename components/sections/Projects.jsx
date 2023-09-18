import { Link, Button, Grid, Typography, Box } from "@mui/material";
import ProjectCard from "../../components/UI/ProjectCard";
import { projects } from "../../lib/projects";

console.log({ projects });

const Projects = () => {
  return (
    <Box id="Portfolio" component="div" sx={{ marginBottom: 12 }}>
      <Grid container spacing={2} rowSpacing={4} alignItems="stretch">
        <Grid item xs={12}>
          <Typography variant="h2">My Projects</Typography>
        </Grid>
        {projects.map((project) => (
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
