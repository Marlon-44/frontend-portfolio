import { usePortfolio } from "../../../../hooks/usePortfolio"
import styles from "./index.module.css"

export default function AboutMe(){
    const {description} = usePortfolio()
    return(
        <div className={styles.container}>
            <div className={styles.title__container}>
                <h2>WHO</h2>
                <h2>AM I?</h2>
            </div>
            <div className={styles.info__container}>
                <p>{description}</p>
                <div className={styles.line}></div>
                <p>(1)</p>
            </div>

        </div>
    )
}