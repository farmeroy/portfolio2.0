import { Card, Paper, CardContent, CardMedia, CardActionArea, CardActions, Button, Typography } from '@mui/material'


const ProjectCard = (props) => {
 return (
    <Card sx={{  height:"100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }} variant="outlined" >
      <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={props.img}
        alt={props.alt}
      />
      <CardContent sx={{}}>
        <Typography gutterBottom variant="h5" color="text.secondary" component="div" >
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.primary" >
          {props.description}
        </Typography>
      </CardContent>
</CardActionArea>
      <CardActions sx={{justifySelf: 'flex-end'}} >
        <Button size="small" color="secondary" variant="outlined">Read More</Button>
        <Button size="small" color="secondary" variant="outlined">See Live</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
