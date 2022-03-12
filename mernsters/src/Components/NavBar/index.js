import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { 
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'react-grid-system';

export default function NavBar() {
    return (
        <div>
            <Container>
            <Row>
                <Col sm={4}>
                    <RouterNavLink to="/" className="nav-link" exact>Login</RouterNavLink>
                </Col>
                <Col sm={4}>
                    <RouterNavLink to="/Home" className="nav-link" exact>Home</RouterNavLink>
                </Col>
                <Col sm={4}>
                    <RouterNavLink to="/About" className="nav-link" exact>About</RouterNavLink>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
// Navbar