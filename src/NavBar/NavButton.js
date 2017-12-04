import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class NavButton extends Component {
	render() {
		return (
				<div style={{
					backgroundColor: this.props.color,
		   			height: '50px',
		    		color: 'rgba(0, 0, 0, 0.8)',
		    		fontFamily: '\'Quicksand\', sans-serif',
		    		fontSize: 'large',
		    		flex: '0 0 150px',
	                borderRadius: '15px',
	                textAlign: 'center'
		    	}}>
		    		<Link to={this.props.subdir} style={{color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'bold', lineHeight: '50px'}}>
							{this.props.menuItem}
					</Link>
			    </div>
		);
	}
}

export default NavButton;