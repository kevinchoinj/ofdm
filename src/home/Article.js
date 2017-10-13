import React from 'react';

export default class Article extends React.Component{
  render(){
    const container={
      fontFamily:"Roboto, Helvetica",
      position:"relative",
      marginBottom:"25px",
      letterspacing:"1px",
      
    }
    return(
      <div style={container}>
        {this.props.children}
      </div>
    );
  }
}