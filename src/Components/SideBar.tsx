import { css } from "@emotion/react";
import sideBarMobile from "../assets/images/bg-sidebar-mobile.svg";

const sideBarContainerCss = css({
  height: "172px",
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
  backgroundImage: `url(${sideBarMobile})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

const SideBar = () => {
  return <div css={sideBarContainerCss}>SideBar</div>;
};

export default SideBar;
