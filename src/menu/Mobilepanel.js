import React from 'react';

export default class Menuoption extends React.Component{
constructor(props){
  super(props);
  this.state=({
  })
}

  render(){
    const panel={
      width:"100vw",
      height:"100vh",
      backgroundColor:"rgba(0,0,0,.8)",
      right: this.props.mobileoffset,
      position:"fixed",
      top:"0px",

      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",

    }
    return(
      <div style={panel}>
       
      </div>
    );
  }
}