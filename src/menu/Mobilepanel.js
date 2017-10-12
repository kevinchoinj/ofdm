import React from 'react';

import {Row, Col} from 'react-bootstrap';

export default class Menuoption extends React.Component{
constructor(props){
  super(props);
  this.state=({
  })
}

  render(){
    const panel={
      width:"100vw",
      height:"100vh",
      backgroundColor:"rgba(0,0,0,.8)",
      right: this.props.mobileoffset,
      position:"fixed",
      top:"0px",

      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",

      zIndex:"6",

      color:"#fff",

    }
    return(
      <div style={panel}>
      <Row>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        Home<br/>
        Page1<br/>
        Page2<br/>
        Page3<br/>
        Page4<br/>
        </Col>
       </Row>
      </div>
    );
  }
}