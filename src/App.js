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

import Colortoggle from './components/Colortoggle';
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
      
      color1:"rgba(255,255,255,1)",
      color2:"rgba(26,26,26,1)",
      
    }
    this.checkscroll = this.checkscroll.bind(this)

    this.pageishome = this.pageishome.bind(this)
    this.pageisinstruct = this.pageisinstruct.bind(this)
    this.pageispast = this.pageispast.bind(this)
    this.pageiskeynote = this.pageiskeynote.bind(this)

    this.togglecolors = this.togglecolors.bind(this);
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

togglecolors(){
  /*default light mode*/
  if(this.state.color1==="rgba(26,26,26,1)"){
    this.setState({
      color1:"rgba(255,255,255,1)",
      color2:"rgba(26,26,26,1)",
    })
  }
  /*dark mode*/
  else{
    this.setState({
      color1:"rgba(26,26,26,1)",
      color2:"rgba(200,200,200,1)",
    })
  }
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

    const appstyle={
      backgroundColor:this.state.color1,
      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",
    }

    return (
      
      <div className="App" style={appstyle}>
      <Backdrop color1={this.state.color1} color2={this.state.color2}/>

      <Colortoggle togglecolors={this.togglecolors}  color1={this.state.color1} color2={this.state.color2}/>
      <Menu 
        menuheight={this.state.menuheight} 
        offset={this.state.offset}
        currentpage={this.state.currentpage}
        color1={this.state.color1} color2={this.state.color2}
      />
      
      <div style={placeholder}>
      </div>
      <Route exact path={"/"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image1}
              color1={this.state.color1} color2={this.state.color2}
		        >
            Thermo-Fluids Fall Meeting
            </Banner>
		      </div>
		    )}/>
      <Route exact path={"/instructions"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image2}
              color1={this.state.color1} color2={this.state.color2}
		        >Instructions</Banner>
		      </div>
		    )}/>

      <Route exact path={"/past"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image3}
              color1={this.state.color1} color2={this.state.color2}
		        >Past Years</Banner>
		      </div>
		    )}/>

        <Route exact path={"/keynotes"} children={({ match }) => (
		      <div>
		        <Banner
              opac={ Boolean(match) ? '1': '0'}
              pointerevents={ Boolean(match) ? 'auto': 'none'}
              bgimage={image4}
              color1={this.state.color1} color2={this.state.color2}
		        >Keynotes</Banner>
		      </div>
		    )}/>

      <Switch>
      <Route exact path="/" render={(props) => <Home {...props} checkpage={this.pageishome} color1={this.state.color1} color2={this.state.color2}/>} />
      <Route exact path="/instructions" render={(props) => <Instructions {...props} checkpage={this.pageisinstruct} color1={this.state.color1} color2={this.state.color2}/>} />
      <Route exact path="/past" render={(props) => <Past {...props} checkpage={this.pageispast} color1={this.state.color1} color2={this.state.color2}/>} />
      <Route exact path="/keynotes" render={(props) => <Keynotes {...props} checkpage={this.pageiskeynote} color1={this.state.color1} color2={this.state.color2}/>} />
      
      </Switch>
        <Footer color1={this.state.color1} color2={this.state.color2}/>
      </div>
    );
  }
}

export default App;
