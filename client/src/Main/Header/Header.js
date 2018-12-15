import React from 'react';
import GitButtons from '../../GitButtons';

export default () => (
	<div className="row justify-content-md-center" style={{paddingBottom: "0%"}}>
        <div className="col-md-6">
            <img src="/img/logo2.jpg" alt="logo" className="img-fluid mx-auto d-block animated fadeInDown"/>
            <br/>
        <GitButtons />
        </div>
    </div>
);