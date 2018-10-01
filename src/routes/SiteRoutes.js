import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as transitionActions from 'actions/transition';

import Home from 'pages/Home';
import Instructions from 'pages/Instructions';
import Past from 'pages/Past';
import Keynotes from 'pages/Keynotes';
import Schedule from 'pages/Schedule';

import Menu from 'menu/Menu';
import MenuMobile from 'menumobile/MenuWrap';

import Backdrop from 'components/Backdrop';
import Background from 'components/Background';
import ColorToggle from 'components/Colortoggle';
import Preload from 'components/Preload';

import TransitionPanel from 'components/TransitionPanel';

class SiteRoutes extends Component {

  componentDidMount(){
    let currentName = this.props.location.pathname;
    this.props.transitionActions.loadContent(currentName, true);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {

      this.props.transitionActions.startTransition("start");

      let currentName = this.props.location.pathname;
      let nextName = nextProps.location.pathname;

      setTimeout(function(){
        this.props.transitionActions.startTransition("end");
        this.props.transitionActions.loadContent(currentName, false);
        this.props.transitionActions.loadContent(nextName, true);
      }.bind(this), 500);
      setTimeout(function(){
        this.props.transitionActions.startTransition("reset");
        this.props.transitionActions.loadContent(currentName, false);
        this.props.transitionActions.loadContent(nextName, true);
      }.bind(this), 1000);
    } else if (this.props.location === nextProps.location) {
    }
  }

  render() {

    const {
      loadedContent,
    } =this.props;


    return (
      <div>
        <Preload/>
        <Background/>
        <Backdrop/>

        <Menu/>
        <MenuMobile/>

        {loadedContent["/"]?
        <Home />:null}
        {loadedContent["/instructions"]?
        <Instructions/>:null}
        {loadedContent["/past"]?
        <Past/>:null}
        {loadedContent["/keynotes"]?
        <Keynotes/>:null}
        {loadedContent["/schedule"]?
        <Schedule/>:null}

        <ColorToggle/>
        <TransitionPanel/>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    loadedContent: state.transition.loadedContent,
    transitionStatus: state.transition.transitionStatus,

  }),
  dispatch => ({
    transitionActions: bindActionCreators(transitionActions, dispatch),
  }),
)(SiteRoutes);
