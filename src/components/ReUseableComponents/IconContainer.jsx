import { cn } from "@/lib/utils"

const IconContainer = ({ iconName, className }) => {
    return (
        <button className={cn('text-lg   p-3.5 rounded-full bg-neutral-600', className)}>
            {iconName}
        </button>
    )
}

export default IconContainer