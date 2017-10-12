import React from 'react';

export default class Article extends React.Component{
  render(){
    const container={
      fontFamily:"Helvetica",
      position:"relative",
      marginBottom:"25px",
      
    }
    return(
      <div style={container}>
        {this.props.children}
      </div>
    );
  }
}