import React from 'react';
import PropTypes from 'prop-types';


import './Show.css';

class Show extends React.Component {

  static propTypes = {
		item: PropTypes.shape({
      id:PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
		})		
  };

	render () {

    return (
				
			<div className='ShowCard'>
        <h2>Product Card</h2>
        	<p>Product Name: <span>{this.props.item.title}</span> </p>
        	<p>Price: <span>{this.props.item.price} $</span></p>
        	<p>Count: <span>{this.props.item.count} pieces</span></p>
      </div>
		) 	
	}








	
}


export default Show;