import React from 'react';
import axios from 'axios';


export default (props) => {
	axios.get(`/api/${props.match.params.id}`)
		.then((res) => {
			window.location.href = res.data;
			console.log(res);
		})
		.catch(e => window.location.href = '/404');
	
	return (
		<div>
		<p>You're being redirected...</p>
		</div>
	);
};