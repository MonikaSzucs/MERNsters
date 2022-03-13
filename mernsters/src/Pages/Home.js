import React, { useEffect, useState } from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-grid-system';
import NavBar from '../Components/NavBar';
import Card from '../Components/Card/Card.js';
import axios from 'axios';


// Grid System: npm install react-grid-system --save
export default function Home() {

    const apiKey = 'LXpdsX3u0yZ2PTSR42dTLzeojjgOtlOYw3rTymp6'
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)
    const [counter, setCounter] = useState(0);
    const [dataPassed, setDataPassed] = useState()


    const increase = () => {
        if (counter == 0) {
          setCounter(count => count + 1);
        }
      };

    const fetchEvent = () => axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events').then((response) => {
        console.log(response)
        console.log(response[0])
        console.log(response.data.events[0])
        console.log(response.data.events[0].title)
        console.log()
        console.log("TESTING")
        setDataPassed(data => response.data.events[0].title)
        
    }).catch((err)=>{
        console.log(err)
    },[])

    useEffect(() => {
        console.log(counter)
        console.log("outside")
        if(counter === 0){
          fetchEvent(); increase()
          console.log("one")
        }
        if(counter !== 0){
          setInterval(fetchEvent, 100000);
          console.log("two")
        }
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
                        <Card 
                            title={dataPassed}
                            onChange={e => setDataPassed(e.target.value)}
                            namingType="card"
                        />
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