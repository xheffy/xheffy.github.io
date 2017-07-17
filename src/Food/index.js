import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';


class Food extends Component {
	
	render() {
		return (
			<div className='sectionPage' style={{backgroundColor: this.props.theme.mainColor }}>
				<SectionTitle title='Food' />
			</div>
		);
	}
}

export default Food;