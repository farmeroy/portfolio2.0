import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import profile from "../public/raffe_profile.jpg";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raffaele Cataldo - Developer</title>
        <meta name="description" content="built by Raffaele Cataldo" />
        <link rel="icon" href="/R.svg" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Navbar />
      {/* <HideNav /> */}

      <main className={styles.main}>
        <div className={styles.hero}>
 <Paper elevation={0} sx={{padding:20}}>
 <Typography variant="h2" component="div" gutterBottom sx={{fontFamily: 'Noto Sans Mono'}}>
          Raffaele Cataldo
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
          Web Developer
        </Typography>
        <Button variant="contained" color="secondary" disableElevation>
          Check Out my Portfolio
        </Button>
        <Button variant="outlined" color="secondary">Check out my github</Button>


        </Paper>


        </div>

                      <Image alt="a portrait of me" src={profile} />
        <Image alt="a portrait of me" src={profile} />
        <Image alt="a portrait of me" src={profile} />
        <Image alt="a portrait of me" src={profile} />
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image
            src="/R.svg"
            alt="Raffaele Cataldo Logo"
            width={140}
            height={32}
          />
        </span>
      </footer>
    </div>
  );
}
