import React from 'react';
import Url from './Url';
import './Url.css';

export default (props) => (
	<div>
		<div className="row justify-content-md-center animated fadeInUp">
	        <div className="col-md-6">
	            <h6 className="text-left" className="url">Latests URLs</h6>                
	        </div>            
	    </div>
		<div>
			{
	          props.urls.map(url => <Url key={url} id={url}/>)
	        }
		</div>
	</div>
);