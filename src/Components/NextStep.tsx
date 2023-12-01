import React from "react";
import { css } from "@emotion/react";

const nextStepContainerCss = css({
  gridColumn: "1 / 2",
  gridRow: "2 / 3",
  padding: "16px",
  backgroundColor: "#ffffff",
  display: "flex",
  alignContent: "center",
  justifyContent: "flex-end",
});

const nextStepButtonCss = css({
  cursor: "pointer",
  width: "97px",
  height: "40px",
  borderRadius: "5px",
  backgroundColor: "#022959",
  border: "none",
  color: "#ffffff",
});

const NextStep = () => {
  return (
    <div css={nextStepContainerCss}>
      <button css={nextStepButtonCss}>Next Step</button>
    </div>
  );
};

export default NextStep;
