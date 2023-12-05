import type { NextPage } from "next";
import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent from "../components/frame-component";
import { useRouter } from "next/router";
import SinngupTop from "../components/sinngup-top";
import styles from "./index.module.css";

const SignUp1: NextPage = () => {
  const router = useRouter();

  const onGetYourInformationButtonClick = useCallback(() => {
    router.push("/appointment-data-and-data-veri");
  }, [router]);

  return (
    <form className={styles.signUp1}>
      <img className={styles.signUp1Child} alt="" src="/rectangle-424@2x.png" />
      <FrameComponent />
      <input
        className={styles.weHaveSigned}
        placeholder="We have signed up with Pannu Corp to provide better quality care more efficiently at lower cost. You will only need their app to interact with all your healthcare providers and the related issues. "
        type="text"
      />
      <div className={styles.theyAreHelping}>
        They are helping us with our appointments function to implement advanced
        features that will improve patient’s experience and our performance. You
        will be able to make, reschedule and cancel appointments conveniently
        through the app.
      </div>
      <div className={styles.youWillAlso}>
        You will also be able to communicate with us on any issues conveniently
        and faster using the Zulip app. More advanced features will be coming
        soon.
      </div>
      <div className={styles.enterTheData}>
        Enter the data to get your appointment information
      </div>
      <TextField
        className={styles.variantInputField}
        type="date"
        InputLabelProps={{ shrink: true }}
        color="primary"
        label="MM-DD-YYYY"
        placeholder="Date of birth*"
        variant="outlined"
      />
      <TextField
        className={styles.variantInputField1}
        color="primary"
        label="XXXX"
        sx={{ width: 110 }}
        variant="outlined"
      />
      <TextField
        className={styles.variantInputField2}
        color="primary"
        label="Malhotra"
        sx={{ width: 339 }}
        variant="outlined"
      />
      <Button
        className={styles.getYourInformationButton}
        color="primary"
        variant="text"
        onClick={onGetYourInformationButtonClick}
      >
        Get your information
      </Button>
      <b className={styles.welcome}>Welcome</b>
      <SinngupTop />
      <h1 className={styles.pannuCorp}>Pannu Corp</h1>
      <img className={styles.circlesOnTop} alt="" src="/circles-on-top.svg" />
    </form>
  );
};

export default SignUp1;
