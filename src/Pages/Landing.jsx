import React from "react";
// import Hero from "../components/Hero";

//Components
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Logo from "../Pictures/logo.jpg";

function About() {
  const style= {
    color: "#3e5965",
    padding: "50px",
  }
    return (
      <div>
        <Container style={{ marginTop: 80 }}>

          <Row>
          <Col size="6">
                <img src={Logo} alt="Logo"
                width={350}
                height={250}
                />
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
                <p>
                    Info goes here
                </p>
              
            </Col>

          </Row>
          <Row> 
            <Col size="lg-12" padding="p-">
              <h4 className="text-center" style={style}>
                
              </h4>
            </Col>
           </Row>
           <Row> 
            <Col size="lg-12" padding="p-">
           
            </Col>
           </Row>
        </Container>
      </div>
    );
  }
  
  export default About;