import { RiArrowDropDownFill } from "react-icons/ri";
import { useState } from "react";
import logo from "../../assets/IMAGES/AllLogos/small-logo-transparent.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { LiaHomeSolid } from "react-icons/lia";
import Country from "./COUNTRIES/Country.jsx";
import University from "./UNIVERSITIES/University.jsx";
import Courses from "./COURSES/Courses.jsx";
import Exams from "./EXAMS/Exams.jsx";
import Loan from "./LOAN/Loan.jsx";
import "./LowerNav.css";
import MenuItem from "./MenuItem.jsx";
import { FiXSquare } from "react-icons/fi";

export default function LowerNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // Tracks the currently active menu item

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuTitle) => {
    setActiveMenu((prev) => (prev === menuTitle ? null : menuTitle));
  };

  return (
    <>
      <div className="global-wrapper d-flex">
        {/* Logo */}
        <div className="logo-container">
         <Link to="/"> <img src={logo} alt="logo" /></Link>
        </div>

        {/* Desktop Navigation */}
        <div className="lowerWrap">
          <div className="lower-links" id="_lowerNav">
            <ul className="nav d-flex">
              <li className="g-level1">
                <Button>
                  <Link to="/">
                    HOME <LiaHomeSolid />
                  </Link>
                </Button>
              </li>
              <li className="g-level1">
                <Button
                  className="d-flex"
                  onClick={() => handleMenuClick("COURSES")}
                >
                  COURSES <RiArrowDropDownFill className="ms-auto" />
                </Button>
                {activeMenu === "COURSES" && (
                  <div className="submenu shadow">
                    <Courses />
                  </div>
                )}
              </li>
              <li className="g-level1">
                <Button onClick={() => handleMenuClick("COUNTRIES")}>
                  COUNTRIES <RiArrowDropDownFill />
                </Button>
                {activeMenu === "COUNTRIES" && (
                  <div className="submenu shadow">
                    <Country />
                  </div>
                )}
              </li>
              <li className="g-level1">
                <Button onClick={() => handleMenuClick("UNIVERSITIES")}>
                  UNIVERSITIES <RiArrowDropDownFill />
                </Button>
                {activeMenu === "UNIVERSITIES" && (
                  <div className="submenu shadow">
                    <University />
                  </div>
                )}
              </li>
              <li className="g-level1">
                <Button onClick={() => handleMenuClick("EXAMS")}>
                  EXAMS <RiArrowDropDownFill />
                </Button>
                {activeMenu === "EXAMS" && (
                  <div className="submenu shadow">
                    <Exams />
                  </div>
                )}
              </li>
              <li className="g-level1">
                <Button onClick={() => handleMenuClick("LOAN")}>
                  LOAN <RiArrowDropDownFill />
                </Button>
                {activeMenu === "LOAN" && (
                  <div className="submenu shadow">
                    <Loan />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lowerWrap mobile-navbar">
          <div className="lower-links" id="_lowerNav">
            <ul className={`nav d-flex ${isMenuOpen ? "open" : "close"}`}>
              <div
                className="logo-container d-flex"
                style={{
                  backgroundColor: "#fff",
                  borderRight: "1px solid #1C3342",
                }}
              >
                <img src={logo} alt="logo" />
              </div>
              <div className="mobile-navbar">
                <MenuItem
                  title="COURSES"
                  isExpanded={activeMenu === "COURSES"}
                  onClick={() => handleMenuClick("COURSES")}
                  SubmenuComponent={Courses}
                />
                <MenuItem
                  title="COUNTRIES"
                  isExpanded={activeMenu === "COUNTRIES"}
                  onClick={() => handleMenuClick("COUNTRIES")}
                  SubmenuComponent={Country}
                />
                <MenuItem
                  title="UNIVERSITIES"
                  isExpanded={activeMenu === "UNIVERSITIES"}
                  onClick={() => handleMenuClick("UNIVERSITIES")}
                  SubmenuComponent={University}
                />
                <MenuItem
                  title="EXAMS"
                  isExpanded={activeMenu === "EXAMS"}
                  onClick={() => handleMenuClick("EXAMS")}
                  SubmenuComponent={Exams}
                />
                <MenuItem
                  title="LOAN"
                  isExpanded={activeMenu === "LOAN"}
                  onClick={() => handleMenuClick("LOAN")}
                  SubmenuComponent={Loan}
                />
              </div>
            </ul>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div id="mobile">
          {!isMenuOpen ? (
            <RxHamburgerMenu onClick={toggleMenu} className="hamburger" />
          ) : (
            <FiXSquare onClick={toggleMenu} className="cross" />
          )}
        </div>
      </div>
    </>
  );
}
