import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navigation from "./Navigation"
import Home from "./Home"

function App() {
  return (
      <Router>
          <div>
              <Navigation />

              <Route exact path="/" component={Home} />
          </div>
      </Router>
  );
}

export default App;
