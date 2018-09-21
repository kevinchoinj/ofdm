import React from 'react';
import { connect } from 'react-redux';
import darkimage from '../images/englogoblk.png';
import lightimage from '../images/englogo.png';

class Backdrop extends React.Component{
  render(){

    const {
      darkSetting,
    } = this.props;

    return(
      <div className="backdrop">
        <div className="backdrop_image">
          {darkSetting ?
            <img src={lightimage} className="backdrop_image" alt="backdrop"/>
            :
            <img src={darkimage} className="backdrop_image" alt="backdrop"/>
        }
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
)(Backdrop);
