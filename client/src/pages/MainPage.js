import React from 'react';
import Form from '../components/Form'
import Last from '../components/Last';

export default (props) => (
	<div className="row justify-content-center" id="Page-container">
		<div className="col-12 col-md-10 col-lg-8">
			<div className="row justify-content-center">
				<div className="col-12 col-md-9">
					<Form />
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-12 col-md-10">
					<Last />
				</div>
			</div>
		</div>
	</div>
)