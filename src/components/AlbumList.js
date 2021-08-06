import React from 'react';
import './AlbumList.css';
import { Link } from 'react-router-dom';


const AlbumList = (props) => {

    const images = props.images.map((img) =>{
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
    
    
    //console.log(props.images);

    return <div className="container">{images}</div>
}




export default AlbumList;