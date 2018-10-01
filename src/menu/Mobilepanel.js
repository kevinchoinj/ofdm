import React from 'react';
import {Link} from 'react-router-dom';

import {Row, Col} from 'react-bootstrap';

export default class Menuoption extends React.Component{
constructor(props){
  super(props);
  this.state=({
    menudisplay:"block"

  })
  this.checkresize = this.checkresize.bind(this)
}

componentDidMount(){
  window.addEventListener('resize', this.checkresize);
  this.checkresize();
}

checkresize(){
  if (window.innerWidth < 992){
    this.setState({
      menudisplay: "block"
    })
  }
  if (window.innerWidth > 992){
    this.setState({
      menudisplay: "none"
    })
  }
}



  render(){
    const panel={
      display:this.state.menudisplay,
      width:"100vw",
      height:"100vh",
      backgroundColor:"rgba(0,0,0,.8)",
      right: this.props.mobileoffset,
      position:"fixed",
      top:"0px",

      WebkitTransition: ".25s ease-out",
      MozTransition: ".25s ease-out",
      OTransition: ".25s ease-out",
      transition:".25s ease-out",

      zIndex:"6",
      paddingTop:"100px",

    }

    const opacstyle1={
      color:"#fff",
      fontFamily:"Roboto, Helvetica",
      fontSize:"36px",
      letterSpacing:".5px",
      lineHeight:"200%",
      position:"absolute",

      opacity: this.props.mobileopac1,
      WebkitTransition: ".25s ease-out",
      MozTransition: ".25s ease-out",
      OTransition: ".25s ease-out",
      transition:".25s ease-out",
      top:this.props.mobileoffset1,
    }
    const opacstyle2={
      color:"#fff",
      fontFamily:"Roboto, Helvetica",
      fontSize:"36px",
      letterSpacing:".5px",
      lineHeight:"200%",
      position:"absolute",

      opacity: this.props.mobileopac2,
      WebkitTransition: ".25s ease-out",
      MozTransition: ".25s ease-out",
      OTransition: ".25s ease-out",
      transition:".25s ease-out",
      top:this.props.mobileoffset2,
    }
    const opacstyle3={
      color:"#fff",
      fontFamily:"Roboto, Helvetica",
      fontSize:"36px",
      letterSpacing:".5px",
      lineHeight:"200%",
      position:"absolute",

      opacity: this.props.mobileopac3,
      WebkitTransition: ".25s ease-out",
      MozTransition: ".25s ease-out",
      OTransition: ".25s ease-out",
      transition:".25s ease-out",
      top:this.props.mobileoffset3,
    }
    const opacstyle4={
      color:"#fff",
      fontFamily:"Roboto, Helvetica",
      fontSize:"36px",
      letterSpacing:".5px",
      lineHeight:"200%",
      position:"absolute",

      opacity: this.props.mobileopac4,
      WebkitTransition: ".25s ease-out",
      MozTransition: ".25s ease-out",
      OTransition: ".25s ease-out",
      transition:".25s ease-out",
      top:this.props.mobileoffset4,
    }
    const opacstyle5={
      color:"#fff",
      fontFamily:"Roboto, Helvetica",
      fontSize:"36px",
      letterSpacing:".5px",
      lineHeight:"200%",
      position:"absolute",

      opacity: this.props.mobileopac5,
      WebkitTransition: ".25s ease-out",
      MozTransition: ".25s ease-out",
      OTransition: ".25s ease-out",
      transition:".25s ease-out",
      top:this.props.mobileoffset5,
    }

    const optioncont={
      position:"relative",
      height:"60px",
      overflow: "hidden",
      width:"100%",
    }

    return(
      <div style={panel}>
      <Row>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <Link to='/' onClick={this.props.gotop}>
          <div style={optioncont} onClick={this.props.toggler}>
            <span style={opacstyle1}>
              Home
            </span>
          </div>
        </Link>
        <Link to='/instructions' onClick={this.props.gotop}>
        <div style={optioncont} onClick={this.props.toggler}>
            <span style={opacstyle2}>
              Instructions
            </span>
          </div>
        </Link>
        <Link to='/schedule' onClick={this.props.gotop}>
        <div style={optioncont} onClick={this.props.toggler}>
            <span style={opacstyle3}>
              Schedule
            </span>
          </div>
        </Link>
        <Link to='/past' onClick={this.props.gotop}>
        <div style={optioncont} onClick={this.props.toggler}>
            <span style={opacstyle4}>
              Past Seminars
            </span>
          </div>
        </Link>
        <Link to='/keynotes' onClick={this.props.gotop}>
        <div style={optioncont} onClick={this.props.toggler}>
            <span style={opacstyle5}>
              Keynotes
            </span>
          </div>
        </Link>
        </Col>
       </Row>
      </div>
    );
  }
}