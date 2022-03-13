import React from 'react';
import { useState, useEffect } from 'react';



export default function NasaPhoto(){
    const [photoData, setPhotoData] = useState(null);

    const apiKey = 'LXpdsX3u0yZ2PTSR42dTLzeojjgOtlOYw3rTymp6'
    const apiImageURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    useEffect(()=>{
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
                `apiImageURL`
            );
            const data = await res.json();
            setPhotoData(data)
        }
    },[]);
    if(!photoData) return <div/>

    return (
        <div>
            <img
                src={photoData.url}
                alt={photoData.title}
            />
        </div>
    )
}