import { cn } from '@/lib/utils'

const PrimaryButton = ({ btntitle, btnIcon, className }) => {
    return (
        <button className={cn(' tracking-tighter px-3.5 py-2.5  rounded-full uppercase flex items-center gap-1.5 bg-gradient-to-r from-[#9817E3] via-[#FE3889]  to-orange-700 hover:from-orange-700 hover:to-[#9817E3] font-medium', className)}>
            <p className='text-lg'>{btnIcon}</p>
            {btntitle}
        </button>
    )
}

export default PrimaryButton