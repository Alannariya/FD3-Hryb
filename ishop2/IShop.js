// 0-23.0

var IShop = React.createClass({

  displayName: 'IShop',

	propTypes: {
    nameShop: React.PropTypes.string.isRequired, 
    itemsArr:React.PropTypes.array.isRequired,
		tHeadArr:React.PropTypes.arrayOf(
			React.PropTypes.shape({
				id: React.PropTypes.number.isRequired,
			  head: React.PropTypes.string.isRequired
			})
		)		
  },

	getInitialState: function() {
    return { 
      itemSelectedId: null,
			currItemsArr: this.props.itemsArr,
    };
  },

  itemSelected: function(id) {
    console.log('выбран ответ с кодом '+id);
    this.setState( {itemSelectedId:id} );
  },

	deleteItem: function (id) {
		this.setState({ currItemsArr: this.state.currItemsArr.filter(item => item.id !== id) });
},

  render: function() {

    var items = this.state.currItemsArr.map( el =>
			React.createElement(Product, {
				key:el.id, id:el.id, title:el.title,img:el.img,price:el.price,count:el.count, control:el.control,
				itemSelectedId: this.state.itemSelectedId, cbDeleted: this.deleteItem,
				cbSelected:this.itemSelected,
			})
      );
      
		var hOfTable = this.props.tHeadArr.map( el =>
			React.DOM.th({key:el.id,className:'ShopHead'}, el.head )
		);
		

    return React.DOM.table( {className:'IShop'}, 
      React.DOM.caption( {className:'ShopCaption'}, this.props.nameShop ),
			React.DOM.thead( {className:'ShopHead'},
				React.DOM.tr ({}, hOfTable )),
      React.DOM.tbody( {}, items),
    );
  },

});