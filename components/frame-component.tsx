import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.darleneRobertsonParent}>
        <div className={styles.darleneRobertson}>Darlene Robertson</div>
        <div className={styles.darleneRobertson}>Neurosurgeon</div>
      </div>
      <i className={styles.facilityName}>Facility name</i>
      <div className={styles.dogwoodAveUndefined}>
        6513 Dogwood Ave undefined Syracuse, AK 62927 US
      </div>
    </div>
  );
};

export default FrameComponent;
