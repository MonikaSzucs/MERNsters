import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-grid-system';
import NavBar from '../Components/NavBar';

export default function About() {
    return (
        <div>
            <NavBar/>
            <Container>
            <Row>
                <Col sm={4}>
                
                </Col>
                <Col sm={4}>
                About HERE
                </Col>
                <Col sm={4}>
                
                </Col>
            </Row>
            </Container>
        </div>
    )
}
// About