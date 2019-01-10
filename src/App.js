import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';

const KEY = "nKmONZgLQfDtKFUBIGGHAWB9JdjQcZxP";

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
        
        console.log(this.state.gifs.data)
      })

      .catch(err=>{
        console.log(err);
      });
  }

  componentDidMount(){
    this.fetchTrendingData();
  }
  
  render() {
    return (
      <div>
        {this.state.isLoaded? <SearchField gifs={this.state.gifs} isLoaded={this.state.isLoaded} fetchTrendingData={this.fetchTrendingData}/>: <div>Loading</div>}
      </div>
    );
  }
}

export default App;