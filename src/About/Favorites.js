import React, { Component } from 'react';

class Favorites extends Component {
	
	render() {
		return (
			<article style={{fontFamily: '\'Handlee\', cursive', width: 'inherit'}}>
				<h3 style={{
					fontSize: '25px',
					width: '100px',
					margin: '0 12%',
					color: 'rgba(0,0,0,0.8)'
				}}>
					Favorites
				</h3>
				<p style={{fontSize: '20px', width: 'inherit', margin: '5px 15%'}}>
					Hobby: Playing with my husband <br />
					Movie: Harry Potter <br />
					Food: Pyeong-Yang Naeng Myun (North Korean style cold noodles) <br />
					Whisky: Balvenie Triple Cask 16 years <br />
					K-Pop Group: TWICE <br />
				</p>
			</article>
		);
	}
}

export default Favorites;