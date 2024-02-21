import styles from '@/styles/Statistics.module.css';

function Statistics() {
    return (
        <div className={styles.statisticsContainer}>

            <div className={styles.statisticsHeader}>

                <div className={styles.heading}>
                    <h4>Statistics</h4>
                    <p>November 2023</p>
                </div>

                <div className={styles.dropdown}>
                    <select name="" id="">
                        <option value="Weekly">Weekly</option>
                    </select>
                </div>
            </div>

            <div className={styles.statistic}>
                <img src="/icons/Vector.svg" alt="" />
            </div>
        </div>
    )
}

export default Statistics