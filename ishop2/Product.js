var Product = React.createClass({

  displayName: 'Product',

	propTypes: {
        id: React.PropTypes.number.isRequired,
				title: React.PropTypes.string.isRequired,
				img: React.PropTypes.string.isRequired,
				price: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
				control:React.PropTypes.string.isRequired,
				cbSelected: React.PropTypes.func.isRequired,
				itemSelectedId: React.PropTypes.number,
				// cbDeleteItem: React.PropTypes.func.isRequired
  },


itemClicked: function(EO) {
	this.props.cbSelected(this.props.id);
},

confirmDelete: function() {
	confirm('Do you really want to delete?') ? this.deleteConfirmedItem() : null;
},

deleteConfirmedItem: function() {
	this.props.cbDeleteItem(this.props.id);
},

  render: function() {

       return React.DOM.tr({key: this.props.id, onClick:this.itemSelected, className: ( (this.props.isSelected) ? 'ShopProductSelected' : null )},
			 React.DOM.td({},this.props.title),
			 React.DOM.td({className:'ItemImg'},
				 React.DOM.img({src:this.props.img})),
			 React.DOM.td({},`${this.props.price}\$`),
			 React.DOM.td({},`${this.props.count}\ pieces`),
			 React.DOM.td(null, 
				React.DOM.input({type:'button', value:this.props.control, className:'ItemDeleteButton', onClick: this.confirmDelete}, null)
					),
       )
	}

});