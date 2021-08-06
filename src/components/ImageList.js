import React from 'react';
import pics from '../api/pics';
import Parser from 'html-react-parser';
import './ImageListCard.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component{
    state= { images: [], div:[]};

    componentDidMount(){
        let term = this.props.match.params.text;
        this.getImages(term);
    }
    
     //para = this.props.match.params;
    getImages = async (term) =>{ 
        let data = await pics.get('search/photos',{
            params:{query : term},
        });
        
        //console.log(data.data.results);
        this.setState({images: data.data.results});
        //<div className="column" >  
    }
    render(){    
        let result =[], result2 = [], res = [[],[]];

        const images = this.state.images.map((img, index) =>{

            // if(index % 5 === 0){
            //     //console.log(index);
            //     result2 = "column";
            //     //console.log(result2);
            //     res.push(result2);
            // }
            // //console.log( `<img src=${img.urls.regular} alt=${img.alt_description} key=${img.id}`);
            // result =img.urls.regular;
            // res.push(result);
            // //res.imgg = result;
            

            return (
                    <ImageCard image={img} key={img.id}/>
            )              
        });
        
        // const finRes = res.map((div,index) =>{
        //     let dd;
        //     if(div =="column"){
        //         console.log('ad'); 
        //         dd = "column";
        //         return <div className="column"></div>
        //     }

        //     console.log(div);
        //     return <img src={div}/>;

        // });
        // console.log(finRes);console.log(images);
        
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