import { css } from "@emotion/react";
import { breakpoints } from "../emotionStyles/styles";
import StepTitle from "./StepTitle";
import StepInstructions from "./StepInstructions";
import { useFormStore } from "../store/formStore";
import { useState, useRef } from "react";

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const inputContainerCss = css({
  [mq[0]]: {},
});

const labelContainerCss = css({
  display: "flex",
  justifyContent: "space-between",
  label: {
    marginBottom: "3px",
    color: "#022959",
    fontSize: "12px",
    fontFamily: "'Ubuntu - regular'",
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Ubuntu - bold'",
    color: "#EE374A",
  },
  [mq[0]]: {
    label: {
      marginBottom: "8px",
      fontSize: "14px",
    },
    p: {
      fontSize: "14px",
    },
  },
});

const inputWrapperCss = css({
  position: "relative",
  input: {
    width: "100%",
    fontSize: "15px",
    fontFamily: "'Ubuntu - medium'",
    color: "#022959",
    padding: "11px 16px",
    borderRadius: "5px",
    border: "1px solid #D6D9E6",
    marginBottom: "16px",
    outline: "none",
    "&:focus": {
      border: "1px solid #483EFF",
    },
  },
  "input::placeholder": {
    color: "#9699AA",
  },
  [mq[0]]: {
    input: {
      fontSize: "16px",
      marginBottom: "24px",
    },
  },
});

const PersonalInfo = () => {
  const setName = useFormStore((state) => state.setName);
  const nameInputRef = useRef(null);
  const name = useFormStore((state) => state.name);
  const [tempName, setTempName] = useState(name);
  const [nameError, setNameError] = useState({
    error: false,
    value: "Name must follow format: 'firstname lastname'",
  });

  const setEmailAddress = useFormStore((state) => state.setEmailAddress);
  const emailAddressInputRef = useRef(null);
  const emailAddress = useFormStore((state) => state.emailAddress);
  const [tempEmailAddress, setTempEmailAddress] = useState(emailAddress);
  const [emailAddressError, setEmailAddressError] = useState({
    error: false,
    value: "Must be a valid email: example@lorem.com ",
  });

  const setPhoneNumber = useFormStore((state) => state.setPhoneNumber);
  const phoneNumberInputRef = useRef(null);
  const phoneNumber = useFormStore((state) => state.phoneNumber);
  const [tempPhoneNumber, setTempPhoneNumber] = useState(phoneNumber);
  const [phoneNumberError, setPhoneNumberError] = useState({
    error: false,
    value: "Phone number must follow format: 234 567 8901",
  });

  return (
    <div>
      <StepTitle title="Personal info" />
      <StepInstructions instructions="Please provide your name, email address, and phone number." />
      <div css={inputContainerCss}>
        <div css={labelContainerCss}>
          <label htmlFor="name">Name</label>
          {nameError.error && <p>{nameError.value}</p>}
        </div>
        <div css={inputWrapperCss}>
          <input
            ref={nameInputRef}
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            value={tempName}
            style={{ borderColor: nameError.error && "#EE374A" }}
            pattern="^[a-zA-Z]+ [a-zA-Z]+$"
            onChange={(e) => {
              // reset error
              setNameError((prev) => {
                return { ...prev, error: false };
              });
              // placeholder for new name before validation
              setTempName(e.target.value);
            }}
            onBlur={() => {
              // validate tempName on blur
              // Constraint Validation API
              if (nameInputRef.current.validity.patternMismatch) {
                // display error
                setNameError((prev) => {
                  return { ...prev, error: true };
                });
                // invalid name, reset tempName & name
                setTempName("");
                setName("");
              } else {
                // update state with new value
                setName(tempName);
              }
            }}
          />
        </div>
      </div>

      <div css={inputContainerCss}>
        <div css={labelContainerCss}>
          <label htmlFor="emailAddress">Email Address</label>
          {emailAddressError.error && <p>{emailAddressError.value}</p>}
        </div>
        <div css={inputWrapperCss}>
          <input
            ref={emailAddressInputRef}
            id="emailAddress"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={tempEmailAddress}
            style={{ borderColor: emailAddressError.error && "#EE374A" }}
            onChange={(e) => {
              // reset error
              setEmailAddressError((prev) => {
                return { ...prev, error: false };
              });
              // placeholder for new email address before validation
              setTempEmailAddress(e.target.value);
            }}
            onBlur={() => {
              // validate tempEmailAddress on blur
              // Constraint Validation API
              if (emailAddressInputRef.current.validity.typeMismatch) {
                // display error
                setEmailAddressError((prev) => {
                  return { ...prev, error: true };
                });
                // invalid email address, reset tempEmailAddress emailAddress
                setTempEmailAddress("");
                setEmailAddress("");
              } else {
                // update state with new value
                setEmailAddress(tempEmailAddress);
              }
            }}
          />
        </div>
      </div>

      <div css={inputContainerCss}>
        <div css={labelContainerCss}>
          <label htmlFor="phoneNumber">Phone Number</label>
          {phoneNumberError.error && <p>{phoneNumberError.value}</p>}
        </div>
        <div css={inputWrapperCss}>
          <input
            ref={phoneNumberInputRef}
            id="phoneNumber"
            type="text"
            placeholder="e.g. +1 234 567 8901"
            value={tempPhoneNumber}
            style={{ borderColor: phoneNumberError.error && "#EE374A" }}
            pattern="^[0-9]{3} [0-9]{3} [0-9]{4}$"
            onChange={(e) => {
              // reset error
              setPhoneNumberError((prev) => {
                return { ...prev, error: false };
              });
              // placeholder for new phoneNumber before validation
              setTempPhoneNumber(e.target.value);
            }}
            onBlur={() => {
              // validate tempPhoneNumber on blur
              // Constraint Validation API
              if (phoneNumberInputRef.current.validity.patternMismatch) {
                // display error
                setPhoneNumberError((prev) => {
                  return { ...prev, error: true };
                });
                // invalid phoneNumber, reset tempPhoneNumber & phoneNumber
                setTempPhoneNumber("");
                setPhoneNumber("");
              } else {
                // update state with new value
                setPhoneNumber(tempPhoneNumber);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
