import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';

class Schedule extends React.Component{
  componentDidMount(){
    this.props.pagesActions.setPage("Schedule");
  }
  render(){
    return null;
  }
}

export default connect(
  (state, ownProps) => ({
    darkSetting: state.pages.darkSetting,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(Schedule);
