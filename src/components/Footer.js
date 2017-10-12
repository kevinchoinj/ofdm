import React from 'react';
import {Row,Col} from 'react-bootstrap';

export default class Footer extends React.Component{
  render(){
    const footer={
      marginTop:"50px",
      width:"100%",
      height: "260px",
      bottom:"0px",
      left:"0px",
      right:"0px",
      backgroundColor:"#1a1a1a",
    }

    return(
      <div style={footer}>
    <Row>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
      </Col>
    </Row>

      </div>
    );
  }
}