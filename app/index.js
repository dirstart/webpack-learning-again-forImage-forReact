import React from 'react';
import ReactDOM from 'react-dom';

import './first.css';
import './second.less';
import Header from './Header';

class Index extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<div>
        	<Header />
            <div className="test">
				test for loader.
			</div>
		</div>)
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));