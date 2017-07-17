import React, { Component } from 'react';


class SectionTitle extends Component {
	
	render() {
		return (
			<h2 style={{
				fontFamily: '\'Arima Madurai\', cursive',
				fontSize: '35px',
				width: '200px',
				margin: '2% 10% 0',
				color: 'rgba(0,0,0,0.8)'
			}}>
				{this.props.title}
			</h2>
		);
	}
}

export default SectionTitle;