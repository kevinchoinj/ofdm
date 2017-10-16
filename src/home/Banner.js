import React from 'react';
import {Col} from 'react-bootstrap';

export default class Banner extends React.Component{

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
      position:"absolute",
      top:this.state.offsettop,
      width:"100%",
      background: 'url('+this.props.bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
      backgroundSize: "cover",
      height: "calc(100vh - 170px)",

      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",
      opacity: this.props.opac,
      pointerEvents:this.props.pointerevents,
      zIndex:"2",
    }

    const text={
      height:"170px",
      fontSize:"40px",
      position:"absolute",
      top:"calc(100vh - 110px)",
      opacity: this.props.opac,
      pointerEvents:this.props.pointerevents,
      width:"100%",
      fontWeight:"bold",
      fontFamily:"Roboto, Helvetica",

      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",

      zIndex:"1",

      color:this.props.color2,
    }

    return(
      <div>
      <div style={banner}>
      </div>

        
      <div style={text}>
      <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
      {this.props.children}
      </Col>
      </div>
      </div>
    );
  }
}