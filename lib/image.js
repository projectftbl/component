import React, { Component } from 'react';

export default class Image extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.fallback = () => {
      if (this.props.fallbackSrc) {
        this.setState({ failed: true });
      }
    };
  }

  render() {
    const { src, fallbackSrc, ...rest } = this.props;

    if (this.state.failed) {
      return <img src={fallbackSrc} {...rest} />
    } else {
      return <img src={src} onError={this.fallback} {...rest} />;
    }
  }
};