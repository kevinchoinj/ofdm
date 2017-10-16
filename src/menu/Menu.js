import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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

      mobileopac1:"0",
      mobileopac2:"0",
      mobileopac3:"0",
      mobileopac4:"0",
      mobileopac5:"0",

      mobileoffset1:"-100%",
      mobileoffset2:"-100%",
      mobileoffset3:"-100%",
      mobileoffset4:"-100%",
      mobileoffset5:"-100%",
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
      setTimeout(function() { this.setState({mobileopac1:"1", mobileoffset1:"0px"}); }.bind(this), 0);
      setTimeout(function() { this.setState({mobileopac2:"1", mobileoffset2:"0px"}); }.bind(this), 150);
      setTimeout(function() { this.setState({mobileopac3:"1", mobileoffset3:"0px"}); }.bind(this), 300);
      setTimeout(function() { this.setState({mobileopac4:"1", mobileoffset4:"0px"}); }.bind(this), 450);
      setTimeout(function() { this.setState({mobileopac5:"1", mobileoffset5:"0px"}); }.bind(this), 600);
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

         mobileopac1:"0",
         mobileopac2:"0",
         mobileopac3:"0",
         mobileopac4:"0",
         mobileopac5:"0",

         mobileoffset1:"-100%",
         mobileoffset2:"-100%",
         mobileoffset3:"-100%",
         mobileoffset4:"-100%",
         mobileoffset5:"-100%",
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
        {this.props.color2==="rgba(26,26,26,1)"?
        <img src={logoimage} style={logostyle}/>
        :
        <img src={logowhite} style={logostyle}/>
      }
        
        </Col></Link>
        <Col md={9} sm={9} xs={9}>
        {
        this.props.currentpage==="home" ? 
        <Link to='/'><Col md={2} mdOffset={1} style={menuoption} onClick={this.gotop}><Menuopt underwidth="40px" color1={this.props.color1} color2={this.props.color2}>Home<div style={indic}></div></Menuopt></Col></Link>
        :
        <Link to='/'><Col md={2} mdOffset={1} style={menuoption} onClick={this.gotop}><Menuopt underwidth="40px" color1={this.props.color1} color2={this.props.color2}>Home</Menuopt></Col></Link>
        }
        {
        this.props.currentpage==="instructions" ? 
          <Link to='/instructions'><Col md={2} style={menuoption} onClick={this.gotop}><Menuopt underwidth="86px" color1={this.props.color1} color2={this.props.color2}>Instructions<div style={indic}></div></Menuopt></Col></Link>
          :
          <Link to='/instructions'><Col md={2} style={menuoption} onClick={this.gotop}><Menuopt underwidth="86px" color1={this.props.color1} color2={this.props.color2}>Instructions</Menuopt></Col></Link>
        }
                {
          this.props.currentpage==="schedule"?
          <Link to='/schedule'><Col md={2} style={menuoption} onClick={this.gotop}><Menuopt underwidth="70px" color1={this.props.color1} color2={this.props.color2}>Schedule<div style={indic}></div></Menuopt></Col></Link>
          :
          <Link to='/schedule'><Col md={2} style={menuoption} onClick={this.gotop}><Menuopt underwidth="70px" color1={this.props.color1} color2={this.props.color2}>Schedule</Menuopt></Col></Link>
        }
        {
          this.props.currentpage==="past"?
          <Link to='/past'><Col md={2} style={menuoption} onClick={this.gotop}><Menuopt underwidth="40px" color1={this.props.color1} color2={this.props.color2}>Past<div style={indic}></div></Menuopt></Col></Link>
          :
          <Link to='/past'><Col md={2} style={menuoption} onClick={this.gotop}><Menuopt underwidth="40px" color1={this.props.color1} color2={this.props.color2}>Past</Menuopt></Col></Link>
        }
        {
          this.props.currentpage==="keynotes"?
          <Link to='/keynotes'><Col md={2} style={menuoption} onClick={this.gotop}><Menuopt underwidth="70px" color1={this.props.color1} color2={this.props.color2}>Keynotes<div style={indic}></div></Menuopt></Col></Link>
          :
          <Link to='/keynotes'><Col md={2} style={menuoption} onClick={this.gotop}><Menuopt underwidth="70px" color1={this.props.color1} color2={this.props.color2}>Keynotes</Menuopt></Col></Link>
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

          <Mobilepanel 
          mobileoffset={this.state.mobileoffset} 
          toggler={this.togglemenu} 
          gotop={this.gotop}
          mobileopac1={this.state.mobileopac1}
          mobileopac2={this.state.mobileopac2}
          mobileopac3={this.state.mobileopac3}
          mobileopac4={this.state.mobileopac4}
          mobileopac5={this.state.mobileopac5}
          mobileoffset1={this.state.mobileoffset1}
          mobileoffset2={this.state.mobileoffset2}
          mobileoffset3={this.state.mobileoffset3}
          mobileoffset4={this.state.mobileoffset4}
          mobileoffset5={this.state.mobileoffset5}
          />
    </Row>
    </div>
    );
  }
}