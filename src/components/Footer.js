import React from 'react';
import {Row,Col} from 'react-bootstrap';

export default class Footer extends React.Component{
  render(){
    const footer={
      paddingTop:"50px",
      marginTop:"50px",
      width:"100%",
      height: "260px",
      bottom:"0px",
      left:"0px",
      right:"0px",
      backgroundColor:"#1a1a1a",
      fontFamily:"Roboto, Helvetica",

      color:"hsla(0,0%,100%,.7)"
    }

    const title={
      fontSize:"40px"
    }

    const info={

    }

    return(
      <div style={footer}>
    <Row>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
      <div style={title}>
      Contact for more information
      </div>
      <div style={info}>
      jejmcclu@uwaterloo.ca<br/>
      </div>
      </Col>
    </Row>

      </div>
    );
  }
}