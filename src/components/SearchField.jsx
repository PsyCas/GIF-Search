import React from "react";
import axios from "axios";
import GifCard from "../components/GifCard";


const KEY = "nKmONZgLQfDtKFUBIGGHAWB9JdjQcZxP";

class SearchField extends React.Component{

    constructor(props){
        super(props);

        this.state={
            gifs: this.props.gifs,
            searchTerm: "",
            isLoaded: this.props.isLoaded
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(event){
        
        event.preventDefault();
        console.log(event.target.children[1].value);
        const URL = `http://api.giphy.com/v1/gifs/search?q=${event.target.children[1].value}&api_key=${KEY}`;
        axios.get(URL)
        .then(response => {
            
            this.setState({
                gifs: response.data,
                isLoaded: true,
            });
            console.log(this.state.gifs.data[0].images.downsized.url);
        })

        .catch(err=>{
            console.log(err);
        });
        }

    render(){

        return(
            <div>
                <button onClick={this.props.fetchTrendingData}>Trending GIFs</button>
                <form onSubmit={this.fetchData}>
                    <label>Search for a gif:</label>
                    <input type="text"/>
                    
                </form>
                
                {this.state.isLoaded? (<GifCard gifs={this.state.gifs} isLoaded={this.state.isLoaded}/>): <div>Loading...</div>}
            </div>
        );
    }
}

export default SearchField;