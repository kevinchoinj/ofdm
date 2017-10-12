import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Mobilebutton from './Mobilebutton';

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
    }
    this.checkscreen = this.checkscreen.bind(this);

    this.togglemenu = this.togglemenu.bind(this)
  }

  componentDidMount(){
    window.addEventListener('resize', this.checkscreen);
    this.checkscreen();
  }

  checkscreen(){
    console.log(window.innerWidth);
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
      });
    }
    else if(this.state.lineanim3 ==="0px"){
      this.setState({
         lineanim1: "none",
         lineanim2: "none",
         lineanim3: "14px",
         line1fromtop: "29px",
         line2fromtop: "38px",
      });
    }
  }

  render(){
    const menucontainer={
      position:"fixed",
      height:"80px",
      WebkitBoxShadow: "0 2px 5px rgba(0,0,0,.2)",
			MozBoxShadow: "0 2px 5px rgba(0,0,0,.2))",
      BoxShadow: "0 2px 5px rgba(0,0,0,.2)",

      color:"#1a1a1a",
    }
    const title={
      position:"absolute",
      textAlign:"center",

      top:"25px",
      fontSize:"24px",
    }
    return(
      <div>
    <Row>
      <Col md={10} mdOffset={1} sm={12} smOffset={0} xs={12} xsOffset={0} style={menucontainer}>
        <Col md={3} mdOffset={0} smOffset={1} xsOffset={1} style={title}>TITLE</Col>
        <Col md={8} sm={9} xs={9}></Col>
        <Col md={1} sm={1} xs={1}>
        
        <Mobilebutton
						toggler={this.togglemenu}

						line1rot={this.state.lineanim1}
						line2rot={this.state.lineanim2}
						line3rot={this.state.lineanim3}
						line1top={this.state.line1fromtop}
            line2top={this.state.line2fromtop}
            
            display={this.state.displaymobile}
          />
            </Col>

      </Col>
    </Row>
    </div>
    );
  }
}