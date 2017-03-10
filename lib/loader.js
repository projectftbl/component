import React from 'react';
import { Spinner } from '@recipher/icons';

export default ({ message, colour = '#333' }) => {
  const styles = {
    base: {
      position: 'relative'
    , width: '100%'
    , padding: '10px 10px 10px 0'
    , borderRadius: 3
    , marginBottom: 10
    , background: 'transparent'
    , color: colour
    , clear: 'both'
    }
  };

  return  (
    <div style={styles.base}>
      <Spinner colour={colour} rotate={true} size={20} allowHover={false} style={{float: 'left'}}/>
      <div style={{paddingLeft: 30}}> {message}</div>
    </div>
  );
};