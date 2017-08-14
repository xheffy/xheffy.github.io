import React, { Component } from 'react';
import './Favorites.css';

class Favorites extends Component {
	
	render() {
		return (
			<dl className='favorites' style={{fontSize: '20px', width: 'inherit'}}>
				<dt>Hobby:</dt> <dd>Playing with my husband </dd> <br />
				<dt>Movie:</dt> <dd>Harry Potter</dd><br />
				<dt>Food:</dt> <dd>Pyeong-Yang Naeng Myun (North Korean style cold noodles) </dd><br />
				<dt>Whisky:</dt> <dd>Balvenie Triple Cask 16 years</dd><br />
				<dt>K-Pop Group:</dt> <dd>TWICE</dd><br />
			</dl>
		);
	}
}

export default Favorites;