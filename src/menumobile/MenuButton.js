import React from "react";
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';

class MenuButton extends React.Component{
	toggleMenu = () => {
    this.props.menuActions.toggleMenu(!this.props.menuDisplay);
  }
  render(){
    const {
      menuDisplay,
      scrollAmount,
    } = this.props;

    const containerName = classNames({
      'twelve_menu_button': true,
      'twelve_menu_button--scrolled': scrollAmount > (window.innerHeight*0.5),
    });

    const buttonName = classNames({
      'twelve_menu_button__container': true,
      'twelve_menu_button__container--displayed': menuDisplay,
      'twelve_menu_button__container--scrolled': scrollAmount > (window.innerHeight*0.5),
    });

	  return(
      <div
        onClick = {this.toggleMenu}
        className = {containerName}
      >
        <div className = {buttonName}>
          <span className = "twelve_menu_button__line"/>
          <span className = "twelve_menu_button__line"/>
          <span className = "twelve_menu_button__line"/>
        </div>
			</div>
		)
	}
}

export default connect(
  (state, ownProps) => ({
    menuDisplay: state.menu.menuDisplay,
    scrollAmount:state.scroll.scrollAmount,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuButton);