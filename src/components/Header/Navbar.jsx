import logoicon from '../../assets/logo.webp'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";

import MaxContentWrapper from '../ReUseableComponents/MaxContentWrapper'
import PrimaryButton from '../ReUseableComponents/PrimaryButton';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(scrollY);
    return (
        <nav className={`text-white py-3.5 fixed z-50 w-full transition-all duration-500 ${scrollY && "bg-[#181818] "}`}>
            <MaxContentWrapper className={"flex justify-between items-center"}>
                <div className='flex gap-x-7 items-center '>
                    <div className='flex cursor-pointer items-center gap-1'>
                        <img className='w-12' src={logoicon} alt="" />
                        <p className='text-4xl font-semibold'>Holaa</p>
                    </div>
                    <span className='border p-1.5 cursor-pointer  rounded-full'>
                        <HiOutlineMenuAlt1 className=' text-2xl  inline-block ' />
                    </span>
                </div>

                <div className='flex items-center gap-x-2.5'>
                    <PrimaryButton btnIcon={<LuCrown />} btntitle={"Subscribe now"} />
                    <button className='text-lg   p-3.5 rounded-full bg-neutral-600'><FaUser /></button>
                </div>
            </MaxContentWrapper>
        </nav>
    )
}

export default Navbar