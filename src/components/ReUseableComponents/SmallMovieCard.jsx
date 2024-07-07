import { IoMdStar } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Md4K } from "react-icons/md";

const SmallMovieCard = ({ movieTitle, movieRating, movieHours, moviePoster, movieGenre, movieQuality }) => {
    return (
        <div className='w-full text-center cursor-pointer  h-full mx-auto'>
            <div className='w-full'>
                <img className=' object-cover object-top mx-auto rounded-[3.5rem] ' src={moviePoster} alt="" />
            </div>
            <div className='space-y-1.5 text-neutral-200'>
                <p className='text-2xl uppercase pt-5 font-medium tracking-tighter'>{movieTitle}</p>
                <div className='flex justify-center text-neutral-400 xl:gap-x-5 items-center'>
                    <p className='flex items-center  gap-0.5'><span className='xl:text-xl text-sm tracking-tighter text-orange-500'><IoMdStar /></span> {movieRating}</p>
                    <p className='flex items-center text-nowrap gap-0.5'><span className='xl:text-xl text-sm tracking-tighter text-neutral-600'><MdOutlineAccessTimeFilled /></span> {movieHours}</p>
                    <p className='flex items-center text-nowrap  gap-0.5'><span className='xl:text-xl text-sm tracking-tighter text-neutral-600'><Md4K /></span> {movieQuality} Quality</p>
                </div>
                <p className='text-neutral-400 tracking-wide'>{movieGenre}</p>
            </div>
        </div>
    )
}

export default SmallMovieCard 