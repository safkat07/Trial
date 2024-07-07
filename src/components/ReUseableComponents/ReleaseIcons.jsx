import { cn } from "@/lib/utils"

const ReleaseIcons = ({ icon, className }) => {
    return (
        <button className={cn('text-lg   p-3.5 rounded-full bg-neutral-600', className)}>
            {icon}
        </button>
    )
}

export default ReleaseIcons