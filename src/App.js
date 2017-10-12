import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Menu from './menu/Menu';
import Footer from './components/Footer';

import Home from './pages/Home';
import Page1 from './pages/Page1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisscroll:"0",
      lastscroll:"0",
      down:"",
      up:"",
      menuheight:"80px",
      offset:"0px",
    }
    this.checkscroll = this.checkscroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkscroll);
    window.addEventListener('resize', this.checkscroll);
    this.checkscroll();
  }
  checkscroll(){
    if (window.innerWidth > 992){
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    let scroll = {
       x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
       y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    };
    
    this.setState({
      thisscroll:scroll.y,
    });
    if (this.state.thisscroll > this.state.lastscroll){
    this.setState({
      menuheight:"40px",
      offset:"-20px",
    });
    }
    else if  (this.state.thisscroll < this.state.lastscroll){
      this.setState({
        menuheight:"80px",
        offset:"0px",
      });
    }
    else{
      this.setState({
        menuheight:"80px",
        offset:"0px",
      });
    }
    this.setState({
      lastscroll: this.state.thisscroll,
    });
  }
  /*if smaller than 982px, set to default height*/
  else{
    this.setState({
      menuheight:"80px",
      offset:"0px",
    });
  }
  }

  render() {
    return (
      <div className="App">

      <Menu menuheight={this.state.menuheight} offset={this.state.offset}/>

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/page1" component={Page1}/>
      </Switch>

      <Footer/>
      </div>
    );
  }
}

export default App;
