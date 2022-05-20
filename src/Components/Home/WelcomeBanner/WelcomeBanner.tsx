import SeachBox from "./SeachBox"

function WelcomeBanner() {
  return (
    <section style={{backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%),
        url(${process.env.PUBLIC_URL + '/Home/welcome-benner-bg.jpeg'})`}} 
        className="h-80 flex-left-bottom text-white bg-top bg-cover">
        <div className="w-full pb-12 px-10">
            <div className="mb-12">
                <h1 className="font-bold text-5xl">Welcome.</h1>
                <h2 className="font-semibold text-3xl">Millions of movies, TV shows and people to discover. Explore now.</h2>
            </div>
            <SeachBox />
        </div>
    </section>
  )
}

export default WelcomeBanner