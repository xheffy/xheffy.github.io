import React, { Component } from 'react';

class Socialicon extends Component {
	render() {
		return (
			<li style={{margin: '0 1%', listStyleType: 'none', display:'inline-block'}}>
				<a href={this.props.addr}>
					{this.props.icon}
				</a>
			</li>
		);
	}
}

export default Socialicon;