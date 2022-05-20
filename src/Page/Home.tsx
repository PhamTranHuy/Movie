import Popular from '../Components/Home/Popular/Popular'
import WelcomeBanner from '../Components/Home/WelcomeBanner/WelcomeBanner'
import Layout from '../HOC/Layout'

function Home() {
    return (
        <div className="bg-white">
            <div className="layout-max-w m-auto">
                <WelcomeBanner />
                <Popular />
            </div>
        </div>
    )
}

export default Layout(Home)