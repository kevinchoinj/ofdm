import React from 'react';

import Article from '../home/Article';

import {Row, Col} from 'react-bootstrap';

export default class Home extends React.Component{

componentDidMount(){
}
  render(){
    const title={
      fontSize:"40px",
      fontWeight:"bold",
      marginBottom:"25px",
      fontFamily:"Roboto, Helvetica",

    }
    const content={
      fontFamily:"Roboto, Helvetica",
      fontSize:"16px",
      letterSpacing:".5px",
      lineHeight:"150%",
    }
    return(
      <div>

        <Row>
          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Article>
          <div style={title}>
            2017
            </div>

            <div style={content}>
            <strong>Date:</strong><br/>
            Thursday, November 9th, 2017<br/><br/>
            
            <strong>Time:</strong><br/>
            9:00am - 1:30pm<br/><br/>
            
            The department of Mechanical and Mechatronics Engineering Thermo-Fluids Fall Meeting brings together research groups working in thermo-fluids to give the opportunity for students to elevate the profile of their research, broaden their perspective in the field of thermo-fluids and generate discussion and interaction between research groups. Refreshments will be provided before and during the meeting, and lunch will be provided following the presentations.
          All thermo-fluids research groups are invited to submit abstracts and present their research at the meeting. Generally, a maximum of two presentations are allowed from each thermo-fluids research group to maintain diversity. A total of 10 presentation slots are available, with preference given to those who submitted abstracts first.
          </div>
          </Article>
         
          </Col>

        <Col md={3} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={content}>
          <strong>Important Deadlines</strong><br/><br/>
 
          <strong>Call for abstracts: </strong>
          October 16th, 2017<br/>
            <strong>Abstract submission deadline: </strong>
            November 1st, 2017<br/>
            <strong>Notification of acceptance: </strong> 
            November 3rd, 2017<br/>
            <strong>Meeting data: </strong>
            Thursday, November 9th, 2017<br/>
            <strong>Time: </strong>
            9:00am - 1:30pm<br/>
            <strong>Location: </strong>
            E5-2004<br/>
            <strong>Contact: </strong>
            jejmcclu@uwaterloo.ca<br/>
          </Col>
          
        </Row>
      </div>
    );
  }
}