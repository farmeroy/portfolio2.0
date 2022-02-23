import { Paper, Box, TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <Box component="form" sx={{display:'flex', flexDirection:'column', width:500}}>
      <Paper>
      <TextField
        required
        fullWidth
        id="filled-required"
        type="email"
        label="email address"
        defaultValue="email@email.com"
        variant="filled"
      />
      <TextField
        required
        fullWidth
        id="your-message-required"
        label="your message"
        type="text"
        defaultValue="Send me a message..."
        variant="filled"
      />
</Paper>
    </Box>
  );
};

export default ContactForm;
