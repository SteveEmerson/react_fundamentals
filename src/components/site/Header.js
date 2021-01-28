import React from 'react'
// The above is necessary if you are creating a class component  ... not with a function component
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {
  return(
    <header>
      <Navbar className = "header">
        <NavbarBrand href="/"> React Library </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/SteveEmerson/react_fundamentals.git">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;