import React, { Component } from 'react';
import ReactAudio from 'react-audioplayer';

import './NavPlayer.css';

class NavPlayer extends Component {
	constructor(props) {
		super(props);
		this.songs = [
			{
				name: 'ttetteterete',
				src: './ttetteterete.mp3'
			}
		];
	}

	render() {
		return (
			<div className='audio-player'
				style={{width: '70%', margin: '0 auto', display: 'flex', justifyContent: 'center'}}>
				<ReactAudio
					playlist={this.songs}
					/*autoPlay*/
					color={this.props.color}
					style={{
						display: 'inline-block',
						margin: '10px',
						boxShadow: '0 3px 3px' + this.props.color,
						verticalAlign: 'middle'}}
					volumeOrientationDown/>
				<span style={{margin: '0 10px', alignSelf: 'center'}}>from 
					<a style={{color: '#283593'}} href='https://youtu.be/UDK5Lu4QfwE'> this video 
					</a>
				</span>
			</div>
		);
	}
}

export default NavPlayer;