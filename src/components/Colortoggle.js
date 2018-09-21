import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import classNames from 'classnames';

class Colortoggle extends React.Component{
  toggleDark = (darkSetting) => {
    this.props.pagesActions.toggleDark(!darkSetting);
  }
  render(){

    const {
      darkSetting,
    } = this.props;

    const buttonName = classNames({
      'toggle_button': true,
      'toggle_button--dark': darkSetting,
    });

    const innerName = classNames({
      'toggle_inner': true,
      'toggle_inner--dark': darkSetting,
    });

    return(
      <div className="toggle_wrapper" onClick={()=>this.toggleDark(darkSetting)}>
        <div className={buttonName}>
          <div className={innerName}/>
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
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(Colortoggle);
