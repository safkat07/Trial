import { useState } from 'react';
import MaxContentWrapper from '../ReUseableComponents/MaxContentWrapper';
import { IoArrowForward } from "react-icons/io5";

import ReleaseCards from '../ReUseableComponents/ReleaseCards';
import UseNewReleasedMovieList from '@/Hooks/UseNewReleasedMovieList';
import { GridLoader } from 'react-spinners';

const NewestReleases = () => {
    const [newMovies, loading] = UseNewReleasedMovieList()
    const [startIndex, setStartIndex] = useState(0);
    const cardsToShow = 6;

    const nextCard = () => {
        if (startIndex + cardsToShow < newMovies.length) {
            setStartIndex(prevIndex => prevIndex + 1);
        }
    };

    const prevCard = () => {
        if (startIndex > 0) {
            setStartIndex(prevIndex => prevIndex - 1);
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
                {
                    loading ? <div className='flex justify-center items-center '>
                        <GridLoader
                            color='#ffffff'
                            size={50}
                        />
                    </div> :
                        <div className='flex pt-10 transition-all duration-500 gap-x-5'>
                            {newMovies?.slice(startIndex, startIndex + cardsToShow).map((movie, index) => (
                                <ReleaseCards key={index} {...movie} />
                            ))}
                        </div>
                }

            </MaxContentWrapper>
        </div>
    );
};

export default NewestReleases;
