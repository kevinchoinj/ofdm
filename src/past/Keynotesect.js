import React from "react";
import Expbutton from './Expbutton';
import {Row, Col} from 'react-bootstrap';
export default class Keynotesect extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
      maxheight:"0px",

      lineanim1: "rotate(45deg)",
      lineanim2: "rotate(-45deg)",
      lineanim3: "0px",
      line1fromtop: "34px",
      line2fromtop: "34px",
    }
    this.toggledisplay = this.toggledisplay.bind(this);
  }
  
  componentDidMount(){
    this.toggledisplay();
  }

  toggledisplay(){
    if (this.state.maxheight ==="0px"){
      this.setState({
        maxheight:this.refs.expand.scrollHeight,
        lineanim1: "rotate(45deg)",
        lineanim2: "rotate(-45deg)",
        lineanim3: "0px",
        line1fromtop: "34px",
        line2fromtop: "34px",
      })
    }
    else{
      this.setState({
        maxheight:"0px",
        lineanim1: "none",
        lineanim2: "none",
        lineanim3: "14px",
        line1fromtop: "29px",
        line2fromtop: "38px",
      })
    }
  }

  render(){

    const title={
      fontSize:"40px",
      cursor:"pointer",
     position:"relative",
     marginBottom:"25px",

     color:this.props.color2,
    }

    const sub={
      maxHeight: this.state.maxheight,
      overflow:"hidden",
			WebkitTransition: ".5s ease-in",
			MozTransition: ".5s ease-in",
			OTransition: ".5s ease-in",
      transition:".5s ease-in",

        fontFamily:"Roboto, Helvetica",
        fontSize:"16px",
        letterSpacing:".5px",
        lineHeight:"150%",

        color:this.props.color2,

    }

	  return(

      <div>
        <Row>
        <Col md={10} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <div style={title} onClick={this.toggledisplay}> 
        <strong>{this.props.year}</strong> 
        <Expbutton
						toggler={this.toggledisplay}

						line1rot={this.state.lineanim1}
						line2rot={this.state.lineanim2}
						line3rot={this.state.lineanim3}
						line1top={this.state.line1fromtop}
            line2top={this.state.line2fromtop}
            
          />
           </div>
       
        

      <div style={sub} ref="expand">
       {this.props.children}
        </div>
      </Col>
      </Row>


      </div>
	  );
  }
}
