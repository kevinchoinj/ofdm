import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import * as scrollActions from 'actions/scroll';
import Scrollbar from 'smooth-scrollbar';
import bannerImage from 'images/uwloo5.jpg';
import Banner from 'home/Banner';
import classNames from 'classnames';
import Footer from 'components/Footer';

class Schedule extends React.Component{
	componentDidMount() {
    this.props.pagesActions.setPage("Schedule");
		this.props.scrollActions.checkScroll(0);
		const scrollbar = Scrollbar.init(document.querySelector('#schedule_wrapper'), {
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

    return (
      <div id="schedule_wrapper" className={wrapperName}>
        <Banner
          bgimage={bannerImage}
        >
          Schedule
        </Banner>

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
)(Schedule);
