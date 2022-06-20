import React, { useState } from 'react'
import styles from './index.module.css'

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    isModalVisible ? (
      <div className={styles.Overlay} onClick={(() => setIsModalVisible(false))}>
        <div className={styles.Modal} onClick={(e) => e.stopPropagation()}>
          <h3>Hello! Welcome to my old portfolio!</h3>
          <p>I created a new portfolio in June 2022!</p>
          <p>It reflects my learning experience at my first startup.</p>
          <p>Visit it <a href='https://johnny-nguyen.herokuapp.com' rel="noreferrer" target='_blank'>here</a>! johnny-nguyen.herokuapp.com</p>
          <p>Click outside the modal to explore this portfolio</p>
          <p>Last updated: Jan 2022</p>
        </div>
      </div>
    ) : (
      <div className={styles.ButtonModalContainer}>
        <button className={styles.Button} onClick={(() => setIsModalVisible(true))}>Show welcome modal</button>
      </div>
    )
  )
}

export default Modal