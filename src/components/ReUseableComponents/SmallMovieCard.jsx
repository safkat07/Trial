import { IoMdStar } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const SmallMovieCard = ({ movieTitle, movieRating, movieHours, moviePoster, movieGenre, movieQuality }) => {
    return (
        <div className='w-full text-center cursor-pointer  h-full mx-auto'>
            <div className='w-full'>
                <img className='size-[420px] object-cover object-top mx-auto rounded-[3.5rem]  border-2 border-neutral-400' src={moviePoster} alt="" />
            </div>
            <div className='space-y-1.5 text-neutral-200'>
                <p className='text-2xl uppercase pt-5 font-medium tracking-tighter'>{movieTitle}</p>
                <div className='flex justify-center text-neutral-400 gap-x-5 items-center'>
                    <p className='flex items-center gap-0.5'><span className='text-xl text-orange-500'><IoMdStar /></span> {movieRating}</p>
                    <p className='flex items-center gap-0.5'><span className='text-xl text-neutral-600'><MdOutlineAccessTimeFilled /></span> {movieHours}</p>
                    <p className='flex items-center gap-1'><span className='text-xs font-bold bg-neutral-500 rounded-sm p-0.5 text-white'>4k</span> {movieQuality} Quality</p>
                </div>
                <p className='text-neutral-400 tracking-wide'>{movieGenre}</p>
            </div>
        </div>
    )
}

export default SmallMovieCard 