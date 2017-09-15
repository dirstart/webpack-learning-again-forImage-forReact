import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css';

export default class Header extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (<header style={{marginBottom:"18px",width:"100%",height:"50px"}}>I'm header. And I'have pictures.</header>)
	}
} 