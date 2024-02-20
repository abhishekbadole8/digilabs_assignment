import styles from '@/styles/Consulatation.module.css';

function Consulatation() {
  return (
    <div className={styles.consultationContainer}>

      <div className={styles.context}>

        <div className={styles.consultationHeader}>
          <h4>Consultation</h4>
          <h5>82/100</h5>
        </div>

        <div className={styles.growthTag}>
          <span>82%</span>
          <img src='/icons/growth.svg' />
        </div>
      </div>

      <div className={styles.progressCircle}>
        <img src="/icons/progressCircle.svg" alt="" />
      </div>

      {/* <div className={styles.optionIcon}>

      </div> */}

    </div>
  )
}

export default Consulatation;