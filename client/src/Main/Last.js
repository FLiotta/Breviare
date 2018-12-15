import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
	<div className="row justify-content-center">
        <div className="col-md-6">
            <hr/>
            <h5 className="text-center animated fadeIn">
                <Link to={'/' + props.id} style={{color: "#E3AA13"}}>
          	        brevia.re/{props.id}
                </Link>
            </h5>
            <hr/>
        </div>
    </div>
);