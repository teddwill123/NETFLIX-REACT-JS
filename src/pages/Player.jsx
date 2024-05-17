import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import backIcon from '../assets/images/back_arrow_icon.png'


const Player = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [aipData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzI3NjRlOGNkMGM2MzkwMjJlYzQxYWQ2OWIzMjI2YiIsInN1YiI6IjY2MDk0YWI2YTZkZGNiMDE2MzQ2OGY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7j9lCDhsK0e-rxuohkp4LItVk6cm0Lk8gY9OdYbMF64'
        }
      };
      


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
    },[])




  return (
    <div className=' h-screen flex flex-col justify-center items-center'>
<img className="absolute top-5 left-5 w-10 cursor-pointer" src={backIcon} onClick={() => navigate(-2)} />
      <iframe
        className='rounded-lg'
        width='80%'
        height='80%'
        src={`https://www.youtube.com/embed/${aipData.key}`}
        title='trailer'
        frameBorder='0'
        allowFullScreen
      />
      <div className='flex justify-between items-center w-[90%] text-white'>
        <p className=''>{aipData.published_at.slice(0, 10)}</p>
        <p>{aipData.name}</p>
        <p>{aipData.type}</p>
      </div>
    </div>
    
  )
}

export default Player
