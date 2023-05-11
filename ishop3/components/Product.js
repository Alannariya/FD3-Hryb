import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Product.css';

class Product extends React.Component {

  static propTypes = {
        id:PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				img: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
				control:PropTypes.string.isRequired,
				cbSelected: PropTypes.func.isRequired,
				cbDeleted: PropTypes.func.isRequired,
				itemSelectedId: PropTypes.number,
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