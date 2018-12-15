import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header/Header';
import UrlForm from './UrlForm/UrlForm';
import LastUrls from './LastUrls/LastUrls';
import Last from './Last';

class Main extends Component {

  constructor(){
    super();
    this.state = {
      urls: [],
      generateInProcess: false,
      error: undefined
    }
    this.generateUrl = this.generateUrl.bind(this);

  }

  generateUrl(url){
    this.setState(() => ({ generateInProcess: true }));

    axios.post('/api/generateUrl', { url: url })
        .then((res) => { 
          if(!this.state.urls.includes(res.data.id)){
            this.setState((prevState) => ({
              urls: [...prevState.urls, res.data.id],
              generateInProcess: false
            }))
          }          
        })
        .catch((e) => {
          this.setState(() => ({ generateInProcess: false, error: "There were an error generating the URL." }));
        }); 
  }

  render() {
    return (
      <div style={{paddingTop: "50px"}}>
        <Header />        
        <UrlForm generateUrl={this.generateUrl} generateInProcess={this.state.generateInProcess} />
        {this.state.urls.length > 0 && (
          <Last id={this.state.urls[this.state.urls.length - 1]} />
        )}
        <LastUrls urls={this.state.urls}/>
      </div>
    );
  }
}

export default Main;
