import React from 'react';
import ReactDOM from 'react-dom';

import './first.css';

class Index extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (<div>
			test for loader.
		</div>)
	}
}

ReactDOM.render(<Index />,document.getElementById('root'));