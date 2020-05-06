import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import landing from "./components/landing";
import navbar from "./components/navbar";
import images from "./components/images";
import info from "./components/info";
import services from "./components/services";
import footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Container className="container">
        <div className="App">
          <Switch>
            <Route exact path="/" component={landing} />
            <Route exact path="/navbar" component={navbar} />
            <Route exact path="/images" component={images} />
            <Route exact path="/info" component={info} />
            <Route exact path="/services" component={services} />
            <Route exact path="/footer" component={footer} />
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
