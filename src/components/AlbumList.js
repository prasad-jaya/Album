import React from 'react';
import './AlbumList.css';
import { Link } from 'react-router-dom';

import animal from './images/animal.jpg';
import foods from './images/foods.jpg';
import street from './images/street.jpg';
import building from './images/buildings.jpg';
import city from './images/city.jpg';
import travel from './images/travel.jpg';


class AlbumList extends React.Component{
    constructor(props){
        super(props);
        this.state = {images: [
            {url:animal, text:"animal", id: 1},
            {url:building, text:"building", id: 4},
            {url:city, text:"city", id: 5},
            {url:foods, text:"Foods", id: 2},
            {url:street, text:"Street", id: 3},
            {url:travel, text:"travel", id: 6}
        ]};

        this.sortAsc = this.sortAsc.bind(this);
        this.sortDesc = this.sortDesc.bind(this);

        
    }

    sortAsc(){
        let sort  = this.state.images.sort(function(a,b){
            return (a.text.localeCompare(b.text));
        });
        this.setState({images: sort});     
    }


    sortDesc(){
        let sort  = this.state.images.sort(function(a,b){
            return (b.text.localeCompare(a.text));
        });
        this.setState({images: sort});
    }

   
    render(){

        const images = this.state.images.map((img) =>{
            return (
                <div key={img.id}>     
                    <div className="card">
                        <Link to={`/images/${img.text}`}  texte={{ text: "hello" }}>
                            <img src={img.url} alt="Avatar" key={img.id}/>
                        </Link>
                        <div className="card-text">
                            <h4>{img.text}</h4>
                            <p>5 items</p>
                        </div>
                    </div>
                    
                </div>
                )
        });
 

        return (
            <div>
                <div className="dropdown">
                <button className="dropbtnn">Sort By: ASC</button>
                    <div className="dropdown-content">
                                <button onClick={this.sortAsc} className="dropbtnn">Sort By: ASC</button>
                                <button className="dropbtnn" onClick={this.sortDesc}href="/">Sort By: DESC</button>
                            </div>
                </div>

                <div className="container">
                    {images}
                </div>
            </div>
        )
    }
}




export default AlbumList;