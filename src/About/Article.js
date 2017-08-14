import React, { Component } from 'react';

class Article extends Component {
	
	render() {
		return (
			<article style={{fontFamily: '\'Handlee\', cursive', width: 'inherit', margin: '30px 10%'}}>
				<h3 style={{
					fontSize: '25px',
					width: '100px',
					margin: '0 8%',
					color: 'rgba(0,0,0,0.8)'
				}}>
					{this.props.articleName}
				</h3>
				<div style={{margin: '5px 12%'}}>
					{this.props.content}
				</div>
			</article>
		);
	}
}

export default Article;