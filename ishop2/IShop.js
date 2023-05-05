var IShop = React.createClass({

  displayName: 'IShop',

	propTypes: {
    nameShop: React.PropTypes.string.isRequired, 
    itemsArr:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
				title: React.PropTypes.string.isRequired,
				img: React.PropTypes.string.isRequired,
				price: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        control:React.PropTypes.string.isRequired
      })
    ),
		tHeadArr:React.PropTypes.arrayOf(
			React.PropTypes.shape({
				id: React.PropTypes.number.isRequired,
			  head: React.PropTypes.string.isRequired
			})
		)		
  },

	getInitialState: function() {
    return { 
      itemSelected: null,
    };
  },

  itemSelected: function(id) {
    console.log('выбран ответ с кодом '+id);
    this.setState( {itemSelectedId:id} );
  },

	deleteItem: function (deletedId) {
		this.setState({ itemsArr: this.state.items.filter(item => item.id !== deletedId) });
},

  render: function() {

    var items = this.props.itemsArr.map( el =>
			React.createElement(Product, {
				key:el.id, title:el.title,img:el.img,price:el.price,count:el.count, control:el.control,
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