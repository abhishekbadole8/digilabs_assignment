import React from 'react'
import styles from "@/styles/Item1.module.css";
import { Manrope } from 'next/font/google'
import PatientsVisited from './PatientsVisited';
import UpcomingEvents from './UpcomingEvents';
import Statistics from './Statistics';

const manrope = Manrope({
    weight: '500',
    subsets: ['latin'],
})

function Item1() {
    return (
        <div className={styles.item1Container}>

            <div className={styles.headerContainer}>

                <div className={styles.greeting}>
                    <h6 >Hello,</h6>
                    <h5>Dr. Colter! 👋</h5>
                </div>

                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Search" />
                </div>

                <div className={styles.notificationIcon}>
                    <img src="/icons/bell.svg" alt="" />
                </div>
            </div>

            <div className={styles.item1Body}>

                <div className={styles.EventVisitedContainer}>

                    <PatientsVisited />

                    <UpcomingEvents />
                </div>

                <Statistics />
            </div>
        </div>
    )
}

export default Item1