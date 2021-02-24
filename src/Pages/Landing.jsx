import React from "react";
// import Hero from "../components/Hero";

import {
  Card, Button, CardHeader, CardBody,
  CardTitle, Row, Col, NavLink
} from 'reactstrap';

//Components
import Container from "../Components/Container";
// import Row from "../Components/Row";
// import Col from "../Components/Col";
import Logo from "../Pictures/logo.jpg";
import Desks from "../Pictures/image2.jpg"
import Cozy from "../Pictures/image5.jpg"

function About() {
  const style= {
    color: "#3e5965",
    padding: "50px",
  }
    return (
      <div>
        <Container style={{ padding: 80 }}>
          <Row>
            <Col size="6">
                <img src={Logo} alt="Logo"
                width={350}
                height={250}
                />
            </Col>
            <Col size="6">
              <Row size="5"></Row>
                <h1>Need a workspace?</h1>
            </Col>
          </Row>
          <Row> 
            <Col size="lg-12" padding="p-"></Col>
           </Row>
          <Row style={{ marginTop: 80 }}>
                    <Card style={{ marginRight: 80 }}>
                        <CardBody>
                            <Row>
                                <Col size="lg-5">
                                    <Row>
                                      <p>
                                        Drop-In 
                                      </p>
                                    </Row>
                                    <Row>
                                      <p>
                                        Daily Rates
                                      </p>
                                    </Row>
                                    <Row className="padding: 50px"> 
                                    <Button color="secondary" style={{ margin: "10px" }} className="mr-5" >More Info Here</Button>
                                    </Row>            
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <Card style={{ marginRight: 80 }}>
                        <CardBody>
                            <Row>
                                <Col size="lg-5">
                                    <Row>
                                      <p>
                                        Part-Time/Full-Time
                                      </p>
                                    </Row>
                                    <Row>
                                      <p>
                                        On Calendar
                                      </p>
                                    </Row>
                                    <Row className="padding: 50px"> 
                                    <Button color="secondary" style={{ margin: "10px" }} className="mr-5" >More Info Here</Button>
                                    </Row>            
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col size="lg-5">
                                    <Row>
                                      <p>
                                        Virtual Office
                                      </p>
                                    </Row>
                                    <Row className="padding: 50px"> 
                                    <Button color="secondary" style={{ margin: "10px" }} className="mr-5" >More Info Here</Button>
                                    </Row>            
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
          <Row> 
            <Col size="lg-12" padding="p-">
              <h4 className="text-center" style={style}></h4>
            </Col>
           </Row>
           <Row style={{ marginTop: 80 }}> 
            <Col size="lg-6">
            <h1>
              Come work with us!
            </h1>
            </Col>
            <Col size="6">
                <img src={Desks} alt="Logo"
                width={350}
                height={250}
                />
            </Col>
           </Row>
           <Row style={{ marginTop: 80 }}>  
           <Col size="6">
                <img src={Cozy} alt="Logo"
                width={350}
                height={250}
                />
            </Col>
            <Col size="lg-6">
            <h1>
              The coziest place to work!
            </h1>
            </Col>
           </Row>
        </Container>
      </div>
    );
  }
  
  export default About;