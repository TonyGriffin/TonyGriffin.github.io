import React from 'react';

class Thumb extends React.Component {
  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event){
    // the props imageItem is the props defined in Thumbs
    this.props.receiveImage(this.props.imageItem.urls.regular);
  }


  render(){
    return (
      <img onClick={this.handleClick} src={this.props.imageItem.urls.thumb} className="thumb"/>
    );
  }
}

export default Thumb;
