import React from "react";
import SectionButton from 'past/SectionButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';

class Keynotesect extends React.Component{

  toggleDisplay = (key) => {
    this.props.pagesActions.toggleSection(key);
  }

  render(){
    const {
      year,
      sectionsDisplayed,
    } = this.props;

    const sub={
      maxHeight: sectionsDisplayed[year] ? this.refs.expand.scrollHeight : "0px",
    }

	  return(
      <div>
        <div className="keynotes_header" onClick={()=>this.props.toggleDisplay(year)}>
          <strong>
            {year}
          </strong>
          <SectionButton
						name={year}
          />
        </div>

        <div
          style={sub}
          ref="expand"
          className="keynotes_text"
        >
          {this.props.children}
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
)(Keynotesect);
