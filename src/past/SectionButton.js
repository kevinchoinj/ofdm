import React from "react";
import classNames from 'classnames';
import {connect} from 'react-redux';

class SectionButton extends React.Component{
  render(){
    const {
			sectionsDisplayed,
			name,
    } = this.props;

    const buttonName = classNames({
      'section_button__container': true,
      'section_button__container--displayed': sectionsDisplayed[name],
    });
	  return(
      <div
        onClick = {this.toggleMenu}
        className = "section_button"
      >
        <div className = {buttonName}>
          <span className = "section_button__line"/>
          <span className = "section_button__line"/>
          <span className = "section_button__line"/>
        </div>
			</div>
		)
	}
}

export default connect(
  (state, ownProps) => ({
		sectionsDisplayed: state.pages.sectionsDisplayed,
  }),
  dispatch => ({
  }),
)(SectionButton);