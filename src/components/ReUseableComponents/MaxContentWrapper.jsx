import { cn } from "@/lib/utils"

const MaxContentWrapper = ({ children, className }) => {
    return (
        <div className={cn("h-full mx-auto w-full  px-2.5 md:px-10", className)}>
            {children}
        </div>
    )
}

export default MaxContentWrapper