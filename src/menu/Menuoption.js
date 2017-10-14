import React from 'react';

export default class Menuoption extends React.Component{
constructor(props){
  super(props);
  this.state=({
    color:"#1a1a1a",
    width: "0px",
  })
  this.hover = this.hover.bind(this)
  this.leave = this.leave.bind(this)
}

hover(){
  if (window.innerWidth > 992){
  this.setState({
    color:"#35465c",
    width:this.props.underwidth,
  });
}
}

leave(){
  this.setState({
    color:"#1a1a1a",
    width:"0px",
  });
}
  render(){
    const option={
      color:this.props.color2,


    }

    const under={
			height: "2px",
			width: this.state.width,
			position: "absolute",
			backgroundColor: this.props.color2,
			bottom:"0px",
      left:"0",
      right:"0",
      marginLeft:"auto",
      marginRight:"auto",
			zIndex: "11",
			WebkitTransition: ".25s ease-out",
			MozTransition: ".25s ease-out",
			OTransition: ".25s ease-out",
      transition:".25s ease-out",
		}
    return(
      <div style={option} onMouseEnter={this.hover} onMouseLeave={this.leave}>
        {this.props.children}

        <span style={under}></span>
      </div>
    );
  }
}