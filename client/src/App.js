import React from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/aboutus';
import AboutUs from './pages/aboutus/about'
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Home from './pages/landingpage/index';
import Services from './pages/services';
// import OtherInqueries from './pages/other'
function App(){
  return (
    <Router>
      <Switch>
        <Route exact path="/"        component={Home} />
        <Route exact path="/about"   component={About }/>
        <Route exact path="/aboutus"   component={AboutUs }/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/gallery" component={Gallery }/>
        <Route exact path="/services"component={Services}/>
      </Switch>
    </Router>
  )
}

export default App;