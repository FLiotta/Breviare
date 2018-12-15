import React from 'react';

export default (props) => {

    function handleSubmit(e) {
        e.preventDefault();
        props.generateUrl(e.target.elements.url.value);
    }
    return (
        <div className="row justify-content-md-center animated fadeInUp">
            <div className="col-md-6">
                <form id="urlForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="url" id="url" disabled={props.generateInProcess}/>
                    </div>
                    <div class="form-group">
                        <input type="submit" className="btn btn-warning btn-block" style={{color: "white"}} value="SHORTEN URL"/>
                    </div>
                </form>
            </div>
        </div> 
    );
};