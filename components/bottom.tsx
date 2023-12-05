import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./bottom.module.css";

const Bottom: NextPage = () => {
  const onAddMoreInsurancesClick = useCallback(() => {
    // Please sync "Add insurance details" to the project
  }, []);

  const onDoneButtonClick = useCallback(() => {
    // Please sync "Ap agreeing T&C" to the project
  }, []);

  return (
    <div className={styles.addMoreAndDoneButton}>
      <button
        className={styles.addMoreInsurances}
        onClick={onAddMoreInsurancesClick}
      >
        Add more insurances
      </button>
      <button className={styles.doneButton} onClick={onDoneButtonClick}>
        Done
      </button>
    </div>
  );
};

export default Bottom;
