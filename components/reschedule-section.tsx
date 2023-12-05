import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./reschedule-section.module.css";

const RescheduleSection: NextPage = () => {
  const onRescheduleButtonClick = useCallback(() => {
    // Please sync "Select appt and reschedule appt 11" to the project
  }, []);

  const onCancelButtonClick = useCallback(() => {
    // Please sync "Cancel appointment" to the project
  }, []);

  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.preferredAppointmentParent}>
          <h3 className={styles.preferredAppointment}>Preferred appointment</h3>
          <div className={styles.friday1323}>Friday 1/3/23</div>
        </div>
        <button
          className={styles.rescheduleButton}
          onClick={onRescheduleButtonClick}
        >
          Reschedule
        </button>
      </div>
      <div className={styles.startTime1230PmParent}>
        <div className={styles.startTime1230}>Start time 12:30 PM</div>
        <button className={styles.cancelButton} onClick={onCancelButtonClick}>
          <div className={styles.cancelAppointmentButton}>Cancel</div>
          <div className={styles.cancelAppointmentButton}>appointment</div>
        </button>
      </div>
    </section>
  );
};

export default RescheduleSection;
