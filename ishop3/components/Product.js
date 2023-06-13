import React from 'react';
import PropTypes from 'prop-types';


import './Product.css';

class Product extends React.Component {

  static propTypes = {
        id:PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				img: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
				cbSelected: PropTypes.func.isRequired,
				cbDeleted: PropTypes.func.isRequired,
				itemSelectedId: PropTypes.number,
				cbEdit: PropTypes.func.isRequired,
				iStartedEdit: PropTypes.bool.isRequired,
  };


	itemClicked= (EO) => {
		this.props.cbSelected(this.props.id);
	};

	deleteItem = (EO) => {
		EO.stopPropagation();
		if (confirm('Do you really want to delete?')) {
			this.props.cbDeleted(this.props.id);
		} else {
			null;
		}
	};

	ediItem= (EO) => {
		EO.stopPropagation();
		this.props.cbEdit(this.props.id);
	}; 

  render () {

    return (
				
				<tr key={this.props.id}
					  onClick={this.itemClicked}
						className={(this.props.itemSelectedId===this.props.id) ? 'ItemSelected' : null}>
			 		<td className='Title'>{this.props.title}</td>
					<td className='ItemImg'>
						<img src={this.props.img} />
			 		</td> 
					<td className='Price'>{this.props.price} $ </td>
			 		<td className='Count'> {this.props.count} pieces </td>
			 		<td>
					  <input type='button' value="Edit" className='ItemButton' 
					 				 onClick={this.ediItem } disabled={this.props.iStartedEdit}/>
						<input type='button' value="Delite" className='ItemButton' 
									 onClick={this.deleteItem} disabled={this.props.iStartedEdit}/>

					</td> 
				</tr>
			
		) 	
	}
}

export default Product;