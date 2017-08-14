import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';
import Article from '../About/Article';
import ReactProj from './ReactProj';

class Projects extends Component {
	
	render() {
		return (
			<div className='sectionPage' style={{backgroundColor: this.props.theme.mainColor }}>
				<SectionTitle title='Projects' />
				<Article articleName='React' content={<ReactProj />} />
			</div>
		);
	}
}

export default Projects;