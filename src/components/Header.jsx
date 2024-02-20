import React from 'react'
import styles from "@/styles/Header.module.css"

function Header() {
  return (
    <div className={styles.header}>

      <div className={styles.companyLogo}>
        <img src="/icons/Frame.svg" alt="Company Logo" className={styles.logo} />
      </div>

      <div className={styles.listContainer}>
        <ul>
          <li className={styles.listItem}><img src="/icons/Icon (5).svg" alt="" /></li>
          <li className={styles.listItem}><img src="/icons/Icon (4).svg" alt="" /></li>
          <li className={styles.listItem}><img src="/icons/Icon (3).svg" alt="" /></li>
          <li className={styles.listItem}><img src="/icons/Icon (2).svg" alt="" /></li>
          <li className={styles.listItem}><img src="/icons/Icon (1).svg" alt="" /></li>
        </ul>
      </div>

      <div className={styles.userActionContainer}>

        <div className={styles.userProfileContainer}>
          <img src="/icons/Mask group.svg" alt="" />
        </div>

        <div className={styles.logoutBtn}>
          <img src="/icons/Icon (5).svg" alt="" />
        </div>
        
      </div>

    </div>
  )
}

export default Header