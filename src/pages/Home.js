import React from 'react';

import Article from '../home/Article';

import {Row, Col} from 'react-bootstrap';

export default class Home extends React.Component{

componentDidMount(){
  window.scrollTo(0, 0);
}
  render(){
    const title={
      fontSize:"40px",
      fontWeight:"bold",
      marginBottom:"25px",
      fontFamily:"Roboto, Helvetica",

    }
    const content={
      fontFamily:"Helvetica",

    }
    return(
      <div>

        <Row>
          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Article>
          <div style={title}>
            Okanagan Fluid Dynamics Meeting
            </div>

            <div style={content}>
            The Okanagan Fluid Dynamics Meeting (OFDM) is a technical meeting for researchers in all areas of thermo-fluids. The goal is to create new and strengthen existing collaborations, and provide an ideal environment for undergraduate researchers, graduate students, and post-docs to present their research. The picturesque city of Kelowna, BC has been selected as the venue for hosting this event annually.
            </div>
          </Article>
          </Col>
          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          Important Dates
          </Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Article>
          <div style={title}>
            Okanagan Fluid Dynamics Meeting
            </div>

            <div style={content}>
            The Okanagan Fluid Dynamics Meeting (OFDM) is a technical meeting for researchers in all areas of thermo-fluids. The goal is to create new and strengthen existing collaborations, and provide an ideal environment for undergraduate researchers, graduate students, and post-docs to present their research. The picturesque city of Kelowna, BC has been selected as the venue for hosting this event annually.
            </div>
          </Article>
          </Col>
          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          Important Dates
          </Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Article>
          <div style={title}>
            Okanagan Fluid Dynamics Meeting
            </div>

            <div style={content}>
            The Okanagan Fluid Dynamics Meeting (OFDM) is a technical meeting for researchers in all areas of thermo-fluids. The goal is to create new and strengthen existing collaborations, and provide an ideal environment for undergraduate researchers, graduate students, and post-docs to present their research. The picturesque city of Kelowna, BC has been selected as the venue for hosting this event annually.
            </div>
          </Article>
          </Col>
          <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          Important Dates
          </Col>
        </Row>
       
      </div>
    );
  }
}