import React, { Fragment } from 'react';

const withRainbowFrame = (colors) => (Component) => (props) => {
  let content = <Component {...props} />;
  for (let color of colors) {
    content = (
      <div className='RainbowFrame' style={{ border: `solid 5px ${color}`, padding: '10px' }}>
        {content}
      </div>
    );
  }
  return <Fragment>{content}</Fragment>;
};

export default withRainbowFrame;