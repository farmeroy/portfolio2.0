import { Paper, Grid, Box, TextField, Typography, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Grid container rowSpacing={4} columnSpacing={4}>
      <Grid item xs={1} />
      <Grid item xs={10}>
      <Typography variant="h2" >Contact Me</Typography>
    
    </Grid>
    <Grid item md={6}>
      <Typography variant="p" >I'm currently looking to find a fulltime position. My goal is to find a job in Berlin or a remote position in the US (I'm willing to relocate)</Typography>
    </Grid> 
    <Grid item md={6} >
    <Box component="form" sx={{display:'flex', flexDirection:'column', width:500}}>
      <Paper>
    <form name='contact' method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <TextField
        required
        fullWidth
        id="filled-required"
        type="email"
        label="email address"
        variant="filled"
      />
      <TextField
        required
        multiline
        rows={8}
        fullWidth
        id="your-message-required"
        label="your message"
        type="text"
        variant="filled"
      />
      <Button type='submit' color="secondary" variant="text">Submit</Button>
      
    </form>
</Paper>
    </Box>

</Grid>
</Grid>
  );
};

export default ContactForm;
