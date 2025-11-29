import styles from "./index.module.css";

export default function Header() {
    return (
        <div className={styles.header}>

            <a href="youtube.com" className={styles.gohome__btn}>44</a>
            <div className={styles.header__nav}>
                <button className={styles.hireme__btn} >
                    Hire me
                </button>

            </div>


        </div>
    )
}