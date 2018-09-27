import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import image1 from 'images/2.jpeg';
import Latex from 'abstracts/LatexTemplate.tex';
import Word from 'abstracts/WordTemplate.rtf';
import * as scrollActions from 'actions/scroll';
import Scrollbar from 'smooth-scrollbar';
import bannerImage from 'images/uwloo1.jpg';
import Banner from 'home/Banner';

class Instructions extends React.Component{
	componentDidMount() {
    this.props.pagesActions.setPage("Instructions");
		this.props.scrollActions.checkScroll(0);
		const scrollbar = Scrollbar.init(document.querySelector('#instructions_wrapper'), {
			alwaysShowTracks: true,
			syncCallbacks: true,
		});
		scrollbar.addListener(({ offset }) => {
      this.props.scrollActions.checkScroll(offset.y);
    });
  }
  render(){
    return(
      <div id="instructions_wrapper">
        <Banner
          bgimage={bannerImage}
        >
          Instructions
        </Banner>
        <div className="instructions_container">
          <div className="instructions_text">
            <div className="page_title">
              Abstracts
            </div>

            <div className="instructions_text">
              Please email abstracts to jejmcclu@uwaterloo.ca using the following templates: <br/>
              <strong><a href={Latex} download>LaTeX</a><br/></strong>
              <strong><a href={Word} download>Word</a><br/></strong>
              The abstract must include your name, your supervisors name, the title of your presentation, and a maximum 1 page abstract.<br/>
              To allow sufficient time for putting together the meeting program and organizing the event, the deadline for submission of abstracts is set to November 1st, 2017.<br/>
            </div>

            <div className="page_title">
              Presentations
            </div>

            <div className="instructions_text">
              The presentations are organized into two blocks, separated by a 15 minute refreshment break and followed by lunch to facilitate discussions between research groups. The presentations follow the following format: each speaker will give a talk of approximately 10 minutes, followed by 4 minutes of questions and 1 minute for transition to the next speaker.
              <br/><br/>
              A windows laptop computer will be available for student to use with Powerpoint tested for compatability with .mp4, .avi, .wmv movie files, however to avoid possible incompatibilities, presenters are encouraged to use their own laptops for their talks. The presentation room will be available starting at 8:30am in order to allow presenters to test their presentations if necessary.
            </div>
          </div>

          <div className="instructions_image">
            <img src={image1} alt="sidebar instructions"/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    darkSetting: state.pages.darkSetting,
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(Instructions);
