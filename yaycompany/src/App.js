import "./sass/style.scss";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <body>
        <Router>
          <div>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">The YAY Company </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavLink exact to="/" className="nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/news" className="nav-link">
                    News
                  </NavLink>
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="primary">Go</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </body>
      <Footer />
    </>
  );
}

export default App;
