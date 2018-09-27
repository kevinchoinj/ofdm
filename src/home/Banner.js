import React from 'react';
import {connect} from 'react-redux';

class Banner extends React.Component{
  render(){
    const {
      scrollAmount,
    } = this.props;

    let scrollValue = scrollAmount;

    if (scrollValue > 170) {
      scrollValue = "170px";
    }

    const banner={
      top: scrollValue,
      backgroundImage: 'url('+this.props.bgimage+')',
    }

    return(
      <div className="banner_container">
        <div style={banner} className="banner"/>
        <div className="banner_text">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    darkSetting: state.pages.darkSetting,
    scrollAmount: state.scroll.scrollAmount,
  }),
  dispatch => ({
  }),
)(Banner);