import { css } from "@emotion/react";
import { breakpoints } from "../emotionStyles/styles";

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const stepInstructionsCss = css({
  marginBottom: "22px",
  color: "#9699AA",
  fontSize: "16px",
  fontFamily: "'Ubuntu - regular'",
  [mq[0]]: {
    marginBottom: "11px",
  },
});

const StepInstructions = (props) => {
  return <div css={stepInstructionsCss}>{props.instructions}</div>;
};

export default StepInstructions;
