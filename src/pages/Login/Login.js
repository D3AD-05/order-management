import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  sendCodeToPhone,
  siginWithGoogle,
  signInWithPhoneCode,
} from "../../firebase";
import GoogleButton from "react-google-button";
import PhoneAuth from "../../components/PhoneAuth";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleSendCode = async () => {
    try {
      const result = await sendCodeToPhone(phoneNumber);
      setConfirmationResult(result);
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      await signInWithPhoneCode(confirmationResult, verificationCode);
      // User is now authenticated
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  return (
    <div>
      <TextField label="User Name" variant="standard" />
      <br />
      <TextField label="email" variant="standard" />
      <br />
      <TextField label="Password" variant="standard" />
      <br />
      <TextField label="Confirm Password" variant="standard" />
      <br />
      <PhoneAuth />
      {/* <Button variant="text">login </Button> */}
      <br />
      {/* <Button variant="text" onClick={siginWithGoogle}>
        sigin up
      </Button> */}
      {/* <GoogleButton onClick={siginWithGoogle} /> */}
    </div>
  );
}

export default Login;
