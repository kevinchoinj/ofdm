import React from "react";
import Expbutton from './Expbutton';
import {Row, Col} from 'react-bootstrap';
export default class Yearsect extends React.Component{

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
    }

    const sub={
      maxHeight: this.state.maxheight,
      overflow:"hidden",
			WebkitTransition: ".5s ease-in",
			MozTransition: ".5s ease-in",
			OTransition: ".5s ease-in",
      transition:".5s ease-in",

    }
    const sideinfo={
      maxHeight: this.state.maxheight,
      overflow:"hidden",
      WebkitTransition: ".5s ease-in",
			MozTransition: ".5s ease-in",
			OTransition: ".5s ease-in",
      transition:".5s ease-in",
    }
	  return(

      <div>
        <Row>
        <Col md={6} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1}>
        <div style={title} onClick={this.toggledisplay}> {this.props.year} 
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
      <Col md={4} mdOffset={1} sm={10} smOffset={1} xs={10} xsOffset={1} style={sideinfo}>
          <strong>Seminar Info</strong><br/>
          <strong>Organizer: </strong>
          {this.props.organizer}<br/>
          <strong> Date: </strong>
          {this.props.date}<br/>
          <strong>Time:</strong>
          {this.props.time}<br/>
          <strong>Place: </strong>
          {this.props.place}<br/>
      </Col>
      </Row>


      </div>
	  );
  }
}
