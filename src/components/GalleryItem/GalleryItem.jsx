import React, {useState} from "react";
import axios from 'axios';

function GalleryItem (props) {
    const [showDescription, setShowDescription] = useState (false);

    let displayDescription = () => {
        if(showDescription){
            return(props.item.description)
        } else {
            return ( 
                <img className = 'image'
                width = {100}
                height = {100}
                src = {props.item.path}></img>
            );
        }
    }

    let handleClick = (event) => {
        let id = props.item.id;
        axios.put(`/gallery/like` + id)
        .then((response) => {
            console.log('the /gallery/like response is', response)
            props.getPictures();
        }).catch((err) => {
            console.log('/gallery/like err', err);
        })

    }

    let hooverDescription = () => {
        setShowDescription(!showDescription);
    }
    return (
        <div>
            <div onCLick={hooverDescription}> {displayDescription()}
            <p>Likes : {props.item.likes}</p>
            <button onCLick={handleClick}>like 👍🏽</button>
            </div>
        </div>
    )
    }


    export default GalleryItem;