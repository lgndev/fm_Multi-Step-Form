import { css } from "@emotion/react";
import { breakpoints } from "../emotionStyles/styles";

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const nextStepContainerCss = css({
  gridColumn: "1 / 2",
  gridRow: "2 / 3",
  padding: "16px",
  backgroundColor: "#ffffff",
  display: "flex",
  alignContent: "center",
  justifyContent: "flex-end",
  [mq[0]]: {
    padding: "16px 100px",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  },
});

const nextStepButtonCss = css({
  cursor: "pointer",
  width: "97px",
  height: "40px",
  borderRadius: "5px",
  backgroundColor: "#022959",
  border: "none",
  color: "#ffffff",
  [mq[0]]: {
    height: "48px",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  },
});

const NextStep = () => {
  return (
    <div css={nextStepContainerCss}>
      <button css={nextStepButtonCss}>Next Step</button>
    </div>
  );
};

export default NextStep;
