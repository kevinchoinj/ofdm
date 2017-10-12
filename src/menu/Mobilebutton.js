import React from "react";

export default class Mobilebutton extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
		
		 buttoncolor: "#1a1a1a",
		 rotate:"rotate(0deg)",
 
		}
			this.hoverbutton = this.hoverbutton.bind(this)
		 this.nothoverbutton = this.nothoverbutton.bind(this)
	}
	hoverbutton(){
		this.setState({
		 buttoncolor: "#aaa",
	 });
	 if (this.props.line3rot === "0px"){
		this.setState({
			rotate:"rotate(180deg)",
		})
	 }
}

nothoverbutton(){
	this.setState({
		 buttoncolor: "#1a1a1a",
		 rotate: "rotate(0deg)",
	});

}

  render(){
		const navigate= {
			position:"fixed",
			mixBlendMode: "difference",
			zIndex: "100",
			right:"15px",
			width:"60px",
			height:"70px",
			cursor:"pointer",
			willChange: "opacity",
			transform: this.state.rotate,
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
      transition:".25s ease-out",
      
      display:this.props.display,
		}
		const menubutton={
			background: "transparent",
			color: "#fff",

		}
		const line1={
			height: "3px",
			width: "24px",
			position: "absolute",
			backgroundColor: this.state.buttoncolor,
			top:this.props.line1top,
			left: "18px",
			zIndex: "11",
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
			transition:".25s ease-out",
			WebkitTransform: this.props.line1rot,
			MozTransform: this.props.line1rot,
			OTransform: this.props.line1rot,
			transform: this.props.line1rot,
		}
		const line2={
			height: "3px",
			width: "24px",
			position: "absolute",
			backgroundColor: this.state.buttoncolor,
			top:this.props.line2top,
			left: "18px",
			zIndex: "11",
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
			transition:".25s ease-out",
			WebkitTransform: this.props.line2rot,
			MozTransform: this.props.line2rot,
			OTransform: this.props.line2rot,
			transform: this.props.line2rot,
		}
		const line3={
			height: "3px",
			width: this.props.line3rot,
			position: "absolute",
			backgroundColor: this.state.buttoncolor,
			top:"47px",
			left: "18px",
			zIndex: "11",
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
			transition:".25s ease-out",
		}

	  return(

				<div style={navigate} onClick={this.props.toggler} onMouseEnter={this.hoverbutton} onMouseLeave={this.nothoverbutton}>
					<div style={menubutton}>
					<span style={line1}></span>
					<span style={line2}></span>
					<span style={line3}></span>
					</div>
				</div>

	  );
  }
}