import { css } from "@emotion/react";
import { breakpoints } from "../emotionStyles/styles";

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const forminationCss = css({
  width: "33px",
  height: "33px",
  borderRadius: "50%",
  border: "1px solid #BEE2FD",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Ubuntu - bold'",
  fontSize: "14px",
  color: "#BEE2FD",
  margin: "16px",
  [mq[0]]: {
    margin: "16px 16px 16px 0",
  },
});

const Formination = () => {
  return (
    <div
      css={css([
        forminationCss,
        true ? { backgroundColor: "#BEE2FD", color: "#022959" } : "",
      ])}
    >
      1
    </div>
  );
};

export default Formination;
