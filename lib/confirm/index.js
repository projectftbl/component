import React, { Component } from 'react';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <span onClick={_ => this.handleClick()}>
        {this.props.children}
        {this.state.active && 
          <Portal>
            <div>
              <Dialog {...this.props} cancel={_ => this.handleClick()} />
            </div>
          </Portal>
        }
      </span>
    );
  }
};

Confirm.getDefaultProps = {
  action: _ => false
, message: 'Are you sure?'
, confirm: 'Yes'
, deny: 'No'
};

export default Confirm;
