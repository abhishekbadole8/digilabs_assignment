import styles from "@/styles/UpcomingEvents.module.css"

function UpcomingEvents() {
    return (
        <div className={styles.upcomingEvents}>
            <div className={styles.upcomingEventsHeader}>
                <span className={styles.rightArrowIcon}>
                    <img src='/icons/rightArrow.svg' />
                </span>
                <h6>Upcoming Events</h6>
            </div>

            <div className={styles.upcomingEventsBody}>
                <div className={styles.eventPoster}>
                    <img src="/icons/girl.svg" alt="" />
                </div>

                <div className={styles.eventContent}>
                    <h4>Aliza Shah</h4>
                    <h6><img src="/icons/clock.svg" alt="" /> 08:00-09:00 Am</h6>

                    <span className={styles.visitedTag}>Visited 7 days ago</span>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents