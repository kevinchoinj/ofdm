import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Mobilebutton from './Mobilebutton';
import Menuopt from './Menuoption';
import Mobilepanel from './Mobilepanel';

export default class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      displaymobile:"",
      displaywide:"",

      lineanim1: "none",
      lineanim2: "none",
      lineanim3: "14px",
      line1fromtop: "29px",
      line2fromtop: "38px",

      mobileoffset:"-100vw",
    }
    this.checkscreen = this.checkscreen.bind(this);

    this.togglemenu = this.togglemenu.bind(this);

    this.gotop = this.gotop.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', this.checkscreen);
    this.checkscreen();
  }

  checkscreen(){
    if (window.innerWidth > 992){
      this.setState({
        displaywide:"block",
        displaymobile:"none",
      });
    }
    else{
      this.setState({
        displaywide:"none",
        displaymobile:"block",
      });
    }
  }

  togglemenu(){
    if (this.state.lineanim3 === "14px"){
      this.setState({
         lineanim1: "rotate(45deg)",
         lineanim2: "rotate(-45deg)",
         lineanim3: "0px",
         line1fromtop: "34px",
         line2fromtop: "34px",
         mobileoffset:"0px",
      });
    }
    else if(this.state.lineanim3 ==="0px"){
      this.setState({
         lineanim1: "none",
         lineanim2: "none",
         lineanim3: "14px",
         line1fromtop: "29px",
         line2fromtop: "38px",
         mobileoffset:"-100vw",
      });
    }
  }

  gotop(){
    window.scrollTo(0, 0);
  }
  render(){
    const menucontainer={
      position:"fixed",

      height:this.props.menuheight,
      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",

      WebkitBoxShadow: "0 2px 5px rgba(0,0,0,.4)",
			MozBoxShadow: "0 2px 5px rgba(0,0,0,.4))",
      BoxShadow: "0 2px 5px rgba(0,0,0,.4)",
      backgroundColor:"#fff",

      color:"#1a1a1a",
      fontFamily:"Roboto, Helvetica",
      zIndex:"4",
    }
    const title={
      textAlign:"center",
      marginTop:"25px",
      fontSize:"24px",

      top:this.props.offset,
      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",

      color:"#1a1a1a",
      fontFamily:"Roboto, Helvetica",

    }
    const menuoption={
      display: this.state.displaywide,
      textAlign:"center",
      marginTop:"30px",
      fontSize:"16px",

      top:this.props.offset,
      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",

      fontWeight:"bold",

    }

    return(
      <div>
        
    <Row>
      <Col md={10} mdOffset={1} sm={12} smOffset={0} xs={12} xsOffset={0} style={menucontainer}>
        <Row>
        <Link to='/'><Col md={3} mdOffset={0} smOffset={1} xsOffset={1} style={title} onClick={this.gotop}><Menuopt underwidth="80px">TITLE</Menuopt></Col></Link>
        <Col md={9} sm={9} xs={9}>
          <Link to='/page1'><Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="62px">Option1</Menuopt></Col></Link>
          <Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="62px">Option2</Menuopt></Col>
          <Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="62px">Option3</Menuopt></Col>
          <Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="62px">Option4</Menuopt></Col>
        </Col>


        <Col md={1} sm={1} xs={1}>
      
        </Col>
        </Row>
      </Col>
      <Mobilebutton
						toggler={this.togglemenu}

						line1rot={this.state.lineanim1}
						line2rot={this.state.lineanim2}
						line3rot={this.state.lineanim3}
						line1top={this.state.line1fromtop}
            line2top={this.state.line2fromtop}
            
            display={this.state.displaymobile}
          />

          <Mobilepanel mobileoffset={this.state.mobileoffset}/>
    </Row>
    </div>
    );
  }
}