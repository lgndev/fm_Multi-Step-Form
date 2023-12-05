import { css } from "@emotion/react";
import { breakpoints } from "../emotionStyles/styles";
import PersonalInfo from "./PersonalInfo";

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const mainCss = css({
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
  margin: "99px 16px 24px 16px",
  position: "relative",
  [mq[0]]: {
    margin: "0",
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
  },
});

const mainContentContainerCss = css({
  position: "absolute",
  width: "100%",
  maxHeight: "100%",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "32px 24px",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 25px 0px rgba(0,0,0,0.10)",
  [mq[0]]: {
    height: "100%",
    boxShadow: "none",
    padding: "40px 100px 0px 100px",
  },
});

const Main = () => {
  return (
    <main css={mainCss}>
      <div css={mainContentContainerCss}>
        <PersonalInfo />
      </div>
    </main>
  );
};

export default Main;
