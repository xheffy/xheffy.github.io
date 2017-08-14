import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';
import Pics from './Pics';
import Favorites from './Favorites';
import Resume from './Resume';
import Article from './Article';

class About extends Component {
	
	render() {
		return (
			<div className='sectionPage' style={{backgroundColor: this.props.theme.mainColor}}>
				<SectionTitle title='About' />
				<Article articleName='Favorites' content={<Favorites />} />
				<Article articleName='Resume' content={<Resume />} />
			</div>
		);
	}
}

export default About;