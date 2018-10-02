import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import logoimage from '../images/englogoblk.png';
import logowhite from '../images/englogo.png';
import classNames from 'classnames';
import MenuOption from 'menu/MenuOption';

class Menu extends React.Component{

  render(){

    const {
      darkSetting,
      currentPage,
    } = this.props;

    const wrapperName = classNames({
      'menu_wrapper': true,
      'menu_wrapper--dark': darkSetting,
    });

    const menuValues = [
      {optionText: 'Home', optionLink: '/', selected: currentPage==="Home"},
      {optionText: 'Instructions', optionLink: '/instructions', selected: currentPage==="Instructions"},
      {optionText: 'Schedule', optionLink: '/schedule', selected: currentPage==="Schedule"},
      {optionText: 'Past', optionLink: '/past', selected: currentPage==="Past"},
      {optionText: 'Keynotes', optionLink: '/keynotes', selected: currentPage==="Keynotes"},
    ]

    return(
      <div className={wrapperName}>
        <div className="menu_title">
          <Link to='/' className="menu_logo">
            {darkSetting?
            <img src={logowhite} className="menu_logo" alt="logo"/>:
            <img src={logoimage} className="menu_logo" alt="logo"/>
            }
          </Link>
        </div>
        {menuValues.map((value, index)=>(
          <div key={index} className="menu_option__wrapper">
            <MenuOption
              optionText={value.optionText}
              optionLink={value.optionLink}
              selected={value.selected}
            />
          </div>
        ))}

      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    darkSetting: state.pages.darkSetting,
    currentPage: state.pages.currentPage,
  }),
  dispatch => ({
  }),
)(Menu);
