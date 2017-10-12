import React from 'react';

export default class Banner extends React.Component{
  render(){
    const banner={
      width:"100%",
      background: 'url('+this.props.bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center top",
      backgroundSize: "cover",
      height: "70vh",

      marginBottom:"50px",
    }

    return(
      <div style={banner}>

      </div>
    );
  }
}