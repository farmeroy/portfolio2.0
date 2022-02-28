import * as React from 'react';
import { Button, Typography, Box } from '@mui/material'
import styles from "../../styles/Home.module.css"

const Hero = () => {
    return (
      <Box component="div" sx={{minHeight: "70vh"}}>
            <Typography
              variant="h2"
              component="div"
              color="secondary"
              sx={{marginTop:"30vh"}}
              gutterBottom
            >
              Raffaele Cataldo
            </Typography>
            <Typography variant="h3" component="div" gutterBottom>
              Web Developer
            </Typography>
            <h2 className={styles.code}>I build elegant solutions for front end (and back end) technologies</h2>
            <div>
            <Button variant="contained" color="secondary" disableElevation sx={{padding:2}}>
              Check Out my Portfolio
            </Button>
            {'   '}
            <Button variant="outlined" color="secondary" sx={{padding:2}}>
              Check out my github
            </Button>
            </div>
          </Box>
    )}

export default Hero;
