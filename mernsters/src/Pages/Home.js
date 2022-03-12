import React, { useEffect, useState } from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-grid-system';
import NavBar from '../Components/NavBar';
import axios from 'axios';


// Grid System: npm install react-grid-system --save
export default function Home() {

    const apiKey = 'LXpdsX3u0yZ2PTSR42dTLzeojjgOtlOYw3rTymp6'
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)
    const url = 'https://eonet.gsfc.nasa.gov/api/v2.1/categories';

    const fetchEvents = async () => {
        setLoading(true)
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
        const { events } = await res.json()
        console.log("test")
        console.log(events)
        setEventData(events)
        setLoading(false)
    }

    useEffect(() => {
        console.log("outside")
        fetchEvents()
    })

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
                    <div>
                    
                    </div>
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