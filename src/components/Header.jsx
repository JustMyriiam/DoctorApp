import React, { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { Navbar, Dropdown, Modal } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import LoginPage from "../components/Login"; // Import the Login page component

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); // State to control the visibility of the login modal

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleToggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <Navbar className="header-container d-flex justify-content-between">
      <Navbar.Brand href="home" className="brand">
        <img alt="LOGO" src="/public/doctoricon.png" className="logo" />
        AXIA Doctor
      </Navbar.Brand>
      <Dropdown
        onToggle={handleToggleMenu}
        show={showMenu}
        className="login-dropdown"
      >
        <Dropdown.Toggle
          as={RiAccountCircleFill}
          className="login-toggle"
          id="login-dropdown-toggle"
        />
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleToggleLoginModal}>
            Changer de compte
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/signup">
            Se déconnecter
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleToggleLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render the Login page component */}
          <LoginPage />
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default Header;
