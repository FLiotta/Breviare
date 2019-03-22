import React, { Component } from 'react';
import axios from 'axios';
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
      error: undefined,
      new: undefined
    }
    this.generateUrl = this.generateUrl.bind(this);

  }

  componentWillMount(){
    const localUrls = localStorage.getItem('urls');
    if(localUrls){
      this.setState(({urls: JSON.parse(localUrls)}));
    }
  }

  generateUrl(url){
    this.setState(() => ({ generateInProcess: true }));

    axios.post('/api/generateUrl', { url: url })
        .then((res) => { 
          if(!this.state.urls.includes(res.data.id)){
            this.setState((prevState) => {
              let urls = [...prevState.urls, res.data.id];

              if(urls.length > 3)
                urls.shift();

              localStorage.setItem("urls", JSON.stringify(urls));

              return {
                urls,
                generateInProcess: false,
                new: true
              }
            })
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
        {(this.state.urls.length > 0 && this.state.new )&& (
          <Last id={this.state.urls[this.state.urls.length - 1]} />
        )}
        <LastUrls urls={this.state.urls}/>
      </div>
    );
  }
}

export default Main;
