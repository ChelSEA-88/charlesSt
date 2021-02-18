import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import pages
import About from "./Pages/Landing"
import Contact from "./Pages/Contact";

//Import components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Container } from "reactstrap";




function App() {
  return (
    <Router>
        <Navbar />
          <Container>
            <Route exact path="/" component={About} />
            <Route path="/contact" component={Contact} />
          </Container>
        <Footer />
    </Router>
  );
}

export default App;
