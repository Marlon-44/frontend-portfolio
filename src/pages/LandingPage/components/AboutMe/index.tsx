import { usePortfolio } from "../../../../hooks/usePortfolio"
import Header from "../Header"
import styles from "./index.module.css"

export default function AboutMe() {
    const { description } = usePortfolio()
    return (
        <div className={styles.container}>
            
            <div className={` ${styles.title__container__overlay}`}>
                <div className={styles.title__container}>
                    <h2>WHO</h2>
                    <h2>AM I?</h2>
                </div>
                <img src="/assets/me4.png" alt="" className={styles.me} />
                <div className={`${styles.title__container} ${styles.title__container__up}`}>
                    <h2>WHO</h2>
                    <h2>AM I?</h2>
                </div>
                <img src="/assets/dots.svg" alt="" className={styles.dots}/>
            </div>

            <div className={styles.info__container}>
                <p>{description}</p>
            </div>

        </div>
    )
}