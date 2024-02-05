import React, { useEffect, useState } from "react";

import { auth, sendCodeToPhone, signInWithPhoneCode } from "../firebase"; // Adjust the import path accordingly
import { Button, TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { color } from "@mui/system";
const PhoneAuth = (props) => {
  const { data, sendDataToParent } = props;
  useEffect(() => {
    console.log("--", data);
  }, [data]);

  console.log("data", props, data);
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState(data);
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [verificationData, setVerificationData] = useState(null);
  const [otpError, setOtpError] = useState(false);

  console.log(phoneNumber);

  const handlePhoneChange = (e, formattedValue) => {
    // Do something with the phone number
    console.log(formattedValue);

    setPhoneNumber(e.target.value);
  };

  const handleSendCode = async () => {
    const mobNumber = "+91" + phoneNumber;
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(
        auth,
        mobNumber,
        recaptcha
      );
      console.log(confirmation);
      setConfirmationResult(confirmation);
      // await updateProfile(auth.currentUser, {
      //   user: "dddd", // Set the user's name
      // });
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  const goToSignUp = () => {
    sendDataToParent({ from: "sign_in", phoneNumber: phoneNumber });
    setPhoneNumber(phoneNumber);
  };

  const handleVerifyCode = async () => {
    try {
      const data = await confirmationResult.confirm(verificationCode);
      console.log("data", data);
      setVerificationData(data);
      if (data._tokenResponse["isNewUser"] == false) {
        navigate("/home");
      } else if (data._tokenResponse["isNewUser"]) {
        goToSignUp();
      }
    } catch (error) {
      console.error("Error sending code:", error);
      setOtpError(true);
    }
  };

  const verifictionInputHandler = (e) => {
    setVerificationCode(e.target.value);
    setOtpError(false);
  };
  return (
    <>
      {/* <PhoneInput
        country={"in"}
        value={phoneNumber}
        onChange={handlePhoneChange}
      /> */}
      <div className="input-field">
        <i className="fas fa-phone"></i>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter 10 digit Mobile Number"
          value={phoneNumber}
          onChange={(e) => handlePhoneChange(e)}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </div>
      <Button variant="text" onClick={handleSendCode}>
        Confirm
      </Button>
      <div id="recaptcha"></div>
      <TextField
        className="input-field"
        label="Verification Code"
        variant="standard"
        value={verificationCode}
        onChange={(e) => verifictionInputHandler(e)}
      />{" "}
      {otpError ? <span style={{ color: "red" }}> invalid otp </span> : null}
      <Button variant="text" onClick={handleVerifyCode}>
        Verify Code
      </Button>
    </>
  );
};

export default PhoneAuth;
