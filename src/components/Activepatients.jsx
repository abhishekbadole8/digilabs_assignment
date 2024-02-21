import styles from '@/styles/Activepatients.module.css';

function Activepatients() {
  return (
    <div className={styles.activePatients}>

      <div className={styles.schedule}>
        <p>08:00 am </p>

        <div className={styles.scheduleShow}>

          <div className={styles.scheduleDetailsContainer}>

            <img src="/icons/girl.svg" alt="" className={styles.schedulePatientImg} />

            <div className={styles.sheduleDetails}>
              <h4>Mark Jaxon</h4>
              <p><img src="/icons/clock.svg" alt="" /> 08:00-09:00Am</p>
            </div>

          </div>

          <img src="/icons/Line 7.svg" alt="" className={styles.backDashes} />

        </div>
      </div>
      
      <div className={styles.schedule}>
        <p>08:00 am </p>

        <div className={styles.scheduleShow}>

          <div className={styles.scheduleDetailsContainer}>

            <img src="/icons/girl.svg" alt="" className={styles.schedulePatientImg} />

            <div className={styles.sheduleDetails}>
              <h4>Mark Jaxon</h4>
              <p><img src="/icons/clock.svg" alt="" /> 08:00-09:00Am</p>
            </div>

          </div>

          <img src="/icons/Line 7.svg" alt="" className={styles.backDashes} />

        </div>
      </div>

      <div className={styles.schedule}>
        <p>08:00 am </p>

        <div className={styles.scheduleShow}>

          <div className={styles.scheduleDetailsContainer}>

            <img src="/icons/girl.svg" alt="" className={styles.schedulePatientImg} />

            <div className={styles.sheduleDetails}>
              <h4>Mark Jaxon</h4>
              <p><img src="/icons/clock.svg" alt="" /> 08:00-09:00Am</p>
            </div>

          </div>

          <img src="/icons/Line 7.svg" alt="" className={styles.backDashes} />

        </div>
      </div>

      <div className={styles.schedule}>
        <p>08:00 am </p>

        <div className={styles.scheduleShow}>

          <div className={styles.scheduleDetailsContainer}>

            <img src="/icons/girl.svg" alt="" className={styles.schedulePatientImg} />

            <div className={styles.sheduleDetails}>
              <h4>Mark Jaxon</h4>
              <p><img src="/icons/clock.svg" alt="" /> 08:00-09:00Am</p>
            </div>

          </div>

          <img src="/icons/Line 7.svg" alt="" className={styles.backDashes} />

        </div>
      </div>

    </div>
  )
}

export default Activepatients