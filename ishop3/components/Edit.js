import React from 'react';
import PropTypes from 'prop-types';


import './Edit.css';

class Edit extends React.Component {

  static propTypes = {
		item: PropTypes.shape({
      id:PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
		}),
			cbSave: PropTypes.func.isRequired,
      changeMode: PropTypes.func.isRequired,
      setDisabled: PropTypes.func.isRequired,
  };

	state = {
		id: this.props.item.id,
		title: this.props.item.title,
		img: this.props.item.img,
		price: this.props.item.price,
		count: this.props.item.count,
		imgError: "",
		titleError: "",
		priceError: "",
		countError: "",
		isSaveDisabled: true,
		
};

validForm = () => {

		const imgError = this.state.img ? null : "The product image link is incorrectly entered";
		const titleError = this.state.title.length ? null : "Enter the product name";
		const priceError = (isNaN(this.state.price)) || (this.state.price === "") ? "Please enter the correct price of the product" : null;
		const countError = (isNaN(this.state.count)) || (this.state.count === "") ? "Please enter valid data" : null;

		this.setState({ imgError, titleError, priceError, countError })

}

editTitle = (eo) => {
  this.props.setDisabled();
  this.setState({ title: eo.target.value }, () => {
    this.validForm();
    this.setState({ isSaveDisabled: false }); 
  });
};

editImg = (eo) => {
  this.props.setDisabled();
  this.setState({ img: eo.target.value }, () => {
    this.validForm();
    this.setState({ isSaveDisabled: false }); 
  });
};

editPrice = (eo) => {
  this.props.setDisabled();
  this.setState({ price: eo.target.value }, () => {
    this.validForm();
    this.setState({ isSaveDisabled: false }); 
  });
};

editCount = (eo) => {
  this.props.setDisabled();
  this.setState({ count: eo.target.value }, () => {
    this.validForm();
    this.setState({ isSaveDisabled: false }); 
  });
};

saveChanges = () => {
	this.props.cbSave(this.props.item.id, {
		title: this.state.title,
		img: this.state.img,
		price: this.state.price !== "" ? parseFloat(this.state.price) : 0,
		count: parseFloat(this.state.count),
	});
};

render() {
		return (
				<div className="EditCard">
						<h2>Product Card</h2>
						<p>Product Name:
								<input type="text" value={this.state.title} 
											 onChange={this.editTitle} />
								<span>{this.state.titleError}</span>
						</p>
						<p>Image Link:
								<input type="text" value={this.state.img} onChange={this.editImg} />
								<span>{this.state.imgError}</span>
						</p>
						<p>Price:
								<input type="text" value={this.state.price} onChange={this.editPrice} />
								<span>{this.state.priceError}</span>
						</p>
						<p>Count:
								<input type="text" value={this.state.count} onChange={this.editCount} />
								<span>{this.state.countError}</span>
						</p>
						<input className="btn" type="button" value="Save" 
						       disabled={this.state.isSaveDisabled} 
									 onClick={this.saveChanges} />
						<input className="btn" type="button" value="Cancel" onClick={() => this.props.changeMode()} />
				</div>
		)
}





	
}


export default Edit;



