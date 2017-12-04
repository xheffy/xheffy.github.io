import React, { Component } from 'react';

import Title from './Title';
import Socials from './Socials';


class Homepage extends Component {
	
	render() {
		return (
			<div style={{
				position: 'absolute',
				top: '0',
				bottom: '0',
				left: '0',
				right: '0',
				height: 'inherit',
				width: 'inherit',
				padding: '50px 50px 180px',
				backgroundColor: '#E1BEE7'
			}}>
				<Title />
				<Socials />
			</div>
		);
	}
}

export default Homepage;