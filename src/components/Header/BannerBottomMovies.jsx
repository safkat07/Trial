
import { GridLoader } from 'react-spinners';
import SmallMovieCard from '../ReUseableComponents/SmallMovieCard';
import useMovieList from '@/Hooks/UseMovieList';

const BannerBottomMovies = () => {
    const [movies, loading] = useMovieList()
    return (
        <div className='bg-[#181818] relative -mt-20 rounded-[3rem]'>

            {loading ? <div className='flex justify-center items-center '>
                <GridLoader
                    color='#ffffff'
                    size={50}
                />
            </div>
                :
                <div className="relative -top-10">
                    <div className='grid grid-cols-4 px-32 mx-auto gap-x-10'>
                        {movies.map((movie, index) => (
                            <SmallMovieCard key={index} {...movie} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default BannerBottomMovies