import React from 'react';
import {Link} from 'react-router-dom';

import {Row, Col} from 'react-bootstrap';

export default class Menuoption extends React.Component{
constructor(props){
  super(props);
  this.state=({
    menudisplay:"block"
  })
  this.checkresize = this.checkresize.bind(this)
}

componentDidMount(){
  window.addEventListener('resize', this.checkresize);
  this.checkresize();
}

checkresize(){
  if (window.innerWidth < 992){
    this.setState({
      menudisplay: "block"
    })
  }
  if (window.innerWidth > 992){
    this.setState({
      menudisplay: "none"
    })
  }
}



  render(){
    const panel={
      display:this.state.menudisplay,
      width:"100vw",
      height:"100vh",
      backgroundColor:"rgba(0,0,0,.8)",
      right: this.props.mobileoffset,
      position:"fixed",
      top:"0px",

      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",

      zIndex:"6",
      paddingTop:"100px",

    }
    const mobileoption={
      color:"#fff",
      fontFamily:"Roboto, Helvetica",
      fontSize:"36px",
      letterSpacing:".5px",
      lineHeight:"200%",

    }
    return(
      <div style={panel}>
      <Row>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <Link to='/'><div style={mobileoption}>Home</div></Link>
        <Link to='/instructions'><div style={mobileoption}>Instructions</div></Link>
        <Link to='/past'><div style={mobileoption}>Past Seminars</div></Link>
        <Link to='/keynotes'><div style={mobileoption}>Keynotes</div></Link>
        </Col>
       </Row>
      </div>
    );
  }
}