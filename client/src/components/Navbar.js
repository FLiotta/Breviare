import React from 'react';

export default (props) => (
	<div className="row justify-content-center justify-content-md-start animated rollIn" id="logo_container">	
		<div className="col-6 col-md-3 col-lg-3 col-xl-2">
	   		<img src="/img/logo.png" width="80%" height="80%" className="mx-auto img-fluid d-none d-md-block" alt="logo" />
	   		<img src="/img/logo_mobile.png" className="mx-auto img-fluid d-block d-md-none" id="mobile-logo" alt="logo" />
		</div>
	</div>
);