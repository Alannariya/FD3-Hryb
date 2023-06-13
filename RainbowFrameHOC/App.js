import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import withRainbowFrame from './components/withRainbowFrame';
import DoubleButton from './components/DoubleButton';

let  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);

	ReactDOM.render(
		<Fragment>
			<DoubleButton 
				caption1="однажды" 
				caption2="пору" 
				cbPressed={ num => alert(num) }>в студеную зимнюю</DoubleButton>
			<FramedDoubleButton 
				caption1="я из лесу" 
				caption2="мороз" 
				cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
	  </Fragment>,
		document.getElementById('container'),
	);

