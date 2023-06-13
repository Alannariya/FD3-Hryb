import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';


  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


	ReactDOM.render(
		<RainbowFrame colors={colors}>Hello!</RainbowFrame>,
	
		document.getElementById('container'),
	);

