import React, { useState } from "react";
import { BlogNavStyled, Buttons } from "./BlogNavStyled";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import AnimatedNavbar from "./AnimatedNavbar";
// import SiteNav, { ContentGroup } from "react-site-nav";
import Teams from "./Teams/Teams";
import Button from "./PrimaryButton";
import { useGlobalContext } from "../../Context/context";
const BlogNav = () => {
  const [duration, setDuration] = useState(300);
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  // console.log(isSidebarOpen);
  // const onChange = (data) => {
  //   setState(data);
  // };
  return (
    <BlogNavStyled>
      <div className="navigation">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="animated">
          <AnimatedNavbar duration={duration} />
        </div>

        <Button name={"Sign in"} color={"#17408b"} />
        <Buttons clicked={isSidebarOpen} onClick={openSidebar} />
        {/* <SiteNav background="transparent" color="#000" height="100%">
          <ContentGroup
            title="Channels"
            width="420"
            height="270"
          ></ContentGroup>
          <ContentGroup title="Teams" width="420" height="270">
            <Teams />
          </ContentGroup>
          <ContentGroup title="Players" width="420" height="270"></ContentGroup>
        </SiteNav> */}
      </div>
    </BlogNavStyled>
  );
};

export default BlogNav;
