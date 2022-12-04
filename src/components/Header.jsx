import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import  './header.css'


const Header = () => {
  return (
    <div className="header">
      <Container>
        <ul className="nav">
          <h6>
            {/* <NavLink to={"/"}> */}
              CRUD APP
            {/* </NavLink> */}
          </h6>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add/post">Add Post</NavLink>
          </li>
          <li className="login">login</li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
