import React from "react";
import SectionButton from 'past/SectionButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';

class YearSection extends React.Component{

  toggleDisplay = (key) => {
    this.props.pagesActions.toggleSection(key);
  }

  render(){
    const {
      organizer,
      year,
      date,
      time,
      place,
      sectionsDisplayed,
      children,
    } = this.props;

    const sub={
      maxHeight: sectionsDisplayed[date] ? this.refs.expand.scrollHeight : "0px",
    }

	  return(

      <div className="past_wrapper">
        <div className="past_left">
          <div className="page_title pointer" onClick={()=>this.props.toggleDisplay(date)}>
            {year}
            <SectionButton
              name={date}
            />
          </div>

          <div
            style={sub}
            ref="expand"
            className="keynotes_text"
          >
            {children}
          </div>
        </div>

        <div className="past_right">
          <strong>
            {year}
          </strong><br/>
          <strong>
            Organizer:
          </strong>
          {organizer}<br/>
          <strong> Date: </strong>
          {date}<br/>
          <strong>Time:</strong>
          {time}<br/>
          <strong>Place: </strong>
          {place}<br/>
        </div>

      </div>
	  );
  }
}

export default connect(
  (state, ownProps) => ({
    sectionsDisplayed: state.pages.sectionsDisplayed,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(YearSection);
