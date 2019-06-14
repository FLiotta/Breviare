import React, {Component} from 'react';
import axios from 'axios';

class RedirectPage extends Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		axios.get(`http://localhost:5000/api/${this.props.match.params.id}`)
			.then((res) => {
				window.location.href = res.data;
				console.log("es");
			})
			.catch(e => window.location.href = '/404');
	}

	render(){
		return (
			<div>
				<p>You're being redirected...</p>
			</div>
		)
	}
}

export default RedirectPage;