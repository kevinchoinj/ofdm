import React from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';

class Banner extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      offsettop:"0",
    }
    this.movebanner=this.movebanner.bind(this)
  }
   /*fades in the banner*/
   componentDidMount() {
    window.addEventListener("scroll", this.movebanner);
    window.addEventListener("resize", this.movebanner);
    this.movebanner();
   }

   movebanner(){
     let supportPageOffset = window.pageXOffset !== undefined;
     let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
     let scroll = {
        x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
        y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
     };
     try{
       if (scroll.y <170){
         this.setState({
           offsettop: scroll.y
         });
       }
      else{
         this.setState({
           offsettop:"170px"
         });
       }
     }
     catch(err) {
   }
 }


  render(){
    const banner={
      top:this.state.offsettop,
      backgroundImage: 'url('+this.props.bgimage+')',
      opacity: this.props.opac,
      pointerEvents:this.props.pointerevents,
    }

    const text={
      opacity: this.props.opac,
      pointerEvents:this.props.pointerevents,
    }

    return(
      <div>
        <div style={banner} className="banner">
        </div>


        <div style={text} className="banner_text">
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        {this.props.children}
        </Col>
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
)(Banner);