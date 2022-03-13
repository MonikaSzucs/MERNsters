import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-grid-system';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className="float-start">
                    <img
                    alt="logo"
                    src={require("../../images/fire_logo.png")}
                    width="30px"
                    height="30px"
                    className="d-inline-block align-top"
                    />{' '}
                    Mernsters Firewatch
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link" exact>Login</NavLink>
                        <NavLink to="/Home" className="nav-link" exact>Home</NavLink>
                        <NavLink to="/About" className="nav-link" exact>About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div>
        //     <Container>
        //     <Row>
        //         <Col sm={4}>
        //             <NavLink to="/" className="nav-link" exact>Login</NavLink>
        //         </Col>
        //         <Col sm={4}>
        //             <NavLink to="/Home" className="nav-link" exact>Home</NavLink>
        //         </Col>
        //         <Col sm={4}>
        //             <NavLink to="/About" className="nav-link" exact>About</NavLink>
        //         </Col>
        //     </Row>
        //     </Container>
        // </div>
    )
}
// Navbar