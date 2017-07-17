import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';


class Projects extends Component {
	
	render() {
		return (
			<div className='sectionPage' style={{backgroundColor: this.props.theme.mainColor }}>
				<SectionTitle title='Projects' />
			</div>
		);
	}
}

export default Projects;