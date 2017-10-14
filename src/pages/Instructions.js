import React from 'react';
import Article from '../home/Article';

import {Row, Col} from 'react-bootstrap';
export default class Instructions extends React.Component{

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
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Article>
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
          </Article>
          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
          <Article>
          <div style={title}>
          Presentations
            </div>

            <div style={content}>
            The presentations are organized into two blocks, separated by a 15 minute refreshment break and followed by lunch to facilitate discussions between research groups. The presentations follow the following format: each speaker will give a talk of approximately 10 minutes, followed by 4 minutes of questions and 1 minute for transition to the next speaker.
            <br/><br/>
            A windows laptop computer will be available for student to use with Powerpoint tested for compatability with .mp4, .avi, .wmv movie files, however to avoid possible incompatibilities, presenters are encouraged to use their own laptops for their talks. The presentation room will be available starting at 8:30am in order to allow presenters to test their presentations if necessary.
            </div>
          </Article>
          </Col>
        </Row>
      </div>
    );
  }
}