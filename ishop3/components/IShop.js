import React from 'react';
import PropTypes from 'prop-types';


import './IShop.css';

import Product from './Product';
import Show from './Show';
import Edit from './Edit';

class IShop extends React.Component {

  static propTypes = {
    nameShop: PropTypes.string.isRequired, 
    itemsArr:PropTypes.array.isRequired,
		tHeadArr:PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
			  head: PropTypes.string.isRequired
			})
		)		
  };

	state = {
      itemSelectedId: null,
			currItemsArr: this.props.itemsArr,
			workMode: null,
			isStartedEdit: false,
			newId: null,
    };
  

  itemSelected = (id) => {
    console.log('выбран ответ с кодом '+id);
    this.setState( {
			itemSelectedId:id,
			workMode:1,
		} );
  };


	deleteItem = (id) =>  {
		this.setState({ currItemsArr: this.state.currItemsArr.filter(item => item.id !== id) });
};


	editItem = (id) => {
		this.setState(
			{
				itemSelectedId: id,
				workMode: 2,
			}
		);
	}

changeMode = () => {
	this.setState(
		{
			workMode: null,
			isStartedEdit: false,
		}
	);
}

setDisabled = () => {
	if ((this.state.workMode === 2)||(this.state.workMode === 3)) {
		this.setState(
			{
				isStartedEdit: true,
			}
		);
	}
}


saveEdit = (id, changes) => {
  const currItemsArr = [...this.state.currItemsArr];
  if (this.state.workMode === 2) {
    const itemIndex = currItemsArr.findIndex((el) => el.id === id);
    if (itemIndex !== -1) {
      const item = currItemsArr[itemIndex];
      const changedItem = { ...item, ...changes };
      currItemsArr[itemIndex] = changedItem;
    }
  }
  if (this.state.workMode === 3) {
    const newItem = { id, ...changes };
    currItemsArr.push(newItem);
  }
  this.setState({
    currItemsArr,
    workMode: null,
    isStartedEdit: false,
  });
};

cteateNewProduct = () => {
	const arr = this.state.currItemsArr;
	let productId = arr.reduce((first, next) => first.id > next.id ? first.id : next.id);
	productId++;
	this.setState(
		{
			workMode: 3,
			itemSelectedId: null,
			newId: productId,
		}
	);
}


  render() {

    const items = this.state.currItemsArr.map( el =>
			<Product	key={el.id} id={el.id} title={el.title}
			  img={el.img} price={el.price} count={el.count} 
			  control={el.control}
			  itemSelectedId={this.state.itemSelectedId}
				cbDeleted={this.deleteItem}
				cbSelected={this.itemSelected}
				cbEdit={this.editItem} 
				iStartedEdit={this.state.isStartedEdit}
			/>
    );
      
		const hOfTable = this.props.tHeadArr.map( (el) => {
			// <td key={el.id} className='ShopHead'>{el.head}</td>
			return <th key={el.id}>{el.head}</th>
		});
		

    return (
			<div>
				<table className='IShop'>
					<caption className='ShopCaption'>{this.props.nameShop}</caption> 
					<thead className='ShopHead'>
						<tr>{hOfTable}</tr>
					</thead>	
					<tbody>{items}</tbody>
				</table>
				<div>
          <input className="btnNP" type="button" value="New product" 
								 disabled={this.state.isStartedEdit} 
								 onClick={this.cteateNewProduct}/>
        </div>
				<div className='Card'>
				{
          (this.state.workMode === 1) && (<Show  
						item={this.state.currItemsArr.find((el) => el.id === this.state.itemSelectedId)}/>)
        }
				{
          (this.state.workMode === 2) && (<Edit  
						key={this.state.itemSelectedId} 
						cbSave={this.saveEdit} 
						changeMode={this.changeMode} 
						setDisabled={this.setDisabled}
						item={this.state.currItemsArr.find((el) => el.id === this.state.itemSelectedId)}
						/>)
        }
				{
          (this.state.workMode === 3) && (<Edit  
						key={this.state.newId } 
						cbSave={this.saveEdit} 
						changeMode={this.changeMode} 
						setDisabled={this.setDisabled}
						item={{id: this.state.newId , title: "", count: 0, img: "", price: 0}}/>)
        }
				</div>
			</div>
		);
	}	 
}

export default IShop; 