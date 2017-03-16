import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends Component {
  render: () => null

, element: null

, componentDidMount() {
    var portal = document.createElement('div');
    document.body.appendChild(portal);
    this.element = portal;
    this.componentDidUpdate();
  }

, componentWillUnmount() {
    document.body.removeChild(this.element);
  }

, componentDidUpdate() {
    ReactDOM.render(<div {...this.props}>{this.props.children}</div>, this.element);
  }
};
