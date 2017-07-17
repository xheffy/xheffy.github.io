import React, { Component } from 'react';

import SectionTitle from '../SectionTitle';


class Contact extends Component {
	
	render() {
		return (
			<div className='sectionPage' style={{backgroundColor: this.props.theme.mainColor }}>
				<SectionTitle title='Contact' />
			</div>
		);
	}
}

export default Contact;