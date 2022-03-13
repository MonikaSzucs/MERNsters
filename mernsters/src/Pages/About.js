import React from "react";
import { Container, Row, Col } from "react-grid-system";
import NavBar from "../Components/NavBar/navbar";

export default function About() {
    return (
        <div>
      <div>
        <NavBar />
        <Container>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>About HERE</Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </div>
      <p>
        Mernsters Firewatch is a real time surveillance app that can show the
        locations of wildfires. It enables users to see exactly where the
        wildfire is happending so they can better preprare. In the future, we
        might implement a warning function to give user an alert if the user is
        whithin a certain distance of an active wildfire.
      </p>
      <h3>
        Members(Mernsters) in our group: Monika Szucs, Eric Dong and
        Stefan Chen
      </h3>

        API used in this project:
        <li> NASA Earth Observatory Natural Event Tracker <br></br>https://eonet.gsfc.nasa.gov/api/v2.1/events</li>
      
    </div>
  );
}
// About
