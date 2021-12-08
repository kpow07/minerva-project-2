import React, { Component } from "react";

class Welcome extends Component {
   state = {};
   render() {
      return<div>Hello {this.props.name}</div>;
   }
}

export default Welcome;