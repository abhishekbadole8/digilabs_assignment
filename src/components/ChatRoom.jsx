import styles from '@/styles/ChatRoom.module.css';

function ChatRoom() {
  return (
    <div className={styles.chatRoomContainer}>

      {/* header */}
      <div className={styles.chatHeader}>

        <div className={styles.profileContainer}>

          <img src="/icons/chatGirl1.svg" alt="" className={styles.userDp} />

          <div className={styles.userDetail}>
            <h6 className={styles.userName}>Alexa max</h6>
            <p className={styles.activeStatus}>Active % Min Ago</p>
          </div>

          <img src="/icons/call.svg" alt="" className={styles.phoneIcon} />

        </div>

      </div>

      {/* body */}
      <div className={styles.chatBody}>

        <ul className={styles.msgList}>
          <li>
            <div className={styles.patientMsgs}>

              <div className={styles.profile}>
                <img src="/icons/chatGirl1.svg" alt="" className={styles.userDp} />
              </div>

              <div className={styles.msgs}>
                <ul>
                  <li>Hi Doctor</li>
                  <li>I got knee jerk. What
                    should i do right now?</li>

                  <p className={styles.msgTime}>tue 02:32pm</p>
                </ul>
              </div>

            </div>
          </li>

          <li>
            <div className={styles.doctorMsgs}>

              <div className={styles.msgs}>
                <ul>
                  <li>Hi Doctor</li>
                  <li>I got knee jerk. What
                    should i do right now?</li>
                  <p className={styles.msgTime}>tue 02:32pm</p>
                </ul>

                <div className={styles.profile}>
                  <img src="/icons/chatGirl1.svg" alt="" className={styles.userDp} />
                </div>
              </div>

            </div>
          </li>
        </ul>

      </div>

      {/* footer */}
      <div className={styles.chatFooter}>
        <input type="text" placeholder='Type your text....' />
        <div className={styles.actionButton}>
          <img src="/icons/send.svg" alt="" />

        </div>
        <div className={styles.micButton}>
          <img src="/icons/mic.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ChatRoom