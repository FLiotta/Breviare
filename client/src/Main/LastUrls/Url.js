import React from 'react';
import {Link} from 'react-router-dom';
import './Url.css';

export default (props) => (
	 <div className="row justify-content-md-center">
        <div className="col-md-6">
            <p className="text-left animated fadeIn">
                <Link to={"/" + props.id} target="_blank" className="url">breviare.herokuapp.com/{props.id}</Link>
            </p>
        </div>
    </div>
);