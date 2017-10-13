import React from "react";
import Expbutton from './Expbutton';
export default class Yearsect extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
      maxheight:"100vh",

      lineanim1: "rotate(45deg)",
      lineanim2: "rotate(-45deg)",
      lineanim3: "0px",
      line1fromtop: "34px",
      line2fromtop: "34px",
    }
    this.toggledisplay = this.toggledisplay.bind(this);
	}

  toggledisplay(){
    if (this.state.maxheight ==="100vh"){
      this.setState({
        maxheight:"0px",
        lineanim1: "none",
        lineanim2: "none",
        lineanim3: "14px",
        line1fromtop: "29px",
        line2fromtop: "38px",
      })
    }
    else{
      this.setState({
        maxheight:"100vh",
        lineanim1: "rotate(45deg)",
        lineanim2: "rotate(-45deg)",
        lineanim3: "0px",
        line1fromtop: "34px",
        line2fromtop: "34px",
      })
    }
  }

  render(){

    const title={
      fontSize:"40px",
      cursor:"pointer",
     position:"relative",
    }

    const sub={
      maxHeight: this.state.maxheight,
      overflow:"hidden",
      transition: "0.5s linear",

    }
	  return(

      <div>
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
       
        

      <div style={sub}>
       {this.props.children}
        </div>




      </div>
	  );
  }
}
