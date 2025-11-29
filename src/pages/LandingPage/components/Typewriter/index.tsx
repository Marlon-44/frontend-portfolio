import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Typewriter() {
    const words = ["FRONTEND", "PORTFOLIO."];
    const [lines, setLines] = useState(["", ""]);
    const [stage, setStage] = useState("typing1");
    const speed = 120;

    useEffect(() => {
        const handleTyping = () => {
            if (stage === "typing1") {
                const full = words[0];
                const next = full.slice(0, lines[0].length + 1);
                setLines([next, ""]);

                if (next === full) setStage("typing2");
            }

            if (stage === "typing2") {
                const full = words[1];
                const next = full.slice(0, lines[1].length + 1);
                setLines([words[0], next]);

                if (next === full) setStage("done");
            }
        };

        if (stage !== "done") {
            const timer = setTimeout(handleTyping, speed);
            return () => clearTimeout(timer);
        }
    }, [lines, stage]);

    return (
        <div className={styles.titles__container}>
            <div className={styles.line}>
                {lines[0]}
                {/* cursor SOLO mientras escribe la primera palabra */}
                {stage === "typing1" && <span className={styles.cursor}></span>}
            </div>

            <div className={styles.line}>
                {lines[1]}
                {/* cursor SOLO en PORTFOLIO durante escritura y al final */}
                {(stage === "typing2" || stage === "done") && (
                    <span className={styles.cursor}></span>
                )}
            </div>
            <p>2025 - Marlon Almanza</p>
        </div>
    );
}
