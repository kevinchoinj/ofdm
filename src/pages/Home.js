import React from 'react';

import Article from '../home/Article';
import Banner from '../home/Banner';
import image1 from '../images/science.jpg';

import {Row, Col} from 'react-bootstrap';

export default class Home extends React.Component{


  render(){
    const container={
      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",
      opacity: this.props.opac,
      pointerEvents:this.props.pointerevents,
    }
    return(
      <div style={container}>
        <Row>
          <Banner bgimage={image1}/>
        </Row>
        <Row>
          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Article/>
          </Col>
          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          Important Dates
          </Col>
        </Row>
      </div>
    );
  }
}