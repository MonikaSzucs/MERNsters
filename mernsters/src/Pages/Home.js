import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import NavBar from '../Components/NavBar/navbar';
import Card from '../Components/Card/Card.js';
import axios from 'axios';
import { Link } from 'react-router-dom';


// Grid System: npm install react-grid-system --save
export default function Home() {

    const apiKey = 'LXpdsX3u0yZ2PTSR42dTLzeojjgOtlOYw3rTymp6'
    //const [eventData, setEventData] = useState([])
    //const [loading, setLoading] = useState(false)
    //const [counter, setCounter] = useState(0);
    //const [dataPassed, setDataPassed] = useState()
    const apiURL = "https://eonet.gsfc.nasa.gov/api/v3/events/geojson?category=severeStorms,wildfires&limit=100";
    const apiImageURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    // gets 20 open cases from the past 30 days from bcwildfire
    
    // const increase = () => {
    //     if (counter == 0) {
    //       setCounter(count => count + 1);
    //     }
    //   };


    // function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    // var R = 6371; // Radius of the earth in km
    // var dLat = deg2rad(lat2-lat1);  // deg2rad below
    // var dLon = deg2rad(lon2-lon1); 
    // var a = 
    //     Math.sin(dLat/2) * Math.sin(dLat/2) +
    //     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    //     Math.sin(dLon/2) * Math.sin(dLon/2)
    //     ; 
    // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    // var d = R * c; // Distance in km
    // return d;
    // }
    
    // function deg2rad(deg) {
    // return deg * (Math.PI/180)
    // }

    // useEffect(() => {
    //     fetchEvent()
    // },[]);

    // const fetchEvent = () => axios.get(apiURL).then((response) => {
    //     //const lastGeometries = response.data.events[0].geometries.length - 1
    //     // const data = response.data.events.slice(0,20)
    //     console.log(response)
    //     //console.log(data)
    //     console.log(response)
        
    //     console.log(response.data)
    //     console.log(response.data.features)
    //     setEventData(response.data.features)
        
        //let clusterGrabbed = []
        
        // let gary = {"id": response.data.events[0].id, 
        //             "title": response.data.events[0].title,
        //             "link": response.data.events[0].link
        //         }
        // var clusterCreated = clusterGrabbed.push(gary)

        // setDataPassed(gary)
        
    // }).catch((err)=>{
    //     console.log(err)
    // },[])

    // useEffect(() => {
    //     console.log(counter)
    //     console.log("outside")
    //     if(counter === 0){
    //       fetchEvent(); increase()
    //       console.log("one")
    //     }
    //     if(counter !== 0){
    //       setInterval(fetchEvent, 100000);
    //       console.log("two")
    //     }
    // })

    // const displayNotes = ((setEventData) => {
    //     const {notes} = setEventData;

    //     if (notes.length > 0) {
    //         return (
    //             notes.map((note, index) => {
    //                 console.log("event inside")
    //                 console.log(note);
    //                 return (
    //                     <div className='note' key={note.id}>
    //                         <h3>{note.title}</h3>
    //                     </div>
    //                 )
    //             })
    //         )
    //     } else {
    //         return (<h3>No notes yet</h3>)
    //     }
    // },[])
    


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
                        {/* {Object.keys().map((addressKey, index) => (
                            <span className="d-block" key={index}>
                            {typeof address[addressKey] === "object"
                                ? Object.keys(address[addressKey]).map(e => (
                                    <span>{address[addressKey][e]}</span>
                                ))
                                : data[0].features[index]}
                            </span>
                        ))} */}
                        {/* {eventData.map((eventsHappening) => 
                            <div 
                            // allData={eventsHappening}
                            >
                                {eventsHappening.data.features}
                                </div>
                        )} */}
                        <Link to="/nasaphoto">See into the stars!</Link>
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

    // const data = response.data.events.filter(e => {
    //     if (getDistanceFromLatLonInKm(56.1304, 106.3468, e.geometries[0].coordinates[0], e.geometries[-1].coordinates[1]
    //         ) < 300) {
    //             return e;
    //         }
    // })
    //56.1304° N, 106.3468° W

    // useEffect(() => {
    //     console.log(counter)
    //     console.log("outside")
    //     if(counter === 0){
    //       fetchEvent(); increase()
    //       console.log("one")
    //     }
    //     if(counter !== 0){
    //       setInterval(fetchEvent, 100000);
    //       console.log("two")
    //     }
    // })
    // fetchEvent()