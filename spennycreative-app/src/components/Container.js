import React, { Component } from "react";

class Container extends Component {
  render() {
    return (
      <>
        <div className={this.props.class}>
          <div className="body-container">{this.props.content}</div>
        </div>
      </>
    );
  }
}

export default Container;
