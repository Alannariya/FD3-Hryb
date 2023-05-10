import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Product.css';

class Product extends React.Component {

  static propTypes = {
        id: React.PropTypes.number.isRequired,
				title: React.PropTypes.string.isRequired,
				img: React.PropTypes.string.isRequired,
				price: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
				control:React.PropTypes.string.isRequired,
				cbSelected: React.PropTypes.func.isRequired,
				cbDeleted: React.PropTypes.func.isRequired,
				itemSelectedId: React.PropTypes.number,
  };


itemClicked= (EO) => {
	this.props.cbSelected(this.props.id);
};

deleteItem = (EO) => {
	confirm('Do you really want to delete?') 
	?	this.props.cbDeleted(this.props.id)
	: null;
	EO.stopPropagation();
};

  render () {

       return DOM.tr({key: this.props.id,  onClick:this.itemClicked, className:((this.props.itemSelectedId===this.props.id) ? 'ItemSelected' : null)}, 
			 DOM.td({},this.props.title),
			 DOM.td({className:'ItemImg'},
				 DOM.img({src:this.props.img})),
			 DOM.td({},`${this.props.price}\$`),
			 DOM.td({},`${this.props.count}\ pieces`),
			 DOM.td(null, 
				DOM.input({type:'button', value:this.props.control, className:'ItemDeleteButton', onClick: this.deleteItem}, null)
					)
       )
	}

}

export default Product;