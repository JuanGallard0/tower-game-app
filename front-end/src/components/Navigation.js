import React from "react";
import { useAuth } from "../hooks/use-auth";
import "bootstrap/dist/css/bootstrap.css";
import "./Navigation.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useHistory } from "react-router-dom";

function Navigation() {
    const auth = useAuth();

    const history = useHistory();

    const handleClick = () => {
        history.push("/signup");
    };
    const handleClick1 = () => {
        history.push("/rooms");
    };
    const handleClick2 = () => {
        history.push("/customization");
    };

    return (
        <Navbar
            className="navigation"
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
        >
            <Navbar.Brand onClick={handleClick1} className="navigation__brand">
                <HomeIcon />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={handleClick2}>Customization</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Item className="navigation__item">
                        <AccountCircleIcon />
                    </Nav.Item>
                    <Nav.Item className="navigation__item">
                        {auth.user?.userName}
                    </Nav.Item>
                    <Nav.Item className="navigation__item">
                        <div>
                            <button onClick={handleClick} type="button">
                                <PersonAddIcon />
                            </button>
                        </div>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
