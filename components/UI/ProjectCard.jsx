import { Card, Link, CardContent, CardMedia, CardActionArea, CardActions, Button, Typography } from '@mui/material'


const ProjectCard = (props) => {
 return (
    <Card sx={{  height:"100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }} variant="outlined" >
      <CardActionArea>
        <Link underline='none' href={props.liveUrl ? props.liveUrl : props.gitUrl} target="_blank">
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
      </Link>
</CardActionArea>
      <CardActions sx={{justifySelf: 'flex-end'}} >
        {props.caseStudy &&
        <Button size="small" color="secondary" variant="outlined"><Link underline='none' href={`/case-studies/${props.caseStudy}`} size="small" color="secondary" variant="outlined">Read More</Link></Button> }
        {props.liveUrl && 
        <Button size="small" color="secondary" variant="outlined"><Link underline='none' href={props.liveUrl} target="_blank" size="small" color="secondary" variant="outlined">See Live</Link></Button> }
      
        {props.gitUrl &&
        <Button size='small' color='secondary' variant='outlined'>
        <Link underline='none' href={props.gitUrl} target="_blank" size="small" color="secondary" variant="outlined">See Code</Link>
        </Button>}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
