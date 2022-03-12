import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import NavBar from '../Components/NavBar';

// Grid System: npm install react-grid-system --save
export default function Home() {
    return (
        <div>
            <NavBar/>
            <Container>
            <Row>
                <Col sm={4}>
                Home page
                </Col>
                <Col sm={4}>
                Home page
                </Col>
                <Col sm={4}>
                Home page
                </Col>
            </Row>
            </Container>
        </div>
    )
}
// Home