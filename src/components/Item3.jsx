import React from 'react'
import styles from "@/styles/Item3.module.css"
import ChatRoom from './ChatRoom'

function Item3() {
    return (
        <div className={styles.item3}>
            <div className={styles.userProfileContainer}>
                <img src="/icons/Mask group.svg" alt="" />
            </div>

            <h5 className={styles.docName}>Aliam Colter</h5>

            <p className={styles.docFieldName}>Physician</p>

            <div className={styles.activePatientsContainer}>
                <p>Active Patients</p>
            </div>

            <div className={styles.chatContainer}>
                <ChatRoom />
            </div>
        </div>
    )
}

export default Item3