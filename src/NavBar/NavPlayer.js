import React, { Component } from 'react';
import ReactAudio from 'react-audioplayer';

class NavPlayer extends Component {
	constructor(props) {
		super(props);
		this.songs = [
			{
				name: 'tete',
				src: './ttetteterete.mp3'
			}
		];
	}

	render() {
		return (
			<div style={{width: '50%', margin: '0 auto'}}>
				<ReactAudio
					playlist={this.songs}
					autoPlay
					color={'purple'}
					style={{
						display: 'inline-block',
						margin: '10px',
						boxShadow: '0 5px 5px gray, 0 7px 7px orange',
						verticalAlign: 'middle'}}
					volumeOrientationDown/>
				{/* <audio controls autoPlay loop alt='background music' style={{margin: '0 auto', width: '75%'}}>
	  			<source src="./ttetteterete.mp3" type="audio/mpeg" />
	  			<source src="./ttetteterete.ogg" type="audio/ogg" />
	  			Your browser does not support the HTML audio tag.
				</audio> 
				*/}
				<span style={{margin: '0 10px'}} >from <a href='https://youtu.be/UDK5Lu4QfwE'> this video </a></span>
			</div>
		);
	}


}

export default NavPlayer;