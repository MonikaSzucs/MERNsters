import React from "react";
import { Container, Row, Col } from "react-grid-system";
import NavBar from "../Components/NavBar/navbar";
import "./About.css";

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
      <div className="Text">
        <p>
          Mernsters Firewatch is a real time surveillance app that can show the
          locations of wildfires. It enables users to see exactly where the
          wildfire is happending so they can better preprare. In the future, we
          might implement a warning function to give user an alert if the user
          is whithin a certain distance of an active wildfire.
        </p>
        <p class="lead mb-6 mx-4">Members(Mernsters)</p>
        <div class="card-group px-4">
          <div class="card p-4">
            <div class="card-body">
              <h5 class="card-title">Monika Szucs</h5>
              <p class="card-text"></p>
              My name is Monika. I helped with setting up the react template,
              working on the API in fetch and Axios but it didn't work properly,
              and I tried setting up the Mongo Data base but we ran out of time
              to complete it fully. This was my first full MERN project. It was
              a great learning experience.
            </div>
          </div>
          <div class="card p-4">
            <div class="card-body">
              <h5 class="card-title">Eric Dong</h5>
              <p class="card-text"></p>
              My name is Eric. I did styling on the navbar and helped with the
              data fetching using API, and general bug fixes.
            </div>
          </div>
          <div class="card p-4">
            <div class="card-body">
              <h5 class="card-title">Stefan Chen</h5>
              <p class="card-text">
                My name is Stefan and I am a term 1 student at BCIT CST. I did
                some front end pages using react and css styling, most of the time I am
                learning from my amazing team. I got my feet wet with react and
                I am super ready to dive deeper!
              </p>
            </div>
          </div>
        </div>
        API used in this project:
        <li>
          {" "}
          NASA Earth Observatory Natural Event Tracker -
          https://eonet.gsfc.nasa.gov/api/v2.1/events
        </li>
      </div>
    </div>
  );
}
// About
