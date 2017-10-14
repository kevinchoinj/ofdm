import React from 'react';
import {Row,Col} from 'react-bootstrap';
import image1 from '../images/englogoblk.png';
export default class Footer extends React.Component{
  render(){
    const backdrop={
      position:"fixed",
      opacity:".1",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }
    const imagestyle={
      width:"100%",
    }
    return(
      <div style={backdrop}>
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12} xsOffset={0}>
        <img src={image1} style={imagestyle}/>
      </Col>
    
      </div>
    );
  }
}