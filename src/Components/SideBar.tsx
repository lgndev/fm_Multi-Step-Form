import { css } from "@emotion/react";
import sideBarMobile from "../assets/images/bg-sidebar-mobile.svg";
import { breakpoints } from "../emotionStyles/styles";

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const sideBarContainerCss = css({
  height: "172px",
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
  backgroundImage: `url(${sideBarMobile})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  padding: "32px 16px",
  [mq[0]]: {
    width: "274px",
    height: "auto",
    gridColumn: "1 / 2",
    gridRow: "1 / 3",
    borderRadius: "10px",
    padding: "40px 32px",
  },
});

const SideBar = () => {
  return <div css={sideBarContainerCss}>SideBar</div>;
};

export default SideBar;
