import Ram from "./Ram";
import styles from './Simulator.module.css';

const registers = [
    { name: 'SC', value: 1 },
    { name: 'PC', value: 100 },
    { name: 'AR', value: 103 },
    { name: 'IR', value: 0 },
    { name: 'DR', value: 0 },
    { name: 'AC', value: 0 },
    { name: 'TR', value: 0 },
    { name: 'INPR', value: 0 },
    { name: 'OUTR', value: 0 },
]

const flags = [
    { name: 'I', value: 1 },
    { name: 'S', value: 0 },
    { name: 'E', value: 0 },
    { name: 'R', value: 0 },
    { name: 'IEN', value: 0 },
    { name: 'FGI', value: 0 },
    { name: 'FGO', value: 0 },
]

const Simulator = () => {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <p className={`${styles.description} ${styles.micro}`}>
                        MicroOperation:
                        <label className={styles.value}>AR &lt;- PC</label>
                    </p>
                    <div className={styles.registers}>
                        {registers.map(reg => (
                            <p className={styles.description}>
                                {reg.name}:
                                <label className={styles.value}>{reg.value}</label>
                            </p>
                        ))}
                    </div>
                    <div className={styles.flags}>
                        {flags.map(reg => (
                            <p className={styles.description}>
                                {reg.name}:
                                <label className={styles.value}>{reg.value}</label>
                            </p>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <button>RUN</button>
                        <button>STEP</button>
                        <button>RESET</button>
                    </div>
                </div>
            </div>
            <Ram />
        </>
    );
}

export default Simulator;