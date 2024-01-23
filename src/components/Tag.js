import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { useGif } from '../hooks/useGif';

const API_KEY = 'VpCcEJwRaBmbZPeA6bCx9aCeJUEZ6mw4';

export const Tag = () => {

    // const [gif,setGif] = useState('');
    // const [loading,setLoading] = useState(false);
    const [tag,setTag] = useState("");
    

    // async function fetchData(){

    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     // console.log(output);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);

    // }

    // useEffect( () => {
    //     fetchData();
    // },[]);

    let {loading,fetchData,gif} = useGif(tag);
    

  return (
    <div className='w-11/12  bg-blue-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random Gif</h1>

        {loading?<Spinner></Spinner>: <img src={gif} width='450'></img>}

        <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag}></input>

        <button onClick={() => fetchData(tag)}
        className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>

    </div>
  )
}

export default Tag;


