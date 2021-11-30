import {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  //create an axios to retrieve photos
  const [pictures, setPictures] = useState([]);

  useEffect (() =>{
    getPictures();
  },[],
  )

  let getPictures = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log('axios response is:', response)
      setPictures(response.data);
      console.log(response.data); 
    }).catch((err) =>{
      console.log('axios err:', err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div className = "pictures">
          <GalleryList pictures = {pictures} getPictures = {getPictures}/>
      </div>
      </div>
    );
}

export default App;
