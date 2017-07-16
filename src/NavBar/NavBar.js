import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import NavPlayer from './NavPlayer.js';
import NavButton from './NavButton.js';

class NavBar extends Component {
	
	render() {
		return (
			<div style={{}}>
				<NavButton>
					<Link to>
					</Link>
				</NavButton>
				<NavPlayer />
			</div>
		);
	}
}

export default NavBar;