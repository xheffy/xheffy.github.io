import React, { Component } from 'react';

import Title from './Title';
import Socials from './Socials';


class Homepage extends Component {
	
	render() {
		return (
			<div style={{
				height: '100vh',
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