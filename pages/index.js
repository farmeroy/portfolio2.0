import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HideNav from '../components/HideNav.jsx'
import Navbar from '../components/Navbar'
import profile from '../public/raffe_profile.jpg'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raffaele Cataldo - Developer</title>
        <meta name="description" content="built by Raffaele Cataldo" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Navbar />
      {/* <HideNav /> */}

      <main className={styles.main}>
        <h1>Raffaele Cataldo</h1>
        <h2>Web Developer</h2>
        <Image alt="a portrait of me" src={profile}/>
        <Image alt="a portrait of me" src={profile}/>
        <Image alt="a portrait of me" src={profile}/>
        <Image alt="a portrait of me" src={profile}/>
      </main>

      <footer className={styles.footer}>
                  <span className={styles.logo}>
            <Image src="/logo1.svg" alt="Raffaele Cataldo Logo" width={140} height={32} />
          </span>
      </footer>
    </div>
  )
}
