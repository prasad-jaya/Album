import React from 'react';
import Header from './Header';
import AlbumList from './AlbumList';
import { BrowserRouter, Route } from "react-router-dom";
import ImageCard from './ImageList';

import animal from './images/animal.jpg';
import foods from './images/foods.jpg';
import street from './images/street.jpg';
import building from './images/buildings.jpg';
import city from './images/city.jpg';
import travel from './images/travel.jpg';

class App extends React.Component{

    

    state = {images: [
                    {url:animal, text:"animal", id: 1},
                    {url:building, text:"building", id: 4},
                    {url:city, text:"city", id: 5},
                    {url:foods, text:"Foods", id: 2},
                    {url:street, text:"Street", id: 3},
                    {url:travel, text:"travel", id: 6}
                ]};

    render(){

        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route path="/" exact component={()=><AlbumList images={this.state.images}/>}/> 
                    <Route path="/images/:text" exact component={ImageCard}/>
                </BrowserRouter>
            </div>
        );
    }


}

export default App;

