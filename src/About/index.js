import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';
import Pics from './Pics';
import Favorites from './Favorites';
import Resume from './Resume';

class About extends Component {
	
	render() {
		return (
			<div className='sectionPage' style={{backgroundColor: this.props.theme.mainColor}}>
				<SectionTitle title='About' />
				<Favorites />
				<Resume />
			</div>
		);
	}
}

export default About;