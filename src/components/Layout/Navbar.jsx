import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import { path_prefix, show_wip } from "../../config";

export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar
        color="primary"
        inverse
        toggleable
        style={{ marginBottom: "15px" }}
      >
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand tag={Link} exact to={`${path_prefix}/`}>
          Zach Sim
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          {show_wip && (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to={`${path_prefix}/vis/hcim`}>
                  HCIM Vis
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to={`${path_prefix}/projects/`}>
                  Projects
                </NavLink>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    );
  }
}
