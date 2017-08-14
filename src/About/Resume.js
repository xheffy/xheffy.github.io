import React, { Component } from 'react';

import './Resume.css';

class Resume extends Component {
	
	render() {
		return (
			<dl style={{fontSize: '20px', width: 'inherit', display: 'block'}}>
				<dt>Education</dt>
				<dd>McGill University Bachelor of Commerce <br />major Finance minor Computer Science concentration International Business (class of 2017) <br />GPA: 3.50/4.00</dd>
				<hr />
				<dt>Skills</dt>
				<dd>
					<ul>
						<li>Computer Skills: Java, C, bash, F#, HTML, CSS, JavaScript (React)</li>
						<li>Language Skills: fluent Korean, English (TOEIC 985/990), French, basic Chinese (HSK III 288/300)</li>
					</ul>
				</dd>
				<hr />
				<dt>Work Experience</dt>
				<dd>
					<ul>
						<li>
							<dt>Canada Revenue Agency</dt>
							<dd>
								<ul className='buttonList'>
									<li>Verified financial records such as credit reports, bank and credit card statements, invoices, real estate and mortgage documents and general ledgers to complete preliminary risk analysis of income tax audit files</li>
									<li>Analyzed above records in Excel and used Income Tax Act provisions to ensure compliance and reassess income tax</li>
									<li>Used CaseWare IDEA accounting software to sample and examine transactions in general ledgers to detect false reporting</li>
									<li>Assisted in meetings with taxpayers, their representatives and third parties to keep a detailed record of audit procedures</li>
									<li>Researched on internet, verified proofs and used Excise Tax Act provisions to correctly assess excise tax refunds</li>
								</ul>
							</dd>
						</li>
						<li>
							<dt>Florist Cote-Vertu</dt>
							<dd>
								<ul className='buttonList'>
									<li>Assisted with website and social media to promote the store online, learning about search engine optimization</li>
									<li>Filled internet, phone and walk-in orders for flower arrangements, looking up delivery addresses, making calls to recipients to confirm availability, sending follow-up emails to clients, to meet the customers’ high expectations and standards</li>
									<li>Planned and decorated store displays to change looks every season and potentially attract more walk-in customers</li>
									<li>Helped with opening and closing of the store, cash register and card machine to manage daily operations</li>
								</ul>
							</dd>
						</li>
					</ul>
				</dd>
				<hr />
				<dt>Volunteer and Extracurricular Activities</dt>
				<dd>
					<ul>
						<li>
							<dt>K-RAVE KPop Club (McGill University) - VP Finance</dt>
							<dd>
								<ul className='buttonList'>
									<li>Collected receipts and recorded financial transactions for audit and funding purposes</li>
									<li>Practiced financial decision-making for club activities</li>
									<li>Oversaw budgeting to ensure the short-term and long-term financial stability of the club</li>
								</ul>
							</dd>
						</li>
					</ul>
				</dd>
				<hr />
				<dt>Awards</dt>
			</dl>
		);
	}
}

export default Resume;