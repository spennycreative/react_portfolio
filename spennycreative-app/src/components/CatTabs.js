import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import "../css/tabs.css";

class CatTabs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <div className="component--tabs">
        <div className="body-container">
          <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
            <Tab>Development</Tab>
            <Tab>Design</Tab>
            <Tab>Marketing</Tab>
          </Tabs>
          <section>
            <div className="content">Content for the tab: {this.state.activeTab}</div>
          </section>
        </div>
      </div>
    );
  }
}

export default CatTabs;
