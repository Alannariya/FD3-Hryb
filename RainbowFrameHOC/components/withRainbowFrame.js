
import React, { Fragment } from 'react';

  
function withRainbowFrame(colors) {
  return function (Component) {
    class ComponentWithRainbowFrame extends React.Component {
      render() {
        let content = <Component {...this.props} />;
        for (let color of colors) {
          content = (
            <div
              className='RainbowFrame'
              style={{ border: `solid 5px ${color}`, padding: '10px' }}
            >
              {content}
            </div>
          );
        }
        return <Fragment>{content}</Fragment>;
      }
    }
    return ComponentWithRainbowFrame;
  };
}
export default withRainbowFrame;