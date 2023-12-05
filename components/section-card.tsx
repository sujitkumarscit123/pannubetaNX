import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import IdentificationComponent from "./identification-component";
import styles from "./section-card.module.css";

const SectionCard: NextPage = () => {
  return (
    <section className={styles.rectangleParent}>
      <IdentificationComponent />
      <h3 className={styles.confirmIdentificationInforma}>
        Confirm identification information
      </h3>
      <div className={styles.variantInputFieldParent}>
        <TextField
          className={styles.variantInputField}
          color="primary"
          label="Manish Malhotra"
          variant="outlined"
        />
        <TextField
          className={styles.variantInputField}
          color="primary"
          label="Bey Minette AL 3087, USA"
          variant="outlined"
        />
      </div>
    </section>
  );
};

export default SectionCard;
