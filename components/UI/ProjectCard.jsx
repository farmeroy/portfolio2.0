import { Card, Paper, CardContent, CardMedia, CardActionArea, CardActions, Button, Typography } from '@mui/material'


const ProjectCard = (props) => {
 return (
    <Card sx={{ maxWidth: 345, height:"100%" }} variant="outlined" >
      <CardMedia
        component="img"
        height="200"
        image={props.img}
        alt={props.alt}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" color="text.secondary" component="div" >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.primary" >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" color="secondary" variant="outlined">Read More</Button>
        <Button size="small" color="secondary" variant="outlined">See Live</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
