import Header from "../Header";
import Typewriter from "../Typewriter";
import styles from "./index.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Header />
            <hr />
            {/*  <div className={styles.banner__title}>
                <h2 className={styles.typewriter}>FRONTEND</h2>
                <h1 className={styles.typewriter}>PORTFOLIO.</h1>

                <p>2025 - Marlon Almanza </p>
            </div>*/}
            <Typewriter/>

            <div className={styles.carouselWrapper}>
                <div className={styles.carousel}>
                    <h2>MARLONALMANZA</h2>
                </div>
            </div>


            <img src="/assets/foto__con__color2.png" alt="" className={styles.me__img} />
            <img src="/assets/bolsa.svg" alt="" className={styles.dust} />
            <img src="/assets/tela.png" alt="" className={styles.dust} />
        </div>
    )
}