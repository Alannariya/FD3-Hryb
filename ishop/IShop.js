var IShop = React.createClass({

  displayName: 'IShop',

	propTypes: {
    nameShop: React.PropTypes.string.isRequired, 
    // itemsArr: React.PropTypes.array.isRequired,
    itemsArr:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
				title: React.PropTypes.string.isRequired,
				img: React.PropTypes.string.isRequired,
				price: React.PropTypes.number.isRequired,
        count: React.PropTypes.number,
        
      })
    )

  },

  render: function() {

    var items = this.props.itemsArr.map( el =>
        React.DOM.tr({key:el.id,className:'Item'},
          React.DOM.td({},el.title),
          React.DOM.td({className:'ItemImg'},
						React.DOM.img({src:el.img})),
					React.DOM.td({},`${el.price}\$`),
          React.DOM.td({},`${el.count}\ pieces`),
        )
      );

		var hOfTable = this.props.tHeadArr.map( el =>
			React.DOM.th({key:el.id,className:'ShopHead'}, el.head )
		);
		

    return React.DOM.table( {className:'IShop'}, 
      React.DOM.caption( {className:'ShopCaption'}, this.props.nameShop ),
			React.DOM.thead( {className:'ShopHead'},
				React.DOM.tr ({}, hOfTable )),
      React.DOM.tbody( {}, items ),
    );
  },

});