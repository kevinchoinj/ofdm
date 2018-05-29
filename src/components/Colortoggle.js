import React from 'react';
export default class Colortoggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      offset:"5px",
    }
    this.togglethis = this.togglethis.bind(this);
  }

  togglethis(){
    if (this.props.color1 === "rgba(255,255,255,1)"){
      this.setState({
        offset: "calc(100% - 25px)",
      });
    }
    else{
      this.setState({
        offset: "5px",
      });
  }
}
  render(){

    const wrapper={
      position:"fixed",
      bottom:"15px",
      right:"15px",
      zIndex:"101",
      cursor:"pointer",
    }
    const btn={
      position:"relative",
      height:"30px",
      width:"65px",
      backgroundColor:this.props.color1,
      
      borderRadius:"35px",
      border:"3px solid "+this.props.color2,
    }

    const inner={
      width:"20px",
      height:"20px",
      position:"absolute",
      backgroundColor:this.props.color2,
      borderRadius:"50%",
      top:"2px",
      right:this.state.offset,
      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",
    }
    return(
      <div style={wrapper} onClick={this.togglethis}>
      <div style={btn} onClick={this.props.togglecolors}>
        <div style={inner}>
        </div>
    
    
      </div>
      </div>
    );
  }
}