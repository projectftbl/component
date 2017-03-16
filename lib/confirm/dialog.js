import React, { Component } from 'react';
import Button from './button';

const Background = props => {
  const styles = {
    base: {
      position: 'fixed'
    , height: '100%'
    , width: '100%'
    , top: 0
    , left: 0
    , background: 'rgba(0,0,0,0.35)'
    , userSelect: 'none'
    , zIndex: 1000
    }
  };

  return <div style={styles.base}>{props.children}</div>
};

const Message = props => {
  const styles = {
    base: {
      textAlign: 'center'
    }
  };

  return <p style={styles.base}>{props.children}</p>
}

const Content = props => {
  const styles = {
    base: {
      position: 'absolute'
    , top: 0
    , right: 0
    , bottom: 0
    , left: 0
    , margin: 'auto'
    , height: 160
    , width: 280
    , padding: 20
    , borderRadius: 4
    , backgroundColor: '#fff'
    }
  };

  return <div style={styles.base}>{props.children}</div>
};

class Dialog extends Component {
  handleConfirm() {
    const result = this.props.action(this.props.actionArgs);
    this.props.cancel();
    return result;
  }

  render() {
    return (
      <Background>
        <Content>
          <Message>{this.props.message}</Message>
          
          <Button onClick={_ => this.handleConfirm()}>
            {this.props.confirm}
          </Button>
          
          <Button onClick={_ => this.props.cancel()}>
            {this.props.deny}
          </Button>
        </Content>
      </Background>
    );
  }
};

export default Dialog;
