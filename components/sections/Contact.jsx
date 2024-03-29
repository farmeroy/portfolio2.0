import { Paper, Grid, Box, TextField, Typography, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Box id="Contact" sx={{ minHeight: "90vh" }}>
      <Grid container rowSpacing={4} columnSpacing={4}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography variant="h2">Contact Me</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="p">
            If you&apos;re looking for a developer who brings creativity,
            dedication, and a fresh perspective to your company&apos;s mission,
            let&apos;s talk!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Paper>
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <TextField
                  required
                  fullWidth
                  id="filled-required"
                  type="email"
                  name="email"
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
                  name="message"
                  type="text"
                  variant="filled"
                />
                <Button type="submit" color="secondary" variant="text">
                  Submit
                </Button>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
