import React, { useState } from 'react';
import MaxContentWrapper from '../ReUseableComponents/MaxContentWrapper';
import { IoArrowForward } from "react-icons/io5";
import { useEffect } from 'react';
import ReleaseCards from '../ReUseableComponents/ReleaseCards';



// const movies = [
//     {
//         "movieTitle": "Samelill sronle",
//         "movieRating": 9.5,
//         "movieHours": "02h 30m",
//         "moviePoster": "/src/assets/newRelease3.png",
//         "movieGenre": "Action, Comedy",
//         "movieQuality": "4K"
//     },
//     {
//         "movieTitle": "The family monky",
//         "movieRating": 9.5,
//         "movieHours": "2h 30m",
//         "moviePoster": "/src/assets/newRelease2.png",
//         "movieGenre": "Action, Comedy",
//         "movieQuality": "4K"
//     },
//     {
//         "movieTitle": "World war 02",
//         "movieRating": 9.5,
//         "movieHours": "2h 30m",
//         "moviePoster": "/src/assets/release2.jpg",
//         "movieGenre": "Action, Crime",
//         "movieQuality": "4K"
//     },
//     {
//         "movieTitle": "World war 02",
//         "movieRating": 9.5,
//         "movieHours": "2h 30m",
//         "moviePoster": "/src/assets/release3.jpg",
//         "movieGenre": "Action, Crime",
//         "movieQuality": "4K"
//     },
//     {
//         "movieTitle": "World war 02",
//         "movieRating": 9.5,
//         "movieHours": "2h 30m",
//         "moviePoster": "/src/assets/release4.jpg",
//         "movieGenre": "Action, Crime",
//         "movieQuality": "4K"
//     },
//     {
//         "movieTitle": "World war 02",
//         "movieRating": 9.5,
//         "movieHours": "2h 30m",
//         "moviePoster": "/src/assets/release5.jpg",
//         "movieGenre": "Action, Crime",
//         "movieQuality": "4K"
//     },
//     {
//         "movieTitle": "World war 02",
//         "movieRating": 9.5,
//         "movieHours": "2h 30m",
//         "moviePoster": "/src/assets/release6.jpg",
//         "movieGenre": "Action, Crime",
//         "movieQuality": "4K"
//     },
//     {
//         "movieTitle": "World war 02",
//         "movieRating": 9.5,
//         "movieHours": "2h 30m",
//         "moviePoster": "/src/assets/release7.jpg",
//         "movieGenre": "Action, Crime",
//         "movieQuality": "4K"
//     },
//     {
//         "movieTitle": "World war 02",
//         "movieRating": 9.5,
//         "movieHours": "2h 30m",
//         "moviePoster": "/src/assets/release8.jpg",
//         "movieGenre": "Action, Crime",
//         "movieQuality": "4K"
//     }
// ]

const NewestReleases = () => {
    const [movies, setMovies] = useState([])
    const [startIndex, setStartIndex] = useState(0);
    const cardsToShow = 6; // Number of cards to show at once

    useEffect(() => {
        fetch('/public/newRelease.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.error("error fetching new releases:", err))
    }, [])



    const nextCard = () => {
        if (startIndex + cardsToShow < movies.length) {
            setStartIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevCard = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className='text-white py-10'>
            <MaxContentWrapper>
                <div className='flex justify-between items-center'>
                    <p className='text-5xl uppercase tracking-tighter font-semibold'>Newest Release</p>
                    <div className='flex gap-5 text-3xl items-center'>
                        <button className='rotate-180 border p-2.5 rounded-full border-neutral-500' onClick={prevCard}><IoArrowForward /></button>
                        <button className='p-2.5 border rounded-full border-neutral-500' onClick={nextCard}><IoArrowForward /></button>
                    </div>
                </div>

                <div className='flex pt-10 gap-x-5 '>
                    {movies.slice(startIndex, startIndex + cardsToShow).map((movie, index) => (
                        <ReleaseCards key={index} {...movie} />
                    ))}
                </div>
            </MaxContentWrapper>

        </div>
    );
};

export default NewestReleases;
