import React from "react";

class GifCard extends React.Component{

    // constructor(props){
    //     super(props);

    //     this.state={
    //         gifs: this.props.gif
    //     }
    // }
    render(){
        
        console.log(this.props.isLoaded);
        console.log("IN GIFCARD.GSX");
        let parseData = [];
        if(this.props.isLoaded){
            for (var i = 0; i<25; i++){
                parseData[i] = this.props.gifs.data[i].images.fixed_height_downsampled.url;
            }
        }

        return(       
            <div>
                {this.props.isLoaded? parseData.map((element) =>{ 
                    //console.log(element);
                    return(<img src={element}></img>);
                }): <div>Loading...</div>}
            </div>

        );
    }
}

export default GifCard;