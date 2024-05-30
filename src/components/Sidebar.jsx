import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillHome, AiFillCalendar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { IoIosArrowDown } from "react-icons/io";
import {
  BsFillPersonFill,
  BsFillPersonPlusFill,
  BsFillCalendarPlusFill,
  BsFillPersonVcardFill,
} from "react-icons/bs";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      title: "Acceuil",
      path: "/acceuil",
      icon: <AiFillHome />,
      cName: "nav-text",
    },
    {
      title: "Agenda",
      path: "/agenda",
      icon: <AiFillCalendar />,
      cName: "nav-text",
    },
    {
      title: "Patients",
      path: "/patients",
      icon: <BsFillPersonVcardFill />,
      cName: "nav-text",
      children: [
        {
          title: "Ajouter Patients",
          path: "/patients/ajouterpatient",
          icon: <BsFillPersonPlusFill />,
          cName: "subnav-text",
        },
        {
          title: "Ajouter Rendez-vous",
          path: "/patients/ajouterrendezvous",
          icon: <BsFillCalendarPlusFill />,
          cName: "subnav-text",
        },
      ],
    },
  ];

  return (
    <Stack gap={2} className="sidebar-container">
      <FaBars className="hamburger-menu" onClick={toggleMenu}/>
      {/* <img
        className="profile"
        src="/public/profil.png"
        alt="photo de profil"
      ></img> */}
      {menuItems.map((item, index) => (
        <div key={index}>
          <NavLink
            to={item.path}
            className="link"
            activeclassname="active"
          >
            <div className="d-flex align-items-center">
              <div className="side-icon">{item.icon}</div>
              <div className="link-text">
                {item.title} {item.children && <IoIosArrowDown />}
              </div>
            </div>
          </NavLink>

          {item.children && (
            <div className="sub-routes">
              {item.children.map((subItem, subIndex) => (
                <NavLink
                  to={subItem.path}
                  className="link sub-link"
                  activeclassname="active"
                  key={subIndex}
                >
                  <div className="d-flex align-items-center">
                    <div className="sub-icon">{subItem.icon}</div>
                    <div className="sub-link-text">{subItem.title}</div>
                  </div>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="content">{children}</div>
    </Stack>
  );
};

export default Sidebar;
