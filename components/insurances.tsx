import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./insurances.module.css";

type InsurancesType = {
  /** Style props */
  insurancesWidth?: CSSProperties["width"];
  insurancesPosition?: CSSProperties["position"];
  insurancesTop?: CSSProperties["top"];
  insurancesRight?: CSSProperties["right"];
  insurancesLeft?: CSSProperties["left"];
  frameDivWidth?: CSSProperties["width"];
  frameDivFlex?: CSSProperties["flex"];

  /** Action props */
  onVectorIconClick?: () => void;
  onVectorIcon2Click?: () => void;
  onVectorIcon4Click?: () => void;
};

const Insurances: NextPage<InsurancesType> = ({
  insurancesWidth,
  insurancesPosition,
  insurancesTop,
  insurancesRight,
  insurancesLeft,
  frameDivWidth,
  frameDivFlex,
  onVectorIconClick,
  onVectorIcon2Click,
  onVectorIcon4Click,
}) => {
  const insurancesStyle: CSSProperties = useMemo(() => {
    return {
      width: insurancesWidth,
      position: insurancesPosition,
      top: insurancesTop,
      right: insurancesRight,
      left: insurancesLeft,
    };
  }, [
    insurancesWidth,
    insurancesPosition,
    insurancesTop,
    insurancesRight,
    insurancesLeft,
  ]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      flex: frameDivFlex,
    };
  }, [frameDivWidth, frameDivFlex]);

  return (
    <div className={styles.insurances} style={insurancesStyle}>
      <div className={styles.frameParent}>
        <div className={styles.insuranceCompanyParent}>
          <div className={styles.insuranceCompany}>Insurance company</div>
          <div className={styles.insuranceInfoParent}>
            <div className={styles.insuranceCompany}>Insurance info</div>
            <div className={styles.insuranceCompany}>Confirm</div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.primaryParent}>
              <div className={styles.insuranceCompany}>Primary</div>
              <div className={styles.abcInsuranceCompany}>
                Abc Insurance company
              </div>
              <div className={styles.abcInsuranceCompany}>
                Member ID - ***123 Group ID - **12
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector.svg"
                onClick={onVectorIconClick}
              />
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              <input className={styles.frameChild} type="checkbox" />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameDiv}>
            <div className={styles.primaryParent}>
              <div className={styles.insuranceCompany}>Secondary</div>
              <div className={styles.abcInsuranceCompany}>
                Abc Insurance company
              </div>
              <div className={styles.abcInsuranceCompany}>
                Member ID - ***123 Group ID - **12
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector.svg"
                onClick={onVectorIcon2Click}
              />
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              <input className={styles.frameChild} type="checkbox" />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent1} style={frameDivStyle}>
            <div className={styles.primaryParent}>
              <div className={styles.insuranceCompany}>Third</div>
              <div className={styles.abcInsuranceCompany}>
                Abc Insurance company
              </div>
              <div className={styles.abcInsuranceCompany}>
                Member ID - ***123 Group ID - **12
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/vector.svg"
                onClick={onVectorIcon4Click}
              />
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              <input className={styles.frameChild} type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurances;
