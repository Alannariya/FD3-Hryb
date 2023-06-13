import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {
  static propTypes = {
    caption1: PropTypes.string.isRequired,
		caption2: PropTypes.string.isRequired,
		cbPressed: PropTypes.func.isRequired,
  };

	pressed= (EO) => {
		this.props.cbPressed(EO.target.value);
	};
render() {
  return (
    <div >
      <input type='button' value={this.props.caption1} onClick={this.pressed} />
        {this.props.children}
      <input type='button' value={this.props.caption2} onClick={this.pressed} />
    </div>
    );

  }

}

export default DoubleButton;