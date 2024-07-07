import { CiSearch } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { RiMenuFold2Fill } from "react-icons/ri";
import { PiMonitor } from "react-icons/pi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { IoAmericanFootball } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import IconContainer from "../ReUseableComponents/IconContainer";

const iconsData = [
    { title: "Home", icon: <GoHome /> },
    { title: "Search", icon: <CiSearch /> },
    { title: "Video", icon: <IoVideocamOutline /> },
    { title: "Add to Playlist", icon: <RiMenuFold2Fill /> },
    { title: "Monitor", icon: <PiMonitor /> },
    { title: "Gamepad", icon: <TbDeviceGamepad2 /> },
    { title: "Football", icon: <IoAmericanFootball /> }
];
const BannerIcons = () => {
    return (
        <div className='flex flex-col gap-y-2.5 text-white'>
            {iconsData.map((icon, index) => (
                <IconContainer key={index} iconTitle={icon.title} iconName={icon.icon} />
            ))}
        </div>
    )
}

export default BannerIcons