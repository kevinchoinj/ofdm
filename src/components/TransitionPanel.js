import React, { Component } from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

class TransitionPanel extends Component {
  render() {
    const {
      transitionStatus,
      darkSetting,
    } = this.props;

    const topPanelName = classNames(
      'fourteen_panel__top',
      {
        'fourteen_panel__top--dark': darkSetting,
        'fourteen_panel__top--display': transitionStatus === "start",
        'fourteen_panel__top--hide': transitionStatus === "end",
      }
    );
    return (
      <div>
        <div className={topPanelName}>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    darkSetting: state.pages.darkSetting,
    transitionStatus: state.transition.transitionStatus,
  }),
  dispatch => ({
  }),
)(TransitionPanel);
