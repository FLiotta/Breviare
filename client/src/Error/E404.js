import React from 'react';
import './E404.css';

export default () => (
	<div>
		<div className="row justify-content-center" style={{paddingBottom: "1%"}}>
            <div className="col-md-6">
                <h1 className="text-center animated fadeIn" id="error_code">404</h1>
                <h4 className="text-center animated fadeIn" id="error_description">URL Not found.</h4>
            </div>
        </div> 
        <div className="row justify-content-md-center" style={{paddingBottom: "1%"}}>
            <div className="col-md-6">
                <a href="/"><button className="btn btn-warning btn-block animated fadeIn" style={{color: "white"}}>Take me back</button></a>
            </div>
        </div> 
        <div className="row justify-content-center" style={{paddingTop: "1%"}}>
            <div className="col-2">
                <img src="/img/logo2.jpg" className="img-fluid mx-auto d-block animated fadeInUp" alt="logo"/>
            </div>
        </div> 
	</div>
);