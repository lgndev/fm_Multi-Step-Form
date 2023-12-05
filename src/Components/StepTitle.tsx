import { css } from "@emotion/react";
import { breakpoints } from "../emotionStyles/styles";

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const stepTitleCss = css({
  marginBottom: "9px",
  color: "#022959",
  fontSize: "24px",
  fontFamily: "'Ubuntu - bold'",
  [mq[0]]: {
    marginBottom: "11px",
    fontSize: "32px",
  },
});

const StepTitle = (props) => {
  return <div css={stepTitleCss}>{props.title}</div>;
};

export default StepTitle;
