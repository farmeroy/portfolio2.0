import { Card, Paper, CardContent, CardMedia, CardActionArea, CardActions, Button, Typography } from '@mui/material'


const ProjectCard = (props) => {
 return (
    <Card sx={{ maxWidth: 345 }} variant="outlined" raised>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt={props.alt}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" color="text.secondary" component="div" sx={{fontFamily:'Noto Sans Mono '}}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{fontFamily:'Noto Sans Mono'}}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
        <Button size="small">See Live</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
