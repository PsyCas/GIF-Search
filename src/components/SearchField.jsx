import React from "react";
import axios from "axios";
import GifCard from "../components/GifCard";
import "./SearchField.css"


const KEY = `${process.env.REACT_APP_KEY}`;

class SearchField extends React.Component{

    constructor(props){
        super(props);

        this.state={
            gifs: this.props.gifs,
            searchTerm: "",
            isLoaded: this.props.isLoaded,
        }
        this.fetchData = this.fetchData.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState(){
        this.setState({
            gifs: this.props.gifs
        });
    }

    fetchData(event){

        console.log("inside fetch data");
        event.preventDefault();
        const url = `http://api.giphy.com/v1/gifs/search?q=${event.target.children[0].value}&api_key=${KEY}`;
        
        axios.get(url)
        .then(response => {
            
            this.setState({
                gifs: response.data,
                isLoaded: true,
            });
        })

        .catch(err=>{
            console.log(err);
        });
        }

    render(){

        return(
            <div id = "main-body">
                <div id="header-wrapper">
                    <button id= "trending-button" onClick={this.resetState}>Trending</button>

                    <form id="form-submit" onSubmit={this.fetchData}>
                        <input id="form-input" type="text" placeholder="Search for awesomeness..."/>
                    </form>
                </div>
                {this.state.isLoaded? (<GifCard gifs={this.state.gifs} isLoaded={this.state.isLoaded} isRandom={this.state.isRandom}/>): <div>Loading...</div>}
            </div>
        );
    }
}

export default SearchField;