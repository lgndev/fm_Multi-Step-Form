import { css } from "@emotion/react";
import { breakpoints } from "../emotionStyles/styles";
import StepTitle from "./StepTitle";
import StepInstructions from "./StepInstructions";

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
  return (
    <div>
      <StepTitle title="Personal info" />
      <StepInstructions instructions="Please provide your name, email address, and phone number." />
      <div css={inputContainerCss}>
        <div css={labelContainerCss}>
          <label htmlFor="name">Name</label>
          <p>error</p>
        </div>
        <div css={inputWrapperCss}>
          <input id="name" type="text" placeholder="e.g. Stephen King" />
        </div>
      </div>

      <div css={inputContainerCss}>
        <div css={labelContainerCss}>
          <label htmlFor="email">Email Address</label>
          <p>error</p>
        </div>
        <div css={inputWrapperCss}>
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
      </div>

      <div css={inputContainerCss}>
        <div css={labelContainerCss}>
          <label htmlFor="number">Phone Number</label>
          <p>error</p>
        </div>
        <div css={inputWrapperCss}>
          <input id="number" type="number" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
