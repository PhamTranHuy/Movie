import Join from '../Components/Home/Join/Join'
import Lasted from '../Components/Home/Lasted/Lasted'
import Popular from '../Components/Home/Popular/Popular'
import Trending from '../Components/Home/Trending/Trending'
import WelcomeBanner from '../Components/Home/WelcomeBanner/WelcomeBanner'
import Layout from '../HOC/Layout'

function Home() {
    return (
        <div className="bg-white">
            <div className="layout-max-w m-auto">
                <WelcomeBanner />
                <Popular />
                <Lasted />
                <Trending />
                <Join />
            </div>
        </div>
    )
}

export default Layout(Home)