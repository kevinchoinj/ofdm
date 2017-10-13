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
      fontFamily:"Helvetica",

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
            Date:
            Wednesday, October 28th, 2015<br/><br/>
            
            Time:
            9:30am - 2:30pm (lunch to be provided)<br/><br/>
            
            Meeting Goals:
            Elevate the profile of thermo-fluid research in the department, broaden our graduate students' perspective in research, and improve valuable presentation skills. Presentations will generate discussions and promote interaction between research groups.
            Presentation Outline:
            The presentations are organized into two blocks, separated by a 15 minute refreshment break and followed by lunch to facilitate discussions between research groups (a catered lunch is provided). Following the APS Meeting format, each speaker will give a talk of approximately 10 minutes, followed by 4 minutes of questions and 1 minute for transition to the next speaker.
            A laptop computer will be available for each of the presentations, however to avoid incompatibility with software versions and OS versions, presenters are encouraged to use their own laptops for their talks. The presentation room will be available from 9:00am in order to allow presenters to verify compatibility with the projector and sound system if necessary.
            <br/><br/>
            Abstracts:
            All thermo-fluids research groups are invited to submit abstracts and present their research at the meeting. For this meeting, one presentation is invited from each thermo-fluids research group, with additional presentation slots being distributed on a first come basis.
            Instructions for Abstracts: Please email abstracts to Jeff McClure (jejmcclu@uwaterloo.ca) in the following format: (i) your name (ii) your supervisors name (iii) the title of your presentation (iv) abstract (up to 300 words): a brief description of the work you will be presenting.
            <br/><br/>
            To allow sufficient time for putting together the meeting program and organizing the event, the deadline for submission of abstracts is set to October 9th, 2015.</div>
          </Article>
         
          </Col>

        <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <strong>Important Deadlines</strong><br/><br/>
 
          <strong>Abstract Submission: </strong>
            October 9th, 2015<br/>
            <strong>Meeting Date: </strong>
            October 28th, 2015<br/>
            <strong>Meeting Location:</strong> 
            E5-2004<br/><br/>
            <strong>Please submit all information and questions to: 
            Jeffrey McClure, jejmcclu@uwaterloo.ca</strong><br/>
          </Col>
          
        </Row>
      </div>
    );
  }
}