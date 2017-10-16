import React from 'react';

import image1 from '../images/2.jpeg';

import {Row, Col} from 'react-bootstrap';
export default class Instructions extends React.Component{

  componentDidMount(){
    this.props.checkpage(); 
  }

  render(){
    const title={
      fontSize:"40px",
      fontWeight:"bold",
      marginBottom:"25px",
      fontFamily:"Roboto, Helvetica",
      color:this.props.color2,

    }
    const content={
      fontFamily:"Roboto, Helvetica",
      fontSize:"16px",
      letterSpacing:".5px",
      lineHeight:"150%",
      color:this.props.color2,
      marginBottom:"50px",
    }

    const sideimage={
      width:"100%",
    }

    const para1={
      marginBottom:"50px",
    }
    return(
      <div>
        <Row>
          <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>

        <div style={para1}>
          <div style={title}>
          Abstracts
            </div>

            <div style={content}>
            Please email abstracts to jejmcclu@uwaterloo.ca using the following templates: <br/>
            (link LaTeX template)<br/>
            (link Word template)<br/>
            The abstract must include your name, your supervisors name, the title of your presentation, and a maximum 1 page abstract.<br/>
            To allow sufficient time for putting together the meeting program and organizing the event, the deadline for submission of abstracts is set to November 1st, 2017.<br/>
            </div>
        </div>

          <div style={title}>
          Presentations
            </div>

            <div style={content}>
            The presentations are organized into two blocks, separated by a 15 minute refreshment break and followed by lunch to facilitate discussions between research groups. The presentations follow the following format: each speaker will give a talk of approximately 10 minutes, followed by 4 minutes of questions and 1 minute for transition to the next speaker.
            <br/><br/>
            A windows laptop computer will be available for student to use with Powerpoint tested for compatability with .mp4, .avi, .wmv movie files, however to avoid possible incompatibilities, presenters are encouraged to use their own laptops for their talks. The presentation room will be available starting at 8:30am in order to allow presenters to test their presentations if necessary.
            </div>
          </Col>

          <Col md={3} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <img src={image1} style={sideimage}/>
          </Col>
        </Row>

        
      </div>
    );
  }
}