import { cn } from "@/lib/utils";

const IconContainer = ({ iconName, className, iconTitle }) => {
    return (
        <div className="">

            <button className={cn('text-lg  p-3.5 uppercase w-12 h-full hover:w-full mx-auto  rounded-full bg-neutral-600 flex items-center   group transition-all', className)}>
                <span className="text-xs group-hover:mr-2 overflow-hidden tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity  size-0 group-hover:size-full ">
                    {iconTitle}
                </span>
                <span className="text-xl">{iconName}</span>
            </button>
        </div>
    );
}

export default IconContainer;
