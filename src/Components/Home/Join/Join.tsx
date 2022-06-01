
function Join() {
    return (
        <section style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/Home/join-bg.jpeg'})`
        }} className="text-white p-10 bg-cover bg-center">
            <h1 className="mb-8 font-bold text-3xl">Join Today</h1>
            <div className="flex-top font-semibold">
                <div className="mr-10 max-w-[720px]">
                    <p className="mb-5 text-lg">
                        Get access to maintain your own <span className="opacity-70">
                        custom personal lists, track what you've seen
                        </span> and search and filter for <span className="opacity-70">what to watch next</span>—regardless 
                        if it's in theatres, on TV or available on popular streaming services like .
                    </p>
                    <button className="px-4 py-2 bg-[#7f5be7] rounded-md text-lg font-semibold">Sign Up</button>
                </div>
                <ul className="max-w-[460px] list-disc child:opacity-70">
                    <li>Enjoy TMDB ad free</li>
                    <li>Maintain a personal watchlist</li>
                    <li>Filter by your subscribed streaming services and find something to watch</li>
                    <li>Log the movies and TV shows you've seen</li>
                    <li>Build custom lists</li>
                    <li>Contribute to and improve our database</li>
                </ul>
            </div>
        </section>
    )
}

export default Join