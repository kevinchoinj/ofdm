import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

class MenuOption extends React.Component{
  render(){

    const {
      selected,
      optionText,
      optionLink,
    } = this.props;

    const indicatorName = classNames({
      'menu_indicator': true,
      'menu_indicator--selected': selected,
    });

    return(
      <div className="menu_option__container">
        <div className="menu_indicator__wrapper">
          <div className={indicatorName}/>
        </div>
        <div>
          <Link to={optionLink} className="menu_link">
            <div className="menu_option">
              <div className="menu_option__text">
                {optionText}
                <div className="menu_option__under"/>
              </div>
            </div>
          </Link>
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
  }),
)(MenuOption);
