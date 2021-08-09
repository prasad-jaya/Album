import React from 'react';
import Header from './Header';
import AlbumList from './AlbumList';
import { BrowserRouter, Route } from "react-router-dom";
import ImageCard from './ImageList';

class App extends React.Component{

    render(){

       

        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route path="/" exact component={AlbumList}/> 
                    <Route path="/images/:text" exact component={ImageCard}/>
                </BrowserRouter>
            </div>
        );
    }


}

export default App;

