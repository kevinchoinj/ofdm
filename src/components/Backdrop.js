import React from 'react';
import {Col} from 'react-bootstrap';
import darkimage from '../images/englogoblk.png';
import lightimage from '../images/englogo.png';

export default class Backdrop extends React.Component{
  render(){
    const backdrop={
      position:"fixed",
      opacity:".1",
      top: "50%",
      width:"100%",
      transform: "translate(0, -50%)",
    }
    const imagestyle={
      width:"100%",
    }


    return(
      <div style={backdrop}>
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12} xsOffset={0}>
        {this.props.color1==="rgba(26,26,26,1)"?
        <img src={lightimage} style={imagestyle}/>
        :
        <img src={darkimage} style={imagestyle}/>
    }

      </Col>
    
      </div>
    );
  }
}