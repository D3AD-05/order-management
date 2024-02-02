import React, { useState } from "react";

import { auth, sendCodeToPhone, signInWithPhoneCode } from "../firebase"; // Adjust the import path accordingly
import { Button, TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
} from "firebase/auth";
const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  console.log(phoneNumber);

  const handlePhoneChange = (value, country, event, formattedValue) => {
    // Do something with the phone number
    console.log(formattedValue);
    setPhoneNumber(event.target.value);
  };

  const handleSendCode = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptcha
      );
      console.log(confirmation);
      setConfirmationResult(confirmation);
      await updateProfile(auth.currentUser, {
        user: "John Doe", // Set the user's name
      });
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const data = await confirmationResult.confirm(verificationCode);
      console.log("data", data);
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  return (
    <div>
      <PhoneInput
        country={"in"}
        value={phoneNumber}
        onChange={handlePhoneChange}
      />
      <div></div>
      <div id="recaptcha"></div>
      <Button variant="text" onClick={handleSendCode}>
        Confirm
      </Button>
      <br />
      <TextField
        label="Verification Code"
        variant="standard"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <Button variant="text" onClick={handleVerifyCode}>
        Verify Code
      </Button>
    </div>
  );
};

export default PhoneAuth;
