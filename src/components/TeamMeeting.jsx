import styles from '@/styles/TeamMeeting.module.css';

function TeamMeeting() {
  return (
    <div className={styles.teamContainer}>

      <div className={styles.teamHeader}>
        <div>
          <h5>Team Meeting</h5>
          <h6><img src='/icons/clock.svg' /> 05:00-06:00</h6>
        </div>

        <div className={styles.notificationIcon}>
          <img src="/icons/bell.svg" alt="" />
        </div>
      </div>

      <div className={styles.teamFooter}>
        <div className={styles.usersActive}>

        </div>
        <div className={styles.rightArrow}>
          <img src="/icons/rightArrow.svg" alt="" />
        </div>
      </div>


    </div>
  )
}

export default TeamMeeting