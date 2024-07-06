import { IoMdStar } from "react-icons/io";
import { RiMenuFold2Line } from "react-icons/ri";
import { FaChromecast } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import IconContainer from "./IconContainer";
import { FaPlay } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const icons = [
    { icon: <RiMenuFold2Line />, label: 'Menu' },
    { icon: <FaChromecast />, label: 'Chromecast' },
    { icon: <CiHeart />, label: 'Heart' },
    { icon: <RiShare2Line />, label: 'Share' }
];

const ReleaseCards = ({ movieTitle, movieRating, movieHours, moviePoster, movieGenre, movieQuality }) => {
    return (
        <div className='w-full group text-start cursor-pointer  h-full mx-auto'>
            <div className='w-full relative overflow-hidden'>
                <img className=' object-cover group-hover:brightness-50 h-[480px] object-top mx-auto rounded-3xl ' src={moviePoster} alt="" />
                <div className="absolute flex flex-col space-y-2 top-5 group-hover:right-5 -right-full transition-all duration-500">
                    {
                        icons.map((item, index) => (
                            <IconContainer className={"PrimaryHoverEffect"} key={index} iconName={item.icon} />
                        ))
                    }
                </div>
                <div className="absolute  left-1/2 top-1/2 text-5xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <FaPlay />
                </div>

                <div className="absolute group-hover:left-5 -left-full top-3/4 transition-all duration-500">
                    <div className='space-y-1.5 text-neutral-200'>
                        <p className='text-2xl uppercase  pt-5 font-medium tracking-tighter'>{movieTitle}</p>
                        <div className='flex justify-start text-neutral-400 gap-x-5 items-center'>
                            <p className='flex items-center gap-0.5'><span className='text-xl text-orange-500'><IoMdStar /></span> {movieRating}</p>
                            <p className='flex items-center gap-0.5'><span className='text-xl text-neutral-600'><MdOutlineAccessTimeFilled /></span> {movieHours}</p>
                            <p className='flex items-center gap-1'><span className='text-xs font-bold bg-neutral-500 rounded-sm p-0.5 text-white'>4k</span> {movieQuality} Quality</p>
                        </div>
                        <p className='text-neutral-400 tracking-wide'>{movieGenre}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReleaseCards



{/* <div className='space-y-1.5 text-neutral-200'>
<p className='text-2xl uppercase pt-5 font-medium tracking-tighter'>{movieTitle}</p>
<div className='flex justify-center text-neutral-400 gap-x-5 items-center'>
    <p className='flex items-center gap-0.5'><span className='text-xl text-orange-500'><IoMdStar /></span> {movieRating}</p>
    <p className='flex items-center gap-0.5'><span className='text-xl text-neutral-600'><MdOutlineAccessTimeFilled /></span> {movieHours}</p>
    <p className='flex items-center gap-1'><span className='text-xs font-bold bg-neutral-500 rounded-sm p-0.5 text-white'>4k</span> {movieQuality} Quality</p>
</div>
<p className='text-neutral-400 tracking-wide'>{movieGenre}</p>
</div> */}