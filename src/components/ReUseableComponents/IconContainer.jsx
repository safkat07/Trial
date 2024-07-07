import { cn } from "@/lib/utils";

const IconContainer = ({ iconName, className, iconTitle }) => {
    return (
        <button className={cn('text-lg p-3.5 uppercase relative hover:px-5 rounded-full bg-neutral-600 flex items-center gap-x-0 hover:gap-x-2.5 group transition-all duration-500', className)}>
            <span className="text-sm overflow-hidden tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity  size-0 group-hover:size-full ">
                {iconTitle}
            </span>
            <span className="text-xl">{iconName}</span>
        </button>
    );
}

export default IconContainer;
