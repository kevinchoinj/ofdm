import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import logoimage from '../images/englogoblk.png';
import logowhite from '../images/englogo.png';
import classNames from 'classnames';

class Menu extends React.Component{

  goTop = () => {
    var scrollStep = -window.scrollY / (500 / 15),
      scrollInterval = setInterval(function(){
      if ( window.scrollY !== 0 ) {
          window.scrollBy( 0, scrollStep );
      }
      else clearInterval(scrollInterval);
  },15);
  }

  render(){

    const {
      darkSetting,
    } = this.props;

    const wrapperName = classNames({
      'menu_wrapper': true,
      'menu_wrapper--dark': darkSetting,
    });

    return(
      <div className={wrapperName}>

        <div className="menu_title"  onClick={this.goTop}>
        <Link to='/' className="menu_logo">
          <img src={logoimage} className="menu_logo" alt="logo"/>
          </Link>
        </div>

        <div className="menu_option__wrapper"  onClick={this.goTop}>
          <Link to='/' className="menu_link">
            <div className="menu_option">
              <div className="menu_option__text">
                Home
                <div className="menu_option__under"/>
              </div>
            </div>
          </Link>
        </div>

        <div className="menu_option__wrapper"  onClick={this.goTop}>
          <Link to='/instructions' className="menu_link">
            <div className="menu_option">
              <div className="menu_option__text">
                Instructions
                <div className="menu_option__under"/>
              </div>
            </div>
          </Link>
        </div>

        <div className="menu_option__wrapper"  onClick={this.goTop}>
          <Link to='/schedule' className="menu_link">
            <div className="menu_option">
              <div className="menu_option__text">
              Schedule
                <div className="menu_option__under"/>
              </div>
            </div>
          </Link>
        </div>

        <div className="menu_option__wrapper"  onClick={this.goTop}>
          <Link to='/past' className="menu_link">
            <div className="menu_option">
              <div className="menu_option__text">
              Past
                <div className="menu_option__under"/>
              </div>
            </div>
          </Link>
        </div>

        <div className="menu_option__wrapper"  onClick={this.goTop}>
          <Link to='/keynotes' className="menu_link">
            <div className="menu_option">
              <div className="menu_option__text">
              Keynotes
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
)(Menu);
