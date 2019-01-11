import React from "react";
import "./GifCard.css"

class GifCard extends React.Component{

    // constructor(props){
    //     super(props);

    //     this.state={
    //         gifs: this.props.gif
    //     }
    // }
    render(){

        let parseData = [];
        for (var i = 0; i<25; i++){
            parseData[i] = this.props.gifs.data[i].images.fixed_height_downsampled.url;
        }

        return(       
            <div id="gif-wrapper">
                {this.props.isLoaded? parseData.map((element) =>{ 
                    //console.log(element);
                    return(<img id= "gif-id" src={element}></img>);
                }): <div>Loading...</div>}
            </div>

        );
    }
}

export default GifCard;