import React from 'react';
import {connect} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Last = props => (
	<div>
		{props.isLoading
			?	<div className="text-center text-warning animated fadeInUp">
				  <div className="spinner-border" role="status">
				    <span className="sr-only">Loading...</span>
				  </div>
				</div>
			:	props.url 
					&& 	<div>
							<p className="lead animated fadeInDown text-center">
								<a href={"localhost:8080/" + props.url.id} target="_blank" id="url">
									breviare.herokuapp.com/{props.url.id}
								</a>
								<CopyToClipboard text={"localhost:8080/" + props.url.id} style={{display: "inline-block"}}>
							        <button className="btn btn-link" onClick={() => alert("Copied to clipboard!")}>
							        	<i className="copy-clipboard far fa-clipboard" id="clipboard"></i>
							        </button>
							    </CopyToClipboard>
							</p>							
						</div>
		}
	</div>
)

const mapStateToProps = state => ({
	isLoading: state.url.isLoading,
	url: state.url.last
})

export default connect(mapStateToProps)(Last);