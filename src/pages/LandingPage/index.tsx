import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import styles from "./index.module.css";

export default function LandingPage() {
    return (
        <div className={styles.page}>
            
            <section className={styles.section}>
                <Banner />
            </section>

            <section className={styles.section}>
                <AboutMe/>
            </section>

            <section className={styles.section}>
                <h1>Proyectos</h1>
            </section>

        </div>
    );
}
