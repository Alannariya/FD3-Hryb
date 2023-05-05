var Filter = React.createClass({

	displayName: 'Filter',

	propTypes: {
			listArr: React.PropTypes.arrayOf(React.PropTypes.string)
	},

	getInitialState: function () {
			return {
					listArr: this.props.listArr,
					isChecked: false,
					inputText: '',
			};
	},

	changelistArr() {
			let changedText = this.props.listArr;
			if (this.state.inputText) {
					changedText = changedText.filter(i => i.includes(this.state.inputText))
			}
			if (this.state.isChecked) {
					changedText = changedText.sort();
			}
			this.setState({ listArr: changedText })
	},

	isClicked: function (eo) {
			this.setState({ isChecked: eo.target.checked }, this.changelistArr)
	},

	inputChanged: function (eo) {
			this.setState({ inputText: eo.target.value }, this.changelistArr)
	},

 reset: function () {
			this.setState({ isChecked: false, inputText: '', listArr: this.props.listArr })
	},

	render: function () {
			return React.DOM.div({ className: 'FilterFraem' },
					React.DOM.input({className: 'F-Checkbox', type: 'checkbox', checked: this.state.isChecked, onClick: this.isClicked
					}),
					React.DOM.input({className: 'F-Input', type: 'text', value: this.state.inputText, onChange: this.inputChanged
					}),
					React.DOM.input({ className: 'F-Reset', type: 'button', value: 'сброс',   onClick: this.reset
					}),
					React.DOM.div({ className: 'F-Text' }, this.state.listArr.join("\n")),
					
			);
	},

});