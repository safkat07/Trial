import { CiSearch } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { RiMenuFold2Fill } from "react-icons/ri";
import { PiMonitor } from "react-icons/pi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { IoAmericanFootball } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import IconContainer from "../ReUseableComponents/IconContainer";

const iconsData = [
    { id: 1, title: "Home", icon: <GoHome /> },
    { id: 2, title: "Search", icon: <CiSearch /> },
    { id: 3, title: "Video", icon: <IoVideocamOutline /> },
    { id: 4, title: "Add to Playlist", icon: <RiMenuFold2Fill /> },
    { id: 5, title: "Monitor", icon: <PiMonitor /> },
    { id: 6, title: "Gamepad", icon: <TbDeviceGamepad2 /> },
    { id: 7, title: "Football", icon: <IoAmericanFootball /> }
];

const BannerIcons = () => {
    return (
        <div className='flex flex-col space-y-2.5  text-white'>
            {iconsData.map((icon,) => (
                <IconContainer key={icon.id} iconTitle={icon.title} iconName={icon.icon} />
            ))}
        </div>
    )
}

export default BannerIcons