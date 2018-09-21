import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import image1 from 'images/2.jpeg';
import Latex from 'abstracts/LatexTemplate.tex';
import Word from 'abstracts/WordTemplate.rtf';

import {Row, Col} from 'react-bootstrap';

class Instructions extends React.Component{
  componentDidMount(){
    this.props.pagesActions.setPage("Instructions");
  }

  render(){
    const title={
      fontSize:"40px",
      fontWeight:"bold",
      marginBottom:"25px",
      color:this.props.color2,

    }
    const content={
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
            <strong><a href={Latex} download>LaTeX</a><br/></strong>
            <strong><a href={Word} download>Word</a><br/></strong>
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
          <img src={image1} style={sideimage} alt="sidebar instructions"/>
          </Col>
        </Row>


      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    darkSetting: state.pages.darkSetting,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(Instructions);
