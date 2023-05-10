import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './components/IShop';

let nameShop='Bijouterie';
let itemsArr=require('./item.json');
let tHeadArr=require('./head.json');

// import itemsArr from './item.json'  2-ой способ записи
// import tHeadArr from './head.json'


ReactDOM.render(
	React.createElement(IShop,{nameShop:nameShop,itemsArr:itemsArr,tHeadArr:tHeadArr}), 
	document.getElementById('container') 
);

