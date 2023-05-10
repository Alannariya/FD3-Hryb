import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './IShop.css';

import Product from './Product';

class IShop extends React.Component {

  static propTypes = {
    nameShop: React.PropTypes.string.isRequired, 
    itemsArr:React.PropTypes.array.isRequired,
		tHeadArr:React.PropTypes.arrayOf(
			React.PropTypes.shape({
				id: React.PropTypes.number.isRequired,
			  head: React.PropTypes.string.isRequired
			})
		)		
  };

	state = {
      itemSelectedId: null,
			currItemsArr: this.props.itemsArr,
    };
  

  itemSelected = (id) => {
    console.log('выбран ответ с кодом '+id);
    this.setState( {itemSelectedId:id} );
  };


	deleteItem = (id) =>  {
		this.setState({ currItemsArr: this.state.currItemsArr.filter(item => item.id !== id) });
};

  render() {

    const items = this.state.currItemsArr.map( el =>
			React.createElement(Product, {
				key:el.id, id:el.id, title:el.title,img:el.img,price:el.price,count:el.count, control:el.control,
				itemSelectedId: this.state.itemSelectedId, cbDeleted: this.deleteItem,
				cbSelected:this.itemSelected,
			})
      );
      
		const hOfTable = this.props.tHeadArr.map( el =>
			React.DOM.th({key:el.id,className:'ShopHead'}, el.head )
		);
		

    return DOM.table( {className:'IShop'}, 
      DOM.caption( {className:'ShopCaption'}, this.props.nameShop ),
			DOM.thead( {className:'ShopHead'},
				DOM.tr ({}, hOfTable )),
      DOM.tbody( {}, items),
    );
  }

}

export default IShop;