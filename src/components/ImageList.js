import React from 'react';
import pics from '../api/pics';
import './ImageListCard.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component{
    state= { images: [], div:[]};

    componentDidMount(){
        let term = this.props.match.params.text;
        this.getImages(term);
    }
    
    getImages = async (term) =>{ 
        let data = await pics.get('search/photos',{
            params:{query : term},
        });
        this.setState({images: data.data.results});  
    }
    render(){    
        const images = this.state.images.map((img) =>{
            return (
                    <ImageCard image={img} key={img.id}/>
            )              
        });
        
        return(
            <div> 
                <div >
                    <div className="column">
                        {images}
                    </div> 
                </div>
            </div>
                
        )
    }
}

export default ImageList;