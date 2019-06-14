import React from 'react';
import {connect} from 'react-redux';
import {generateUrl} from '../actions/url';

const Form = (props) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		if(e.target.url.value == "hello")
			return alert("hi :)")
		props.generateUrl(e.target.url.value);
	}

	return (
		<form onSubmit={handleSubmit} id="url-form">
			<div className="row">
				<div className="col-12 col-md-11">
					<div className="form-group" id="url-container">
						<input type="text" className="form-control" disabled={props.isLoading} id="url-input" name="url" />
					</div>
				</div>
				<div className="col-12 col-md-1">
					<div className="form-group d-md-block d-none" id="url-btn-container">
						<button type="submit" disabled={props.isLoading} className="btn btn-warning" id="generate-button">
							<i className="fas fa-cut"></i>
						</button>
					</div>
					<div className="form-group d-block d-md-none" id="url-btn-container-mobile">
						<button type="submit" className="btn btn-warning btn-block btn-lg" id="generate-button-mobile">
							<i className="fas fa-cut"></i>
						</button>
					</div>
				</div>
			</div>
		</form>
	)
}

const mapStateToProps = state => ({
	isLoading: state.url.isLoading
})

const mapDispatchToProps = dispatch => ({
	generateUrl: (url) => dispatch(generateUrl(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);