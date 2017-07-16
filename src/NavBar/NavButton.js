import React, { Component } from 'react';

class NavButton extends Component {


	render() {
		return (
			<button style={{}}>
				{this.props.menuItem}
			</button>
		);
	}
}

export default NavButton;