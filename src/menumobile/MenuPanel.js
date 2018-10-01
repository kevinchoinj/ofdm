import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuPanel extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'twelve_menu_panel',
      {
        'twelve_menu_panel--display':menuDisplay
      }
    );

    return(
      <div className = {menuClassName}>
        <div className="twelve_menu_panel_overlay"/>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.menu.menuDisplay,
  }),
  dispatch => ({
  }),
)(MenuPanel);
