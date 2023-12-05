import type { NextPage } from "next";
import { useCallback } from "react";
import Insurances from "../components/insurances";
import Bottom from "../components/bottom";
import SectionCard from "../components/section-card";
import RescheduleSection from "../components/reschedule-section";
import { useRouter } from "next/router";
import styles from "./appointment-data-and-data-veri.module.css";

const AppointmentDataAndDataVeri: NextPage = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    // Please sync "Add insurance details" to the project
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    // Please sync "Add insurance details" to the project
  }, []);

  const onVectorIcon4Click = useCallback(() => {
    // Please sync "Add insurance details" to the project
  }, []);

  const onBackIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.appointmentDataAndDataVeri}>
      <button className={styles.changeOrderOf}>
        Change order of insurances
      </button>
      <Insurances
        insurancesWidth="91.47%"
        insurancesPosition="absolute"
        insurancesTop="620px"
        insurancesRight="4.27%"
        insurancesLeft="4.27%"
        frameDivWidth="unset"
        frameDivFlex="1"
        onVectorIconClick={onVectorIconClick}
        onVectorIcon2Click={onVectorIcon2Click}
        onVectorIcon4Click={onVectorIcon4Click}
      />
      <Bottom />
      <div
        className={styles.financiallyResponsibleParty}
      >{`Financially responsible party* `}</div>
      <div className={styles.frameParent}>
        <div className={styles.profilePictureParent}>
          <img
            className={styles.profilePictureIcon}
            alt=""
            src="/profile-picture@2x.png"
          />
          <div className={styles.darleneRobertsonMotherParent}>
            <div
              className={styles.darleneRobertsonMother}
            >{`Darlene Robertson- Mother `}</div>
            <div className={styles.dogwoodAveUndefinedContainer}>
              <p
                className={styles.dogwoodAveUndefined}
              >{`6513 Dogwood Ave undefined `}</p>
              <p className={styles.dogwoodAveUndefined}>
                Syracuse, Alaska 62927 US
              </p>
            </div>
          </div>
        </div>
        <div className={styles.editIconParent}>
          <img className={styles.editIcon} alt="" src="/vector.svg" />
          <img className={styles.deleteIcon} alt="" src="/vector1.svg" />
        </div>
      </div>
      <div className={styles.confirmInformation}>
        <h3 className={styles.confirmInsuranceInformation}>
          Confirm insurance information
        </h3>
        <div
          className={styles.referToYour}
        >{`Refer to your insurance benefits for this information. `}</div>
      </div>
      <SectionCard />
      <RescheduleSection />
      <img
        className={styles.appointmentDataAndDataVeriChild}
        alt=""
        src="/frame-9732@2x.png"
      />
      <div className={styles.darleneRobertsonParent}>
        <div className={styles.darleneRobertson}>Darlene Robertson</div>
        <div className={styles.darleneRobertson}>Neurosurgeon</div>
      </div>
      <div className={styles.dogwoodAveUndefinedContainer1}>
        <p
          className={styles.dogwoodAveUndefined}
        >{`6513 Dogwood Ave undefined `}</p>
        <p className={styles.dogwoodAveUndefined}>
          Syracuse, Alaska 62927 United States
        </p>
      </div>
      <button className={styles.backIcon} onClick={onBackIconClick}>
        <img className={styles.backIconChild} alt="" src="/vector-34.svg" />
      </button>
      <h2 className={styles.appointmentData}>Appointment data</h2>
    </div>
  );
};

export default AppointmentDataAndDataVeri;
