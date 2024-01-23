import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const useGif = (tag) => {
  
    const API_KEY = 'VpCcEJwRaBmbZPeA6bCx9aCeJUEZ6mw4';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
    

    async function fetchData(tag){

        setLoading(true);
        
        const {data} = await axios.get(tag? `${url}&tag=${tag}` : url);
        // console.log(output);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);

    }

    useEffect( () => {
        fetchData(tag);
    },[]);

    return {gif,loading,fetchData};

    

}
