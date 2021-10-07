import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Detail from './Komponen/detail';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import Index from './Komponen';
import Makanan from './Komponen/Data/Makanan';
import { Home } from './Komponen/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div className="App">
      {/* <header className="App-header">
        <h2>Daftar Makanan Khas Pati</h2>
        <Detail />
      </header> */}
      <BrowserRouter>
        <Container>
          <Navbar collapseOnSelect className="Navbar " expand="lg" sticky="top">
            <Container height="5000">
              <Navbar.Brand href="">
                <img src="https://www.linkpicture.com/q/logo-makanan-1.png" width="80" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
                <h5>Makanan Daerah Pati</h5>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link className="text-navbar" href="/">
                    <h5 className="nav-a">HOME</h5>
                  </Nav.Link>
                  <Nav.Link className="text-navbar" href="/makanan">
                    <h5 className="nav-a">DAFTAR MAKANAN</h5>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/makanan" exact component={Makanan} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
