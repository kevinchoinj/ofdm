import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

class Background extends React.Component{
  render(){

    const {
      darkSetting,
    } = this.props;

    const backgroundName = classNames({
      'background': true,
      'background--dark': darkSetting,
    });


    return(
      <div className={backgroundName}>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    darkSetting: state.pages.darkSetting,
  }),
  dispatch => ({
  }),
)(Background);
