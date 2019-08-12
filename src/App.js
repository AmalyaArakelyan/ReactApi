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
import ArticlePage from "./Article/ArticlePage"
import Header from "./Header"

function App() {
  return (
      <Router>
          <div>
              <Header/>
              <Navigation />

              <Route exact path="/" component={Home} />
              <Route exact path="/article/:id" component={ArticlePage} />
          </div>
      </Router>
  );
}

export default App;
