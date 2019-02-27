import React from 'react';

class Thumbs extends React.Component {
  render(){
    return (
      <div className="info">
        <p className="info__item info__item--conditions" id="conditions"></p>
        <p className="info__item info__item--credits">
          <a href={this.props.creditsPortfolioHTML}  id="credit-user">{this.props.creditsName}</a>
          <span>on</span>
          <a href={this.props.creditsPortfolioHTML} id="credit-platform">Unsplash</a>
        </p>
      </div>
    );
  }
}

export default Thumbs;
// {this.props.credits.user.name}+" "+
