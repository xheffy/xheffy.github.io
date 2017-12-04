import React, { Component } from 'react';

import Socialicon from './Socialicons';

const social_infos = [['fa-linkedin-square', 'https://www.linkedin.com/in/nayeonpark/'], ['fa-github-square', 'https://github.com/xheffy']];

class Socials extends Component {
	render() {
		return (
			<ul style={{width: '300px', margin: '0 auto'}}>
			{
				social_infos.map((social_info) => 
					<Socialicon addr={social_info[1]} icon={<i className={'fa ' + social_info[0]} ariaHidden="true"/>} />)
			}
			</ul>
		);
	}
}

export default Socials;