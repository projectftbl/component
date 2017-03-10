import React from 'react';
import color from 'color';
import { Info, Warning, Err, Notify } from '@recipher/icons';

const COLORS = {
  info: '#4d8796'
, warning: '#fbbd08'
, error: '#a95252'
, notify: '#21ba45'
};

const ICONS = {
  info: Info
, error: Err
, warning: Warning
, notify: Notify
};

export default ({ message, type = 'warning' }) => {
  const colour = COLORS[flash.type]
      , Icon = ICONS[flash.type];

  const background = color(colour).lighten(0.6).hexString()
      , foreground = color(colour).darken(0.25).hexString();

  const styles = {
    base: {
      position: 'relative'
    , width: '100%'
    , padding: 10
    , borderRadius: 3
    , marginBottom: 10
    , backgroundColor: background
    , color: foreground
    , clear: 'both'
    }
  };

  return  (
    <div style={styles.base}>
      <Icon colour={foreground} size={20} allowHover={false} style={{float:'left'}}/>
      <div style={{paddingLeft: 30}}> {message}</div>
    </div>
  );
};