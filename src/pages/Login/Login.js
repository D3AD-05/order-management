// import { Button, TextField } from "@mui/material";
// import React, { useState } from "react";
// import {
//   sendCodeToPhone,
//   siginWithGoogle,
//   signInWithPhoneCode,
// } from "../../firebase";
// import GoogleButton from "react-google-button";
// import PhoneAuth from "../../components/PhoneAuth";

// function Login() {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [verificationCode, setVerificationCode] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [verificationData, setVerificationData] = useState(null);

//   const handleSendCode = async () => {
//     try {
//       const result = await sendCodeToPhone(phoneNumber);
//       setConfirmationResult(result);
//     } catch (error) {
//       console.error("Error sending code:", error);
//     }
//   };

//   const handleVerifyCode = async () => {
//     try {
//       await signInWithPhoneCode(confirmationResult, verificationCode);
//       // User is now authenticated
//     } catch (error) {
//       console.error("Error verifying code:", error);
//     }
//   };

//   return (
//     <div>
//       <TextField label="User Name" variant="standard" />
//       <br />
//       <TextField label="email" variant="standard" />
//       <br />
//       <TextField label="Password" variant="standard" />
//       <br />
//       <TextField label="Confirm Password" variant="standard" />
//       <br />
//       <PhoneAuth />
//       {/* <Button variant="text">login </Button> */}
//       <br />
//       {/* <Button variant="text" onClick={siginWithGoogle}>
//         sigin up
//       </Button> */}
//       {/* <GoogleButton onClick={siginWithGoogle} /> */}
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { FormInput } from "../../components";

function Login() {
  const [formData, setFormData] = useState({
    rollNo: "",
    name: "",
    email: "",
    classNo: "",
    dob: "",
    phoneNo: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // setCurrentData({ ...formData, [e.target.name]: e.target.value });
  };
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Student name",
      errorMessage: "name should be 3-16 characters",
      label: "Student name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Try a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "rollNo",
      type: "number",
      placeholder: "Roll no",
      errorMessage: " !",
      label: "Roll No",
      required: true,
    },
    {
      id: 4,
      name: "classNo",
      type: "number",
      placeholder: "class",
      errorMessage: " !",
      label: "class",
      required: true,
    },
  ];
  return (
    <>
      {inputs.map((input, key) => (
        <FormInput
          key={input.id}
          {...input}
          value={inputs[input["name"]]}
          onChange={onChange}
        />
      ))}

      <FormInput namme={"naa,ere"} value={"ssss"} onChange={onChange} />
    </>
  );
}

export default Login;
