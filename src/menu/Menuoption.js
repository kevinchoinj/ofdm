import React from 'react';

export default class Menuoption extends React.Component{
constructor(props){
  super(props);
  this.state=({
    color:"#1a1a1a",
  })
  this.hover = this.hover.bind(this)
  this.leave = this.leave.bind(this)
}

hover(){
  this.setState({
    color:"#35465c",
  });
}

leave(){
  this.setState({
    color:"#1a1a1a",
  });
}
  render(){
    const option={
      color:this.state.color,
      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",

    }
    return(
      <div style={option} onMouseEnter={this.hover} onMouseLeave={this.leave}>
        {this.props.children}
      </div>
    );
  }
}