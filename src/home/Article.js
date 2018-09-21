import React from 'react';

export default class Article extends React.Component{
  render(){
    return(
      <div className="article">
        {this.props.children}
      </div>
    );
  }
}