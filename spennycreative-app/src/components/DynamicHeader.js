import React, { Component } from "react";
import CustomHeadTag from "../molecules/CustomHeadTag";

class DynamicHeader extends Component {
  render() {
    return (
      <>
        <CustomHeadTag heading={this.props.heading} headingType={this.props.headingType} />
      </>
    );
  }
}

export default DynamicHeader;
