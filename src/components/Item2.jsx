import styles from "@/styles/Item2.module.css"
import TeamMeeting from './TeamMeeting'
import Consulatation from './Consulatation'
import Activepatients from './Activepatients'

function Item2() {
  return (
    <div className={styles.item2}>

      <div className={styles.activePatientsSchedule}>
        
        <h3 className={styles.activePatientsScheduleHeading}>Active Patients</h3>

        <Activepatients />
      </div>

      <div className={styles.upcomingEvents}>
        <h3 className={styles.activePatientsScheduleHeading}>Upcoming Events</h3>

        <TeamMeeting />

        <Consulatation />
      </div>
    </div>
  )
}

export default Item2