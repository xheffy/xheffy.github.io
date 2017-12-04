import React, { Component } from 'react';

class Socialicon extends Component {
	render() {
		return (
			<a href={this.props.addr} target='_blank'>
                <li style={{margin: '0 1%', listStyleType: 'none', display:'inline-block'}}>
					{this.props.icon}	
			    </li>
            </a>
		);
	}
}

export default Socialicon;