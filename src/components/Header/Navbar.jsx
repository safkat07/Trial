import logoicon from '../../assets/logo.webp'
import { CiMenuFries } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";

import MaxContentWrapper from '../ReUseableComponents/MaxContentWrapper'
import PrimaryButton from '../ReUseableComponents/PrimaryButton';

const Navbar = () => {
    return (
        <nav className='text-white top-3.5 fixed inset-x-0 '>
            <MaxContentWrapper className={"flex justify-between items-center"}>
                <div className='flex gap-x-7 items-center '>
                    <div className='flex items-center gap-1'>
                        <img className='w-12' src={logoicon} alt="" />
                        <p className='text-4xl font-semibold'>Holaa</p>
                    </div>
                    <span className='border p-2  rounded-full'>
                        <CiMenuFries className='rotate-180 text-2xl  inline-block ' />
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