import "./App.css";
import { css } from "@emotion/react";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
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

const App = () => {
  return (
    <>
      <div css={appContainerCss}>
        <SideBar />
        <Main />
        <NextStep />
      </div>
    </>
  );
};

export default App;
