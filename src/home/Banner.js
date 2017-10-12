import React from 'react';

export default class Banner extends React.Component{
  render(){
    const banner={
      position:"absolute",
      top:"0px",
      width:"100%",
      background: 'url('+this.props.bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",
      backgroundSize: "cover",
      height: "70vh",

      WebkitTransition: ".5s ease-out",
      MozTransition: ".5s ease-out",
      OTransition: ".5s ease-out",
      transition:".5s ease-out",
      opacity: this.props.opac,
      pointerEvents:this.props.pointerevents,
    }

    return(
      
      <div style={banner}>
      
      </div>
    );
  }
}