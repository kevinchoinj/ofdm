import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import img1 from '../images/1.png';

import Mobilebutton from './Mobilebutton';
import Menuopt from './Menuoption';
import Mobilepanel from './Mobilepanel';

import logoimage from '../images/englogoblk.png';
import logowhite from '../images/englogo.png';

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

      btncolor:"#1a1a1a",
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
         btncolor:"#fff",
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
         btncolor:"#1a1a1a",
      });
    }
  }

  gotop(){
    
    var scrollStep = -window.scrollY / (500 / 15),
    
    scrollInterval = setInterval(function(){
    if ( window.scrollY !== 0 ) {
        window.scrollBy( 0, scrollStep );
    }
    else clearInterval(scrollInterval); 
},15);
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

      
      backgroundColor:this.props.color1,
      fontFamily:"Roboto, Helvetica",
      zIndex:"4",
    }
    const title={
      textAlign:"left",

      top:this.props.offset,
      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",


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

    const menuoptionselect={
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

      background: 'url('+img1+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
      backgroundSize: "cover",
    }

    const logostyle={
      maxWidth:"100%",
      maxHeight:"80px",
    }
    const indic={
      top:"0px",
      position:"absolute",
      width:"100%",
      borderRight:"8px solid transparent",
      borderLeft:"8px solid "+this.props.color2,
      borderTop:"8px solid transparent",
      borderBottom: "8px solid transparent",
    }

    return(
      <div>
        
    <Row>
      <Col md={10} mdOffset={1} sm={12} smOffset={0} xs={12} xsOffset={0} style={menucontainer}>
        <Row>
        <Link to='/'><Col md={3} mdOffset={0} sm={3} smOffset={0} xs={12} xsOffset={0} style={title} onClick={this.gotop}>
        {this.props.color2==="rgba(255,255,255,1)"?
        <img src={logowhite} style={logostyle}/>
        :
        <img src={logoimage} style={logostyle}/>
      }
        
        </Col></Link>
        <Col md={9} sm={9} xs={9}>
        {
        this.props.currentpage==="home" ? 
        <Link to='/'><Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="40px" color1={this.props.color1} color2={this.props.color2}>Home<div style={indic}></div></Menuopt></Col></Link>
        :
        <Link to='/'><Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="40px" color1={this.props.color1} color2={this.props.color2}>Home</Menuopt></Col></Link>
        }
        {
        this.props.currentpage==="instructions" ? 
          <Link to='/instructions'><Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="62px" color1={this.props.color1} color2={this.props.color2}>Instructions<div style={indic}></div></Menuopt></Col></Link>
          :
          <Link to='/instructions'><Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="62px" color1={this.props.color1} color2={this.props.color2}>Instructions</Menuopt></Col></Link>
        }
        {
          this.props.currentpage==="past"?
          <Link to='/past'><Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="100px" color1={this.props.color1} color2={this.props.color2}>Past Seminars<div style={indic}></div></Menuopt></Col></Link>
          :
          <Link to='/past'><Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="100px" color1={this.props.color1} color2={this.props.color2}>Past Seminars</Menuopt></Col></Link>
        }
        {
          this.props.currentpage==="keynotes"?
          <Link to='/keynotes'><Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="70px" color1={this.props.color1} color2={this.props.color2}>Keynotes<div style={indic}></div></Menuopt></Col></Link>
          :
          <Link to='/keynotes'><Col md={3} style={menuoption} onClick={this.gotop}><Menuopt underwidth="70px" color1={this.props.color1} color2={this.props.color2}>Keynotes</Menuopt></Col></Link>
        }
          
          
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
            btncolor={this.state.btncolor}
            color1={this.props.color1} color2={this.props.color2}
          />

          <Mobilepanel mobileoffset={this.state.mobileoffset} toggler={this.togglemenu} gotop={this.gotop}/>
    </Row>
    </div>
    );
  }
}