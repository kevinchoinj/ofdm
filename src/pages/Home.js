import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import * as scrollActions from 'actions/scroll';
import Scrollbar from 'smooth-scrollbar';
import image1 from 'images/4.png';
import Banner from 'home/Banner';
import bannerImage from 'images/uwloo2.jpg';
import classNames from 'classnames';
import Footer from 'components/Footer';

class Home extends React.Component{

	componentDidMount() {
    this.props.pagesActions.setPage("Home");
		this.props.scrollActions.checkScroll(0);
		const scrollbar = Scrollbar.init(document.querySelector('#home_wrapper'), {
			alwaysShowTracks: true,
			syncCallbacks: true,
		});
		scrollbar.addListener(({ offset }) => {
      this.props.scrollActions.checkScroll(offset.y);
    });
  }

  render(){

    const {
      darkSetting,
    } = this.props;

    const wrapperName = classNames({
      'text_color': true,
      'text_color--dark': darkSetting,
    });

    return(
      <div id="home_wrapper" className={wrapperName}>
        <Banner
          bgimage={bannerImage}
        >
          Thermo-Fluids Fall Meeting
        </Banner>
        <div className="home_body">
          <div className="home_left">
            <div className="home_title">
              2017
            </div>
            <div>
              <strong>Date:</strong><br/>
              Thursday, November 9th, 2017
              <br/><br/>
              <strong>Time:</strong><br/>
              9:00am - 1:30pm
              <br/><br/>
              The department of Mechanical and Mechatronics Engineering Thermo-Fluids Fall Meeting brings together research groups working in thermo-fluids to give the opportunity for students to elevate the profile of their research, broaden their perspective in the field of thermo-fluids and generate discussion and interaction between research groups. Refreshments will be provided before and during the meeting, and lunch will be provided following the presentations.
              All thermo-fluids research groups are invited to submit abstracts and present their research at the meeting. Generally, a maximum of two presentations are allowed from each thermo-fluids research group to maintain diversity. A total of 10 presentation slots are available, with preference given to those who submitted abstracts first.
            </div>
          </div>

          <div className="home_right">
            <div className="page_title">
              Deadlines
            </div>
            <br/><br/>
            <div>
              <strong>Call for abstracts: </strong><br/>
              October 16th, 2017<br/>
              <strong>Abstract submission deadline: </strong><br/>
              November 1st, 2017<br/>
              <strong>Notification of acceptance: </strong> <br/>
              November 3rd, 2017<br/>
              <strong>Meeting data: </strong><br/>
              Thursday, November 9th, 2017<br/>
              <strong>Time: </strong><br/>
              9:00am - 1:30pm<br/>
              <strong>Location: </strong><br/>
              E5-2004<br/>
              <strong>Contact: </strong>
              jejmcclu@uwaterloo.ca<br/>
            </div>
          </div>
        </div>

        <div className="home_under">
          <img src={image1} className="home_image" alt="home"/>
        </div>

        <Footer/>
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
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(Home);
