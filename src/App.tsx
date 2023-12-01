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
  [mq[0]]: {
    backgroundColor: "red",
  },
  display: "grid",
  gridTemplateRows: "1fr auto",
  gridTemplateColumns: "1fr",
});

const mainCss = css({
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
  margin: "99px 16px 24px 16px",
  position: "relative",
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
