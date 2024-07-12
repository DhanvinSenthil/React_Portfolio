import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  Close,
  Resume,
  RightIcons,
  NavBarIcons,
} from "../../styles/App.css";
import { FaHome } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DhanvinResume from "../../Images/DhanvinResume.pdf";
import { IoIosCloudDownload } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import "../../index.css";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const [isOpen, setisOpen] = useState(false);
  function closeMenu() {
    setisOpen(false);
  }

  const resumeDownloaded = () => {
    toast.success("Resume successfully downloaded!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    console.log("clicked");
  };
  const ResumeClicked = () => {
    resumeDownloaded();
    closeMenu();
  };
  return (
    <Nav>
      {isOpen ? (
        <Close onClick={() => setisOpen(!isOpen)} />
      ) : (
        <Bars onClick={() => setisOpen(!isOpen)} />
      )}
      <NavMenu isOpen={isOpen}>
        <NavLink to="/" onClick={closeMenu}>
          <NavBarIcons>
            <FaHome size={"20px"} />
            <span className="home-container">Home</span>
          </NavBarIcons>
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          <NavBarIcons>
            <BsPersonFill size={"20px"} />
            <span className="home-container">About</span>
          </NavBarIcons>
        </NavLink>
        <NavLink to="/Projects" activeStyle onClick={closeMenu}>
          <NavBarIcons>
            <GrProjects size={"20px"} />
            <span className="home-container">Projects</span>
          </NavBarIcons>
        </NavLink>
        <Resume onClick={ResumeClicked} download href={DhanvinResume}>
          <NavBarIcons>
            <IoIosCloudDownload size={"20px"} />
            <span className="home-container">Resume</span>
          </NavBarIcons>
        </Resume>
        <NavLink to="/contact" onClick={closeMenu}>
          <NavBarIcons>
            <BsSend size={"20px"} />
            <span className="home-container">Contact</span>
          </NavBarIcons>
        </NavLink>
      </NavMenu>
      <RightIcons>
        {isDark ? (
          <FiSun color="grey" onClick={toggleTheme} size={"30px"} />
        ) : (
          <FaRegMoon color="grey" onClick={toggleTheme} size={"30px"} />
        )}
      </RightIcons>
    </Nav>
  );
};

export default Navbar;
