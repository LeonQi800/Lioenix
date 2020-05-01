import React, { Component } from "react";
import "../shared/css/spinner.css";

export class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="loader">Loading...</div>
      </div>
    );
  }
}

export default SettingPage;
