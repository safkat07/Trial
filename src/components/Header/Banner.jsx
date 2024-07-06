import { useEffect, useState } from 'react';
import img1 from '../../assets/bannerImage.png';
import MaxContentWrapper from '../ReUseableComponents/MaxContentWrapper';
import { GoHome } from "react-icons/go";
import IconContainer from '../ReUseableComponents/IconContainer';
import ReviewCard from '../ReUseableComponents/ReviewCard';
import { IoMdStar } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import PrimaryButton from '../ReUseableComponents/PrimaryButton';
import SmallMovieCard from '../ReUseableComponents/SmallMovieCard';

const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/movies.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <div className='h-full'>
            <div className='relative h-screen'>
                <img className='object-cover object-top w-full h-full' src={img1} alt="The Lord of the Rings" />
                <div className='absolute inset-0 '>
                    <MaxContentWrapper className="flex justify-between items-center h-full">
                        <div className='absolute text-white bottom-28'>
                            <p className='text-4xl'>01<span className='text-neutral-500 py-44'>/05</span></p>
                            <div className='flex flex-col items-start mt-8'>
                                <p className='text-lg' style={{ writingMode: "vertical-lr", textOrientation: 'revert-layer' }}>
                                    Scroll down
                                </p>
                            </div>
                        </div>
                        <div className='flex absolute gap-x-20 right-10 text-white'>
                            <div>
                                <div className='text-left'>
                                    <p className='uppercase font-semibold text-9xl leading-none inline-block tracking-tight'>
                                        The Lord <br /> of the Rings
                                    </p>
                                </div>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <ReviewCard Icon={<IoMdStar />} text={"4.9 Reviews"} />
                                    <ReviewCard Icon={<IoMdStar />} text={"02h 30m"} />
                                    <ReviewCard Icon={<IoMdStar />} text={"4k Quality"} />
                                </div>
                                <p className='mt-5 max-w-xl'>The Lord of the Rings is a trilogy of epic fantasy adventure films directed.</p>
                                <div className='flex mt-5 gap-5'>
                                    <PrimaryButton btnIcon={<IoPlay />} btntitle={"Play Trailer"} />
                                    <PrimaryButton className={"bg-none border border-neutral-600 text-neutral-400"} btnIcon={<IoPlay />} btntitle={"Add to list"} />
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex flex-col gap-y-2.5 text-white bg-[#131212] px-2 py-3.5 rounded-full'>
                                    <IconContainer iconName={<GoHome />} />
                                    <IconContainer iconName={<GoHome />} />
                                    <IconContainer iconName={<GoHome />} />
                                    <IconContainer iconName={<GoHome />} />
                                    <IconContainer iconName={<GoHome />} />
                                    <IconContainer iconName={<GoHome />} />
                                    <IconContainer iconName={<GoHome />} />
                                </div>
                            </div>
                        </div>
                    </MaxContentWrapper>
                </div>
            </div>

            {/* movie list */}
            <MaxContentWrapper className={"py-10"}>
                <div className='bg-[#181818] relative -mt-20 rounded-[3rem]'>
                    <div className="relative -top-10">
                        <div className='grid grid-cols-4 px-32 mx-auto justify-center items-center gap-x-10'>
                            {movies.map((movie, index) => (
                                <SmallMovieCard key={index} {...movie} />
                            ))}
                        </div>
                    </div>
                </div>
            </MaxContentWrapper>
        </div>
    );
};

export default Banner;
