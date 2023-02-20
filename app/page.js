import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import GoHomeIconBtn from "../components/UI/GoHomeIconBtn";
import HomePage from "./HomePage";

export default function Home(props) {
  return (
    <div id="back-to-top-anchor">
      <Navbar home={true} />
      <HomePage />
      <footer className={styles.footer}>
        <span className={styles.logo}>
          <GoHomeIconBtn />
        </span>
        <div>
          <p className={styles.imprint}>
            © 2023 Raffaele Cataldo
            <br />
            raffaelecataldo.dev@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}

export const metadata = {
  title: "Raffaele Cataldo - Web Developer",
  description: "Fullstack Web Developer",
  icons: "/R.svg",
};
