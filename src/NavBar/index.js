import React, { Component } from 'react';

import NavPlayer from './NavPlayer.js';
import NavButton from './NavButton.js';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.positionStyleUpdate(props.location);
	}

	positionStyleUpdate(location) {
		this.positionStyle = location.pathname === '/' ?
		  { top: '100%', transform: 'translateY(-100%)' } :
		  { top: '0%' };
	}

	componentWillUpdate(nextProps) {
		this.positionStyleUpdate(nextProps.location);
	}
	
	render() {
		return (
			<div style={{
				...this.positionStyle,
				...this.props.theme,
				height: '180px',
				position: 'fixed',
				left: '0%',
				right: '0%',
				padding: '20px',
				transitionDuration: '1s'
			}}>
				<div style={{
					margin: '0 0 25px 0',
					display: 'flex',
					justifyContent: 'space-around'
				}}>
					{
						this.props.location.pathname === '/' ? null : <NavButton subdir='/' menuItem='Home' color={this.props.theme.mainColor} />
					}
					<NavButton subdir='/about' menuItem='About' color={this.props.theme.mainColor} />
					<NavButton subdir='/projects' menuItem='Projects' color={this.props.theme.mainColor} />
					<NavButton subdir='/food' menuItem='Food' color={this.props.theme.mainColor} />
					<NavButton subdir='/contact' menuItem='Contact' color={this.props.theme.mainColor} />
				</div>
				<NavPlayer color={this.props.theme.playerColor} />
			</div>
		);
	}
}

export default NavBar;