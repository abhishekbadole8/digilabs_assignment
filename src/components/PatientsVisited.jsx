import styles from '@/styles/PatientsVisited.module.css'

function PatientsVisited() {
  return (
    <div className={styles.patientsVisited}>

      <div className={styles.patientsVisitedHeading}>
        <h4>42</h4>

        <h6>Patients Visited</h6>
        <p>This Month</p>
      </div>

      <div className={styles.peilsContainer}>
        <div className={styles.peilsBack} />
        <div className={styles.peilsFilled} />
        <div className={styles.peilsFrontContent}>
          <img src="/icons/growth.svg" alt="" />
          <p>70%</p>
        </div>
      </div>

    </div>
  )
}

export default PatientsVisited