import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Menu from './menu/Menu';
import Footer from './components/Footer';


import Banner from './home/Banner';
import image1 from './images/uwloo1.jpg';
import image2 from './images/uwloo2.jpg';
import image3 from './images/uwloo3.jpg';

import Home from './pages/Home';
import Schedule from './pages/Page1';
import Past from './pages/Past';

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
    
    const placeholder={
      height:"70vh",
      width:"100%",
      marginBottom:"50px",
    }

    return (
      <div className="App">

      <Menu menuheight={this.state.menuheight} offset={this.state.offset}/>
      
      <div style={placeholder}>
      </div>
      <Route exact path={"/"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image1}
		        />
		      </div>
		    )}/>
      <Route exact path={"/schedule"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image2}
		        />
		      </div>
		    )}/>

      <Route exact path={"/past"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image3}
		        />
		      </div>
		    )}/>

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/schedule" component={Schedule}/>
      <Route exact path="/past" component={Past}/>
      </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
