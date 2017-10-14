import React, { Component } from 'react';

import './App.css';
import {Switch, Route} from 'react-router-dom';

import Menu from './menu/Menu';
import Footer from './components/Footer';


import Banner from './home/Banner';
import image1 from './images/uwloo2.jpg';
import image2 from './images/uwloo1.jpg';
import image3 from './images/uwloo3.jpg';
import image4 from './images/uwloo4.jpg';

import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Past from './pages/Past';
import Keynotes from './pages/Keynotes';
import Backdrop from './components/Backdrop';

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

      currentpage:"",
    }
    this.checkscroll = this.checkscroll.bind(this)

    this.pageishome = this.pageishome.bind(this)
    this.pageisinstruct = this.pageisinstruct.bind(this)
    this.pageispast = this.pageispast.bind(this)
    this.pageiskeynote = this.pageiskeynote.bind(this)
  }

pageishome(){
  this.setState({
    currentpage:"home"
  })
}
pageisinstruct(){
  this.setState({
    currentpage:"instructions"
  })
}
pageispast(){
  this.setState({
    currentpage:"past"
  })
}
pageiskeynote(){
  this.setState({
    currentpage:"keynotes"
  })
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
      height:"100vh",
      width:"100%",
      marginBottom:"50px",
    }

    return (
      
      <div className="App">
      <Backdrop/>

      <Menu 
        menuheight={this.state.menuheight} 
        offset={this.state.offset}
        currentpage={this.state.currentpage}
      />
      
      <div style={placeholder}>
      </div>
      <Route exact path={"/"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image1}
		        >Thermo-Fluids Fall Meeting</Banner>
		      </div>
		    )}/>
      <Route exact path={"/instructions"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image2}
		        >Instructions</Banner>
		      </div>
		    )}/>

      <Route exact path={"/past"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image3}
		        >Past Years</Banner>
		      </div>
		    )}/>

        <Route exact path={"/keynotes"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image4}
		        >Keynotes</Banner>
		      </div>
		    )}/>

      <Switch>
      <Route exact path="/" render={(props) => <Home {...props} checkpage={this.pageishome}/>} />
      <Route exact path="/instructions" render={(props) => <Instructions {...props} checkpage={this.pageisinstruct}/>} />
      <Route exact path="/past" render={(props) => <Past {...props} checkpage={this.pageispast}/>} />
      <Route exact path="/keynotes" render={(props) => <Keynotes {...props} checkpage={this.pageiskeynote}/>} />
      
      </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
