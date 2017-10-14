import React from 'react';
import {Col} from 'react-bootstrap';
import logo from '../images/englogo.png';

export default class Banner extends React.Component{
  render(){
    const banner={
      position:"absolute",
      top:"0px",
      width:"100%",
      background: 'url('+this.props.bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
      backgroundSize: "cover",
      height: "calc(100vh - 170px)",

      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",
      opacity: this.props.opac,
      pointerEvents:this.props.pointerevents,
    }

    const text={
      height:"170px",
      fontSize:"40px",
      position:"absolute",
      top:"calc(100vh - 110px)",
      opacity: this.props.opac,
      pointerEvents:this.props.pointerevents,
      width:"100%",
      fontWeight:"bold",
      fontFamily:"Roboto, Helvetica",

      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",
    }

    const logostyle={
      bottom:"0px",
      right:"0px",
      position:"absolute",
      maxWidth:"100%",
    }
    return(
      <div>
      <div style={banner}>
        <img src={logo} style={logostyle}/>
      </div>

        
      <div style={text}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
      {this.props.children}
      </Col>
      </div>
      </div>
    );
  }
}