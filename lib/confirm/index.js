import React, { Component } from 'react';
import Portal from './portal';
import Dialog from './dialog';

export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { action = _ => false, message = 'Are you sure?', confirm: 'Yes', deny: 'No' } = this.props;

    return (
      <span onClick={_ => this.handleClick()}>
        {this.props.children}
        {this.state.active && 
          <Portal>
            <div>
              <Dialog action={action} message={message} confirm={confirm} deny={deny} 
                      cancel={_ => this.handleClick()} />
            </div>
          </Portal>
        }
      </span>
    );
  }
};
