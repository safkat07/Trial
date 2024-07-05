import img1 from '../../assets/lord2.jpeg'
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import MaxContentWrapper from '../ReUseableComponents/MaxContentWrapper';
import { GoHome } from "react-icons/go";
import IconContainer from '../ReUseableComponents/IconContainer';
import ReviewCard from '../ReUseableComponents/ReviewCard';
import { IoMdStar } from "react-icons/io";



const Banner = () => {
    return (
        <div className='h-dvh '>
            <img className='object-cover ' src={img1} alt="" />
            <div className=' absolute inset-0 text-white '>
                <MaxContentWrapper className={" flex w-full justify-between items-center"}>
                    <div className='flex flex-col   bottom-20 justify-between items- gap-y-40'>
                        <p><span className='text-4xl'>01</span><span className='text-neutral-500'>/05</span></p>
                        <div className='flex  flex-col gap-y-3 items-start'>
                            <p style={{
                                textOrientation: 'revert-layer',
                                writingMode: "vertical-lr"
                            }} className='text-lg'>
                                Scroll down
                            </p>
                            <p className=''>
                                <HiOutlineArrowLongDown className='' />
                            </p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='flex flex-col  items-end gap-y-3.5  '>
                            <div>
                                <p className='uppercase font-semibold text-9xl leading-none border inline-block tracking-tight  '>The lord <br /> of the rings</p>
                            </div>
                            <div className='flex  py-5 items-center gap-2.5'>
                                <ReviewCard Icon={<IoMdStar />} text={"4.9 Reviews"} />
                                <ReviewCard Icon={<IoMdStar />} text={"4.9 Reviews"} />
                                <ReviewCard Icon={<IoMdStar />} text={"4.9 Reviews"} />
                            </div>
                            <p>The Lord of the Rings is a trilogy of epic fantasy adventure films directed. </p>
                        </div>

                        <div className='flex flex-col gap-y-2.5'>
                            <IconContainer iconName={<GoHome />} />
                            <IconContainer iconName={<GoHome />} />
                            <IconContainer iconName={<GoHome />} />
                            <IconContainer iconName={<GoHome />} />
                            <IconContainer iconName={<GoHome />} />
                            <IconContainer iconName={<GoHome />} />
                            <IconContainer iconName={<GoHome />} />
                        </div>
                    </div>
                </MaxContentWrapper>
            </div>
        </div>
    )
}

export default Banner