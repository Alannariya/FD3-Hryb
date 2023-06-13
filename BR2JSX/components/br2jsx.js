import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  render() {
    const textArr = this.props.text.split(/<br\s*\/?>/g); //альтернативный вариант записи /<br  *\/?>/
    const content = [];
    for (let i = 0; i < textArr.length; i++) {
      if (i) 
        content.push(<br key={i} />);
        content.push(textArr[i]);
    }

  return <div>{content}</div>;
  }
}

export default BR2JSX;