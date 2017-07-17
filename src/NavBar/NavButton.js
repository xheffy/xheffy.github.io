import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class NavButton extends Component {


	render() {
		return (
					<button style={{
						backgroundColor: this.props.color,
		   			height: '50px',
		    		color: 'rgba(0, 0, 0, 0.8)',
		    		fontFamily: '\'Quicksand\', sans-serif',
		    		fontSize: 'large',
		    		flex: '0 0 150px',
		    		borderRadius: '15px'
		    	}}>
		    		<Link to={this.props.subdir} style={{color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'bold'}}>
							{this.props.menuItem}
						</Link>
					</button>
		);
	}
}

export default NavButton;