import React from "react"
import styles from "./spinner.module.scss"

const Spinner = () => {
  return (
    <div className={styles.loopingRhombusesSpinner}>
      <div className={styles.rhombus}></div>
      <div className={styles.rhombus}></div>
      <div className={styles.rhombus}></div>
    </div>
  )
}

export default Spinner
