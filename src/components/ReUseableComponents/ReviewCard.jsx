
const ReviewCard = ({ text, Icon }) => {
    return (
        <div className="flex gap-1  items-center text-white bg-gradient-to-r from-gray-800 to-neutral-800 text-sm px-3 py-2 rounded-full "><span className="text-lg">{Icon}</span> {text}</div>
    )
}

export default ReviewCard