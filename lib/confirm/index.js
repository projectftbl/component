import React, { Component } from 'react';

export default class Confirm extends Component {
  getInitialState() {
    return { active: false };
  }

  getDefaultProps() {
    return {
      action: _ => false
    , message: 'Are you sure?'
    , confirm: 'Yes'
    , deny: 'No'
    };
  }

  handleClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <span onClick={this.handleClick}>
        {this.props.children}
        {this.state.active && 
          <Portal>
            <div>
              <Dialog {...this.props} cancel={this.handleClick} />
            </div>
          </Portal>
        }
      </span>
    );
  }
};
