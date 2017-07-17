import React, { Component } from 'react';

class Resume extends Component {
	
	render() {
		return (
			<article style={{fontFamily: '\'Handlee\', cursive', width: 'inherit', margin: '30px auto'}}>
				<h3 style={{
					fontSize: '25px',
					width: '100px',
					margin: '0 12%',
					color: 'rgba(0,0,0,0.8)'
				}}>
					Resume
				</h3>
				<dl style={{fontSize: '20px', width: 'inherit', margin: '5px 15%'}}>
					<dt>Education</dt>
					<dd>McGill University Bachelor of Commerce <br />major Finance minor Computer Science concentration International Business <br />(class of 2017)</dd>
					<dt>Skills</dt>
					<dd>
						<ul style={{listStyleType: 'none', margin:'0', padding: '0'}}>
							<li>Computer Skills: Java, C, bash, F#, HTML, CSS, JavaScript (React)</li>
							<li>Language Skills: fluent Korean, English (TOEIC 985/990), French, basic Chinese (HSK III 288/300)</li>
						</ul>
					</dd>
				</dl>
			</article>
		);
	}
}

export default Resume;