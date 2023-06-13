import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './components/IShop';

let nameShop='Bijouterie';
// let itemsArr=require('./item.json');2-ой способ записи
// let tHeadArr=require('./head.json');

import itemsArr from './item.json'  
import tHeadArr from './head.json'


ReactDOM.render(
	<IShop
	 nameShop={nameShop}
	 itemsArr={itemsArr}
	 tHeadArr={tHeadArr}
	/> 
	, document.getElementById('container') 
);

