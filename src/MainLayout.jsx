import NewestReleases from "./components/Content/NewestReleases"
import Banner from "./components/Header/Banner"
import Navbar from "./components/Header/Navbar"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <NewestReleases />
        </>
    )
}

export default MainLayout