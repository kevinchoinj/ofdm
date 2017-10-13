import React from "react";

export default class Yearsect extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
      maxheight:"100vh"
 
    }
    this.toggledisplay = this.toggledisplay.bind(this);
	}

  toggledisplay(){
    if (this.state.maxheight ==="100vh"){
      this.setState({
        maxheight:"0px",
      })
    }
    else{
      this.setState({
        maxheight:"100vh",
      })
    }
  }

  render(){

    const title={
      fontSize:"40px",
      cursor:"pointer",
    }

    const sub={
      maxHeight: this.state.maxheight,
      overflow:"hidden",
      transition: "0.5s linear",

    }
	  return(

      <div>
        <div style={title} onClick={this.toggledisplay}> {this.props.year}</div>

      <div style={sub}>
       {this.props.children}
        </div>




      </div>
	  );
  }
}
