import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import SearchField from './components/SearchField';

const KEY = `${process.env.REACT_APP_KEY}`;


class App extends React.Component {

  constructor(props){

    super(props);
    this.state= {
      gifs: this.props.gifs,
      isLoaded: false
    }

    this.fetchTrendingData = this.fetchTrendingData.bind(this);
  }


  fetchTrendingData(){

    const URL = `http://api.giphy.com/v1/gifs/trending?api_key=${KEY}`;
    axios.get(URL)
      .then(response => {
        this.setState({
          gifs: response.data,
          isLoaded: true
        });
      })

      .catch(err=>{
        console.log(err);
      });

      return
  }

  componentDidMount(){
    this.fetchTrendingData();
  }
  
  render() {
    return (
      <div id="body-wrapper">
        {this.state.isLoaded? <SearchField gifs={this.state.gifs} isLoaded={this.state.isLoaded}/>: <h1 id="loading-image">Loading...</h1>}
      </div>
    );
  }
}

export default App;