import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css'

function App() {
  return (
    <Router>
      <div class="nav-text">
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
    <Header />
      </div>
      <div className="animation">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
