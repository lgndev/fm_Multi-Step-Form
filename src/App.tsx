import "./App.css";
import { css } from "@emotion/react";
import SideBar from "./Components/SideBar";
import NextStep from "./Components/NextStep";
import { breakpoints } from "./emotionStyles/styles";

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const appContainerCss = css({
  height: "100%",
  overflow: "hidden",
  backgroundColor: "#EFF5FF",
  display: "grid",
  gridTemplateRows: "1fr auto",
  gridTemplateColumns: "1fr",
  [mq[0]]: {
    backgroundColor: "#ffffff",
    padding: "16px",
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "1fr auto",
  },
});

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

const App = () => {
  return (
    <>
      <div css={appContainerCss}>
        <SideBar />
        <main css={mainCss}>
          <div css={mainContentContainerCss}></div>
        </main>
        <NextStep />
      </div>
    </>
  );
};

export default App;
