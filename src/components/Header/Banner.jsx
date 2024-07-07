import img1 from '../../assets/bannerImage.png';
import MaxContentWrapper from '../ReUseableComponents/MaxContentWrapper';
import ReviewCard from '../ReUseableComponents/ReviewCard';
import { IoMdStar } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import PrimaryButton from '../ReUseableComponents/PrimaryButton';
import { IoTime } from "react-icons/io5";
import { Md4K } from "react-icons/md";
import arrow from '../../assets/arrow.png'
import BannerIcons from './BannerIcons';
import BannerBottomMovies from './BannerBottomMovies';
import useMovieList from '@/Hooks/UseMovieList';






const Banner = () => {
    const [movies] = useMovieList()
    return (
        <div className='h-full'>
            <div className='relative h-screen'>
                <img className='object-cover object-top w-full h-full' src={img1} alt="The Lord of the Rings" />
                <div className='absolute inset-0'>
                    <MaxContentWrapper className="flex justify-between items-center h-full">
                        <div className='absolute text-white bottom-28'>
                            <p className='text-4xl'>01<span className='text-neutral-500'>/0{movies?.length}</span></p>
                            <img className='w-1/2 mt-32' src={arrow} alt="Arrow" />
                        </div>
                        <div className='flex absolute gap-x-20 right-10 text-white'>
                            <div>
                                <p className='uppercase font-semibold xl:text-9xl text-5xl leading-none tracking-tight'>
                                    The Lord <br /> of the Rings
                                </p>
                                <div className='flex items-center gap-2.5 mt-5'>
                                    <ReviewCard Icon={<IoMdStar />} text={"4.9 Reviews"} />
                                    <ReviewCard Icon={<IoTime />} text={"02h 30m"} />
                                    <ReviewCard Icon={<Md4K />} text={"4k Quality"} />
                                </div>
                                <p className='mt-5 max-w-xl text-neutral-400'>
                                    The Lord of the Rings is a trilogy of epic fantasy adventure films directed.
                                </p>
                                <div className='flex mt-5 gap-5'>
                                    <PrimaryButton className="text-sm px-7 py-5" btnIcon={<IoPlay />} btntitle="Play Trailer" />
                                    <PrimaryButton className="bg-none border border-neutral-600 text-neutral-400 text-sm px-7 py-5" btnIcon={<IoPlay />} btntitle="Add to list" />
                                </div>
                            </div>
                            <BannerIcons />
                        </div>
                    </MaxContentWrapper>
                </div>
            </div>

            <MaxContentWrapper className="py-10">
                <BannerBottomMovies />
            </MaxContentWrapper>
        </div>
    );
};

export default Banner;
